import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { CheckCircle2, XCircle, ArrowRight, RefreshCcw } from 'lucide-react';

const Quiz: React.FC = () => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const question = QUIZ_QUESTIONS[currentQuestionIdx];

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-gold">
          <h2 className="text-3xl font-bold text-deepTeal mb-4">Quiz Complete!</h2>
          <div className="mb-6">
            <span className="text-6xl font-bold text-gold">{score}</span>
            <span className="text-2xl text-gray-400">/{QUIZ_QUESTIONS.length}</span>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            {score === QUIZ_QUESTIONS.length 
              ? "Outstanding! You're ready to lead the AI revolution." 
              : "Great effort! Review the concepts and try again to master the basics."}
          </p>
          
          <div className="bg-gradient-to-r from-deepTeal to-teal-800 rounded-xl p-8 text-white shadow-lg transform scale-105 mb-8">
            <p className="text-xl font-light mb-4 opacity-90 italic leading-relaxed">
              "AI is 90% people and 10% tech"
            </p>
            <p className="font-bold text-gold text-lg">
              — Nadia Ellis
            </p>
          </div>

          <button 
            onClick={handleRestart}
            className="flex items-center justify-center mx-auto px-6 py-3 bg-gray-100 text-gray-600 font-bold rounded-lg hover:bg-gray-200 transition-all"
          >
            <RefreshCcw size={20} className="mr-2" /> Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-deepTeal">Knowledge Check</h2>
          <p className="text-gray-500 text-sm mt-1">Question {currentQuestionIdx + 1} of {QUIZ_QUESTIONS.length}</p>
        </div>
        <div className="text-sm font-bold text-gold bg-yellow-50 px-3 py-1 rounded-full">
           Score: {score}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-2">
          <div 
            className="bg-deepTeal h-2 transition-all duration-300" 
            style={{ width: `${((currentQuestionIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
          ></div>
        </div>

        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 leading-relaxed">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              let btnClass = "border-gray-200 hover:bg-gray-50 text-gray-700";
              let icon = null;

              if (isAnswered) {
                if (idx === question.correctAnswer) {
                  btnClass = "border-green-500 bg-green-50 text-green-800";
                  icon = <CheckCircle2 className="text-green-600 ml-auto" size={20} />;
                } else if (idx === selectedOption) {
                  btnClass = "border-red-500 bg-red-50 text-red-800";
                  icon = <XCircle className="text-red-600 ml-auto" size={20} />;
                } else {
                  btnClass = "border-gray-100 text-gray-400 opacity-50";
                }
              } else if (selectedOption === idx) {
                 btnClass = "border-deepTeal bg-teal-50 text-deepTeal";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center font-medium ${btnClass}`}
                >
                  <span className="mr-2 opacity-60">{String.fromCharCode(65 + idx)}.</span> {option}
                  {icon}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="mt-6 animate-fade-in">
              <div className={`p-4 rounded-lg mb-6 text-sm leading-relaxed ${
                selectedOption === question.correctAnswer 
                  ? 'bg-green-50 text-green-800 border border-green-100' 
                  : 'bg-blue-50 text-blue-800 border border-blue-100'
              }`}>
                <span className="font-bold block mb-1">
                  {selectedOption === question.correctAnswer ? 'Correct!' : 'Insight:'}
                </span>
                {question.explanation}
              </div>
              
              <button
                onClick={handleNext}
                className="w-full py-4 bg-deepTeal text-white font-bold rounded-lg hover:bg-teal-800 transition-all shadow-md flex justify-center items-center"
              >
                {currentQuestionIdx < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'See Results'}
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;