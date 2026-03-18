'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Clock, DollarSign, ArrowRight, Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ProjectType = 'mvp' | 'webapp' | 'mobile' | 'ai-integration' | 'saas';
type Complexity = 'simple' | 'medium' | 'complex';
type Timeline = 'flexible' | 'normal' | 'urgent';

interface FormData {
  projectType: ProjectType | null;
  complexity: Complexity | null;
  timeline: Timeline | null;
  features: string[];
  name: string;
  email: string;
  company: string;
  description: string;
}

const projectTypes = [
  { id: 'mvp' as ProjectType, label: 'MVP / Prototype', basePrice: 2500, baseDays: 14 },
  { id: 'webapp' as ProjectType, label: 'Web Application', basePrice: 7000, baseDays: 42 },
  { id: 'mobile' as ProjectType, label: 'Mobile App', basePrice: 9000, baseDays: 56 },
  { id: 'ai-integration' as ProjectType, label: 'AI Integration', basePrice: 3500, baseDays: 21 },
  { id: 'saas' as ProjectType, label: 'SaaS Platform', basePrice: 15000, baseDays: 84 },
];

const complexityOptions = [
  { id: 'simple' as Complexity, label: 'Simple', multiplier: 1, description: 'Core features only' },
  { id: 'medium' as Complexity, label: 'Medium', multiplier: 1.5, description: 'Advanced features' },
  { id: 'complex' as Complexity, label: 'Complex', multiplier: 2.2, description: 'Custom architecture' },
];

const timelineOptions = [
  { id: 'flexible' as Timeline, label: 'Flexible', multiplier: 0.9, description: 'No hard deadline' },
  { id: 'normal' as Timeline, label: 'Normal', multiplier: 1, description: 'Standard timeline' },
  { id: 'urgent' as Timeline, label: 'Urgent', multiplier: 1.4, description: 'Accelerated delivery (+40%)' },
];

const featureOptions = [
  { id: 'auth', label: 'User Authentication', price: 500, days: 3 },
  { id: 'payments', label: 'Payment Processing', price: 800, days: 5 },
  { id: 'dashboard', label: 'Analytics Dashboard', price: 1200, days: 7 },
  { id: 'chatbot', label: 'AI Chatbot', price: 1500, days: 10 },
  { id: 'api', label: 'Public API', price: 1000, days: 7 },
  { id: 'notifications', label: 'Push Notifications', price: 600, days: 4 },
  { id: 'multilang', label: 'Multi-Language', price: 400, days: 3 },
  { id: 'admin', label: 'Admin Panel', price: 900, days: 5 },
];

export function ProjectFormSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectType: null,
    complexity: null,
    timeline: null,
    features: [],
    name: '',
    email: '',
    company: '',
    description: '',
  });

  const estimate = useMemo(() => {
    if (!formData.projectType || !formData.complexity || !formData.timeline) {
      return { minPrice: 0, maxPrice: 0, minDays: 0, maxDays: 0 };
    }

    const project = projectTypes.find((p) => p.id === formData.projectType);
    const complexity = complexityOptions.find((c) => c.id === formData.complexity);
    const timeline = timelineOptions.find((t) => t.id === formData.timeline);

    if (!project || !complexity || !timeline) {
      return { minPrice: 0, maxPrice: 0, minDays: 0, maxDays: 0 };
    }

    // Calculate base
    let basePrice = project.basePrice * complexity.multiplier * timeline.multiplier;
    let baseDays = project.baseDays * complexity.multiplier;

    // Add features
    const selectedFeatures = featureOptions.filter((f) =>
      formData.features.includes(f.id)
    );
    const featuresPrice = selectedFeatures.reduce((sum, f) => sum + f.price, 0);
    const featuresDays = selectedFeatures.reduce((sum, f) => sum + f.days, 0);

    basePrice += featuresPrice * timeline.multiplier;
    baseDays += featuresDays;

    // Adjust days for timeline
    if (timeline.id === 'urgent') {
      baseDays = Math.ceil(baseDays * 0.7);
    } else if (timeline.id === 'flexible') {
      baseDays = Math.ceil(baseDays * 1.2);
    }

    return {
      minPrice: Math.round(basePrice * 0.85),
      maxPrice: Math.round(basePrice * 1.15),
      minDays: Math.ceil(baseDays * 0.9),
      maxDays: Math.ceil(baseDays * 1.1),
    };
  }, [formData]);

  const toggleFeature = (featureId: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter((f) => f !== featureId)
        : [...prev.features, featureId],
    }));
  };

  const canProceed = () => {
    if (step === 1) return formData.projectType !== null;
    if (step === 2) return formData.complexity !== null && formData.timeline !== null;
    if (step === 3) return true;
    if (step === 4) return formData.name && formData.email;
    return false;
  };

  return (
    <section id="estimate" className="section bg-[var(--background-secondary)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-12 md:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                Estimator
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-headline mb-6"
            >
              Project Estimator
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-body-lg text-[var(--foreground-secondary)]"
            >
              Get an instant estimate of your project&apos;s cost and timeline.
            </motion.p>
          </div>
          <span className="page-number hidden md:block">09</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Progress Steps */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <button
                    onClick={() => s < step && setStep(s)}
                    className={cn(
                      'w-8 h-8 flex items-center justify-center text-mono-sm border transition-all',
                      step === s
                        ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]'
                        : step > s
                          ? 'bg-[var(--background)] text-[var(--foreground)] border-[var(--foreground)] cursor-pointer'
                          : 'bg-transparent text-[var(--foreground-muted)] border-[var(--border)]'
                    )}
                  >
                    {step > s ? <Check className="w-4 h-4" /> : s}
                  </button>
                  {s < 4 && (
                    <div
                      className={cn(
                        'w-8 md:w-16 h-px',
                        step > s ? 'bg-[var(--foreground)]' : 'bg-[var(--border)]'
                      )}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="bg-[var(--background)] border border-[var(--border)] p-6 md:p-8 min-h-[400px]">
              {/* Step 1: Project Type */}
              {step === 1 && (
                <div>
                  <h3 className="text-title mb-2">Project Type</h3>
                  <p className="text-body-sm text-[var(--foreground-muted)] mb-6">
                    Select the type of project that best matches your needs.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setFormData((prev) => ({ ...prev, projectType: type.id }))}
                        className={cn(
                          'p-4 border text-left transition-all',
                          formData.projectType === type.id
                            ? 'border-[var(--foreground)] bg-[var(--background-secondary)]'
                            : 'border-[var(--border)] hover:border-[var(--foreground-muted)]'
                        )}
                      >
                        <div className="text-body font-medium mb-1">{type.label}</div>
                        <div className="text-mono-sm text-[var(--foreground-muted)]">
                          From ${type.basePrice.toLocaleString()}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Complexity & Timeline */}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-title mb-2">Complexity</h3>
                    <p className="text-body-sm text-[var(--foreground-muted)] mb-4">
                      Assess the technical complexity of your project.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {complexityOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setFormData((prev) => ({ ...prev, complexity: option.id }))}
                          className={cn(
                            'p-4 border text-left transition-all',
                            formData.complexity === option.id
                              ? 'border-[var(--foreground)] bg-[var(--background-secondary)]'
                              : 'border-[var(--border)] hover:border-[var(--foreground-muted)]'
                          )}
                        >
                          <div className="text-body font-medium mb-1">{option.label}</div>
                          <div className="text-mono-sm text-[var(--foreground-muted)]">
                            {option.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-title mb-2">Timeline</h3>
                    <p className="text-body-sm text-[var(--foreground-muted)] mb-4">
                      Indicate your time constraints.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {timelineOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setFormData((prev) => ({ ...prev, timeline: option.id }))}
                          className={cn(
                            'p-4 border text-left transition-all',
                            formData.timeline === option.id
                              ? 'border-[var(--foreground)] bg-[var(--background-secondary)]'
                              : 'border-[var(--border)] hover:border-[var(--foreground-muted)]'
                          )}
                        >
                          <div className="text-body font-medium mb-1">{option.label}</div>
                          <div className="text-mono-sm text-[var(--foreground-muted)]">
                            {option.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Features */}
              {step === 3 && (
                <div>
                  <h3 className="text-title mb-2">Additional Features</h3>
                  <p className="text-body-sm text-[var(--foreground-muted)] mb-6">
                    Select the features you need (optional).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {featureOptions.map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={cn(
                          'p-4 border text-left transition-all flex items-center justify-between',
                          formData.features.includes(feature.id)
                            ? 'border-[var(--foreground)] bg-[var(--background-secondary)]'
                            : 'border-[var(--border)] hover:border-[var(--foreground-muted)]'
                        )}
                      >
                        <div>
                          <div className="text-body font-medium">{feature.label}</div>
                          <div className="text-mono-sm text-[var(--foreground-muted)]">
                            +${feature.price} / +{feature.days} days
                          </div>
                        </div>
                        <div
                          className={cn(
                            'w-5 h-5 border flex items-center justify-center',
                            formData.features.includes(feature.id)
                              ? 'bg-[var(--foreground)] border-[var(--foreground)]'
                              : 'border-[var(--border)]'
                          )}
                        >
                          {formData.features.includes(feature.id) && (
                            <Check className="w-3 h-3 text-[var(--background)]" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Contact */}
              {step === 4 && (
                <div>
                  <h3 className="text-title mb-2">Your Details</h3>
                  <p className="text-body-sm text-[var(--foreground-muted)] mb-6">
                    Fill in your info to receive a detailed quote.
                  </p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-mono-sm text-[var(--foreground-muted)] mb-2 block">
                          Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          className="w-full p-3 border border-[var(--border)] bg-transparent text-body focus:outline-none focus:border-[var(--foreground)]"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-mono-sm text-[var(--foreground-muted)] mb-2 block">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          className="w-full p-3 border border-[var(--border)] bg-transparent text-body focus:outline-none focus:border-[var(--foreground)]"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-mono-sm text-[var(--foreground-muted)] mb-2 block">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        className="w-full p-3 border border-[var(--border)] bg-transparent text-body focus:outline-none focus:border-[var(--foreground)]"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="text-mono-sm text-[var(--foreground-muted)] mb-2 block">
                        Project Description
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                        rows={4}
                        className="w-full p-3 border border-[var(--border)] bg-transparent text-body focus:outline-none focus:border-[var(--foreground)] resize-none"
                        placeholder="Briefly describe your project..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--border)]">
                {step > 1 ? (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                ) : (
                  <div />
                )}
                {step < 4 ? (
                  <Button onClick={() => setStep(step + 1)} disabled={!canProceed()}>
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button disabled={!canProceed()} className="group">
                    Submit Request
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Estimate Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 bg-[var(--foreground)] text-[var(--background)] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-5 h-5" />
                <h3 className="text-title">Estimation</h3>
              </div>

              {estimate.minPrice > 0 ? (
                <>
                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-[var(--background)]/20">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-[var(--background)]/60" />
                      <span className="text-mono-sm text-[var(--background)]/60 uppercase">
                        Estimated Budget
                      </span>
                    </div>
                    <div className="text-display text-2xl md:text-3xl break-words">
                      ${estimate.minPrice.toLocaleString()} – ${estimate.maxPrice.toLocaleString()}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mb-6 pb-6 border-b border-[var(--background)]/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-[var(--background)]/60" />
                      <span className="text-mono-sm text-[var(--background)]/60 uppercase">
                        Estimated Timeline
                      </span>
                    </div>
                    <div className="text-display text-2xl md:text-3xl">
                      {estimate.minDays} – {estimate.maxDays} days
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="space-y-2 text-body-sm">
                    {formData.projectType && (
                      <div className="flex justify-between">
                        <span className="text-[var(--background)]/60">Type</span>
                        <span>{projectTypes.find((p) => p.id === formData.projectType)?.label}</span>
                      </div>
                    )}
                    {formData.complexity && (
                      <div className="flex justify-between">
                        <span className="text-[var(--background)]/60">Complexity</span>
                        <span>{complexityOptions.find((c) => c.id === formData.complexity)?.label}</span>
                      </div>
                    )}
                    {formData.timeline && (
                      <div className="flex justify-between">
                        <span className="text-[var(--background)]/60">Timeline</span>
                        <span>{timelineOptions.find((t) => t.id === formData.timeline)?.label}</span>
                      </div>
                    )}
                    {formData.features.length > 0 && (
                      <div className="flex justify-between">
                        <span className="text-[var(--background)]/60">Features</span>
                        <span>{formData.features.length} selected</span>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <Info className="w-8 h-8 mx-auto mb-4 text-[var(--background)]/40" />
                  <p className="text-body text-[var(--background)]/60">
                    Complete the form to see your real-time estimate.
                  </p>
                </div>
              )}

              {/* Disclaimer */}
              <div className="mt-6 pt-6 border-t border-[var(--background)]/20">
                <p className="text-mono-sm text-[var(--background)]/40">
                  * Indicative estimate. Free detailed quote after project analysis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="origin-left mt-12 md:mt-16"
        >
          <div className="line-h" />
        </motion.div>
      </div>
    </section>
  );
}
