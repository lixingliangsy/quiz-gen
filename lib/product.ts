export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  "name": "QuizGen",
  "slug": "quiz-gen",
  "tagline": "Quizzes from any topic in one click",
  "description": "Turn a topic and difficulty into a set of questions with model answers - for teachers, tutors, and self-learners. Export and reuse.",
  "toolTitle": "Generate a quiz",
  "resultLabel": "Your quiz",
  "ctaLabel": "Generate quiz",
  "features": [
    "Questions + answers",
    "Difficulty presets",
    "Any subject",
    "Copy / export"
  ],
  "inputs": [
    {
      "key": "topic",
      "label": "Topic",
      "type": "input",
      "placeholder": "e.g. Photosynthesis"
    },
    {
      "key": "count",
      "label": "Number of questions",
      "type": "select",
      "options": [
        "5",
        "10",
        "15"
      ]
    },
    {
      "key": "level",
      "label": "Difficulty",
      "type": "select",
      "options": [
        "Easy",
        "Medium",
        "Hard"
      ]
    }
  ],
  "systemPrompt": "You are a teacher. Given a topic, number of questions, and difficulty, produce that many quiz questions with a model answer each. Vary question types.",
  "pricing": [
    {
      "tier": "Free",
      "price": "$0",
      "desc": "5 quizzes/month"
    },
    {
      "tier": "Plus",
      "price": "$9/mo",
      "desc": "Unlimited, export"
    },
    {
      "tier": "Classroom",
      "price": "$29/mo",
      "desc": "Bulk, answer keys, share"
    }
  ],
  mock: (inputs: Record<string, string>): string => {
  const topic = inputs['topic'] || 'Photosynthesis'
  const n = inputs['count'] || '5'
  const level = inputs['level'] || 'Easy'
  return `QUIZ - ${topic} (${level}, ${n} questions)
1. What is the main input of ${topic}?
2. Where does ${topic} mainly happen?
3. Name one product of ${topic}.
4. Why is ${topic} important for life on Earth?
5. Compare ${topic} with the alternative process.
---
(Mock quiz. Add OPENAI_API_KEY for topic-specific, graded questions with answers.)`
  }
}
