'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

const POINT_COUNT = 400;
const SHAPE_DURATION = 3000; // ms per shape
const TRANSITION_DURATION = 1500; // ms for morphing

// Generate points for a cube
function generateCube(count: number): Point3D[] {
  const points: Point3D[] = [];
  const pointsPerFace = Math.floor(count / 6);
  const size = 1.0; // Reduced to prevent cut-off

  // Generate points on each face
  const faces = [
    { axis: 'z', value: size, u: 'x', v: 'y' },
    { axis: 'z', value: -size, u: 'x', v: 'y' },
    { axis: 'x', value: size, u: 'z', v: 'y' },
    { axis: 'x', value: -size, u: 'z', v: 'y' },
    { axis: 'y', value: size, u: 'x', v: 'z' },
    { axis: 'y', value: -size, u: 'x', v: 'z' },
  ];

  faces.forEach((face) => {
    for (let i = 0; i < pointsPerFace; i++) {
      const point: Point3D = { x: 0, y: 0, z: 0 };
      const u = (Math.random() - 0.5) * 2 * size;
      const v = (Math.random() - 0.5) * 2 * size;

      point[face.axis as keyof Point3D] = face.value;
      point[face.u as keyof Point3D] = u;
      point[face.v as keyof Point3D] = v;

      points.push(point);
    }
  });

  // Fill remaining points on edges
  while (points.length < count) {
    const edge = Math.floor(Math.random() * 12);
    const t = (Math.random() - 0.5) * 2 * size;
    const point: Point3D = { x: 0, y: 0, z: 0 };

    if (edge < 4) {
      point.x = t;
      point.y = edge < 2 ? size : -size;
      point.z = edge % 2 === 0 ? size : -size;
    } else if (edge < 8) {
      point.y = t;
      point.x = edge < 6 ? size : -size;
      point.z = edge % 2 === 0 ? size : -size;
    } else {
      point.z = t;
      point.x = edge < 10 ? size : -size;
      point.y = edge % 2 === 0 ? size : -size;
    }

    points.push(point);
  }

  return points.slice(0, count);
}

// Generate points for a sphere
function generateSphere(count: number): Point3D[] {
  const points: Point3D[] = [];
  const radius = 1.15;

  for (let i = 0; i < count; i++) {
    // Fibonacci sphere distribution for even spacing
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;

    points.push({
      x: radius * Math.sin(phi) * Math.cos(theta),
      y: radius * Math.sin(phi) * Math.sin(theta),
      z: radius * Math.cos(phi),
    });
  }

  return points;
}

// Generate points for a pyramid (tetrahedron-like)
function generatePyramid(count: number): Point3D[] {
  const points: Point3D[] = [];
  const height = 1.2;
  const baseRadius = 1.1;

  // Vertices of pyramid - consistent orientation with other shapes
  const apex: Point3D = { x: 0, y: -height, z: 0 };
  const baseVertices: Point3D[] = [
    { x: baseRadius, y: height * 0.5, z: 0 },
    { x: -baseRadius * 0.5, y: height * 0.5, z: -baseRadius * 0.866 },
    { x: -baseRadius * 0.5, y: height * 0.5, z: baseRadius * 0.866 },
  ];

  const pointsPerFace = Math.floor(count / 4);

  // Points on triangular faces
  for (let face = 0; face < 3; face++) {
    const v1 = apex;
    const v2 = baseVertices[face];
    const v3 = baseVertices[(face + 1) % 3];

    for (let i = 0; i < pointsPerFace; i++) {
      let r1 = Math.random();
      let r2 = Math.random();
      if (r1 + r2 > 1) {
        r1 = 1 - r1;
        r2 = 1 - r2;
      }
      const r3 = 1 - r1 - r2;

      points.push({
        x: v1.x * r1 + v2.x * r2 + v3.x * r3,
        y: v1.y * r1 + v2.y * r2 + v3.y * r3,
        z: v1.z * r1 + v2.z * r2 + v3.z * r3,
      });
    }
  }

  // Points on base
  for (let i = points.length; i < count; i++) {
    let r1 = Math.random();
    let r2 = Math.random();
    if (r1 + r2 > 1) {
      r1 = 1 - r1;
      r2 = 1 - r2;
    }
    const r3 = 1 - r1 - r2;

    points.push({
      x: baseVertices[0].x * r1 + baseVertices[1].x * r2 + baseVertices[2].x * r3,
      y: height * 0.5,
      z: baseVertices[0].z * r1 + baseVertices[1].z * r2 + baseVertices[2].z * r3,
    });
  }

  return points.slice(0, count);
}

// Lerp between two points
function lerpPoint(p1: Point3D, p2: Point3D, t: number): Point3D {
  return {
    x: p1.x + (p2.x - p1.x) * t,
    y: p1.y + (p2.y - p1.y) * t,
    z: p1.z + (p2.z - p1.z) * t,
  };
}

// Smooth easing function
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Rotate point around Y axis
function rotateY(point: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: point.x * cos - point.z * sin,
    y: point.y,
    z: point.x * sin + point.z * cos,
  };
}

// Rotate point around X axis
function rotateX(point: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: point.x,
    y: point.y * cos - point.z * sin,
    z: point.y * sin + point.z * cos,
  };
}

// Project 3D point to 2D with perspective
function project(
  point: Point3D,
  width: number,
  height: number,
  fov: number,
  distance: number
): { x: number; y: number; scale: number } {
  const factor = fov / (distance + point.z);
  return {
    x: point.x * factor + width / 2,
    y: point.y * factor + height / 2,
    scale: factor,
  };
}

export function PointGeometry() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const shapesRef = useRef<Point3D[][]>([]);
  const startTimeRef = useRef<number>(0);
  const displaySizeRef = useRef<{ width: number; height: number }>({ width: 0, height: 0 });

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const shapes = shapesRef.current;
    if (shapes.length === 0) return;

    const now = performance.now();
    const elapsed = now - startTimeRef.current;

    // Calculate which shapes we're morphing between
    const totalCycleDuration = (SHAPE_DURATION + TRANSITION_DURATION) * shapes.length;
    const cycleTime = elapsed % totalCycleDuration;

    let currentShapeIndex = 0;
    let morphProgress = 0;
    let accumulatedTime = 0;

    for (let i = 0; i < shapes.length; i++) {
      const shapeEnd = accumulatedTime + SHAPE_DURATION;
      const transitionEnd = shapeEnd + TRANSITION_DURATION;

      if (cycleTime < shapeEnd) {
        currentShapeIndex = i;
        morphProgress = 0;
        break;
      } else if (cycleTime < transitionEnd) {
        currentShapeIndex = i;
        morphProgress = (cycleTime - shapeEnd) / TRANSITION_DURATION;
        break;
      }

      accumulatedTime = transitionEnd;
    }

    const nextShapeIndex = (currentShapeIndex + 1) % shapes.length;
    const easedProgress = easeInOutCubic(morphProgress);

    // Rotation angles (continuous spin)
    const rotationY = (elapsed * 0.0003) % (Math.PI * 2);
    const rotationX = Math.sin(elapsed * 0.0002) * 0.3 + 0.2;

    // Get display size (not scaled canvas size)
    const displayWidth = displaySizeRef.current.width;
    const displayHeight = displaySizeRef.current.height;

    if (displayWidth === 0 || displayHeight === 0) return;

    // Clear canvas
    ctx.fillStyle = '#fafafa';
    ctx.fillRect(0, 0, displayWidth, displayHeight);

    // Calculate current points
    const currentShape = shapes[currentShapeIndex];
    const nextShape = shapes[nextShapeIndex];

    const points: { x: number; y: number; scale: number; z: number }[] = [];

    for (let i = 0; i < POINT_COUNT; i++) {
      // Interpolate between shapes
      let point = lerpPoint(currentShape[i], nextShape[i], easedProgress);

      // Apply rotations
      point = rotateY(point, rotationY);
      point = rotateX(point, rotationX);

      // Project to 2D using display size for proper centering
      const projected = project(point, displayWidth, displayHeight, 420, 3.2);
      points.push({ ...projected, z: point.z });
    }

    // Sort by z-depth (painter's algorithm)
    points.sort((a, b) => a.z - b.z);

    // Draw square pixels in orange
    points.forEach((point) => {
      const baseSize = 3;
      const size = Math.max(2, baseSize * (point.scale / 70));
      const opacity = Math.min(1, Math.max(0.3, (point.z + 2) / 4));

      ctx.fillStyle = `rgba(249, 115, 22, ${opacity})`; // Orange color
      ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
    });

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Generate shapes once
    shapesRef.current = [
      generateCube(POINT_COUNT),
      generateSphere(POINT_COUNT),
      generatePyramid(POINT_COUNT),
    ];
    startTimeRef.current = performance.now();

    // Handle resize
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const container = canvas.parentElement;
      if (!container) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();

      // Store display size for projection calculations
      displaySizeRef.current = { width: rect.width, height: rect.height };

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        aria-hidden="true"
        role="presentation"
      />
    </div>
  );
}
