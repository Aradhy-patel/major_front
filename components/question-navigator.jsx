"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

export function QuestionNavigator({ 
  questions, 
  currentIndex, 
  onNavigate,
  completedQuestions 
}) {
  if (questions.length === 0) return null

  return (
    <div className="flex items-center justify-between bg-card border border-border rounded-lg p-3">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onNavigate(currentIndex - 1)}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </Button>

      <div className="flex items-center gap-2">
        {questions.map((_, idx) => (
          <Button
            key={idx}
            variant={currentIndex === idx ? "default" : "outline"}
            size="sm"
            className={`w-8 h-8 p-0 relative ${
              completedQuestions.has(idx) && currentIndex !== idx
                ? "border-green-500/50 text-green-400"
                : ""
            }`}
            onClick={() => onNavigate(idx)}
          >
            {completedQuestions.has(idx) ? (
              <Check className="h-3 w-3" />
            ) : (
              idx + 1
            )}
          </Button>
        ))}
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => onNavigate(currentIndex + 1)}
        disabled={currentIndex === questions.length - 1}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  )
}
