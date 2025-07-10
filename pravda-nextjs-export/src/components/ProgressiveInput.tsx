
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Step {
  id: string
  question: string
  type: 'text' | 'email' | 'select' | 'phone'
  options?: string[]
  required?: boolean
}

interface ProgressiveInputProps {
  steps: Step[]
  onComplete: (data: Record<string, string>) => void
  className?: string
}

export function ProgressiveInput({ steps, onComplete, className }: ProgressiveInputProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isComplete, setIsComplete] = useState(false)

  const handleStepComplete = (value: string) => {
    const step = steps[currentStep]
    const newData = { ...formData, [step.id]: value }
    setFormData(newData)

    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      setIsComplete(true)
      onComplete(newData)
    }
  }

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center p-8 ${className}`}
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Благодарим!</h3>
        <p className="text-slate-300">Вашата заявка е изпратена успешно.</p>
      </motion.div>
    )
  }

  const currentStepData = steps[currentStep]

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-slate-400 mb-2">
          <span>Стъпка {currentStep + 1} от {steps.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <motion.div
            className="bg-[#ECB629] h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white mb-6">
            {currentStepData.question}
          </h3>

          <StepInput
            step={currentStepData}
            onComplete={handleStepComplete}
            defaultValue={formData[currentStepData.id] || ''}
          />

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <Button
              variant="ghost"
              onClick={goBack}
              disabled={currentStep === 0}
              className="text-slate-400 hover:text-white"
            >
              Назад
            </Button>
            <div className="text-sm text-slate-400">
              Натиснете Enter за продължаване
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

interface StepInputProps {
  step: Step
  onComplete: (value: string) => void
  defaultValue: string
}

function StepInput({ step, onComplete, defaultValue }: StepInputProps) {
  const [value, setValue] = useState(defaultValue)

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (value.trim() && (!step.required || value.trim().length > 0)) {
      onComplete(value.trim())
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  if (step.type === 'select' && step.options) {
    return (
      <Select onValueChange={onComplete} defaultValue={defaultValue}>
        <SelectTrigger className="w-full bg-slate-800 border-slate-600 text-white">
          <SelectValue placeholder="Изберете опция..." />
        </SelectTrigger>
        <SelectContent>
          {step.options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type={step.type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Въведете отговора си..."
        className="w-full bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-[#ECB629]"
        autoFocus
        required={step.required}
      />
      <Button
        type="submit"
        disabled={!value.trim()}
        className="w-full bg-[#ECB629] hover:bg-[#ECB629]/90 text-black font-semibold"
      >
        Продължи
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
