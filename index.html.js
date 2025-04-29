import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const questions = [
  {
    question: "What is the first thing you should do before starting any work?",
    options: [
      "Start working immediately",
      "Ask a coworker for help",
      "Review the job's safety procedures",
      "Wait for instructions"
    ],
    answer: 2
  },
  {
    question: "What does PPE stand for?",
    options: [
      "Personal Protection Equipment",
      "Power Protective Equipment",
      "Permanent Protective Environment",
      "Proper Protection Essentials"
    ],
    answer: 0
  },
  {
    question: "When should a fire extinguisher be used?",
    options: [
      "Only by the safety officer",
      "During a large uncontrollable fire",
      "Only after calling the fire department",
      "In small, manageable fires only"
    ],
    answer: 3
  },
  {
    question: "Which of the following is NOT a type of fire extinguisher?",
    options: ["DCP", "CO₂", "ABC", "H₂O₂"],
    answer: 3
  },
  {
    question: "If you see someone not wearing PPE in a hazardous area, what should you do?",
    options: [
      "Ignore it",
      "Tell your supervisor",
      "Join them",
      "Take a picture"
    ],
    answer: 1
  },
  {
    question: "What should be done before working at height?",
    options: [
      "Just be careful",
      "Wear gloves",
      "Use a proper safety harness",
      "Avoid looking down"
    ],
    answer: 2
  },
  {
    question: "What is the emergency number in your plant?",
    options: ["100", "101", "1001", "911"],
    answer: 2
  },
  {
    question: "What should you do if you find a chemical spill?",
    options: [
      "Walk away",
      "Clean it immediately with cloth",
      "Inform the safety department",
      "Call your friend"
    ],
    answer: 2
  },
  {
    question: "What color helmet is typically worn by a safety officer?",
    options: ["White", "Green", "Red", "Blue"],
    answer: 0
  },
  {
    question: "When should safety procedures be followed?",
    options: [
      "Only during audits",
      "Only when the supervisor is watching",
      "At all times",
      "Only in risky jobs"
    ],
    answer: 2
  }
];

export default function SafetyQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">🦺 Workplace Safety Quiz</h1>
      <Card className="rounded-2xl shadow-lg p-6">
        <CardContent>
          {showScore ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Quiz Completed 🎉</h2>
              <p className="text-xl">Your Score: {score} / {questions.length}</p>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Q{current + 1}: {questions[current].question}
              </h2>
              <div className="grid gap-4">
                {questions[current].options.map((option, i) => (
                  <Button key={i} variant="outline" onClick={() => handleAnswer(i)}>
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
