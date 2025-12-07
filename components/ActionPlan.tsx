import React, { useState } from 'react';
import { ACTION_PLAN } from '../constants';
import { CheckCircle2, Circle } from 'lucide-react';

const ActionPlan: React.FC = () => {
  // Simple state to track checked items (not persisted for simplicity in this demo)
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const immediateActions = ACTION_PLAN.filter(i => i.type === 'immediate');
  const practiceActions = ACTION_PLAN.filter(i => i.type === 'practice');

  const renderSection = (title: string, actions: typeof ACTION_PLAN, offset: number) => (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-deepTeal mb-4 border-b border-gray-200 pb-2">{title}</h3>
      <div className="space-y-3">
        {actions.map((action, idx) => {
          const globalIdx = offset + idx;
          const isChecked = checkedItems.has(globalIdx);
          return (
            <button
              key={globalIdx}
              onClick={() => toggleItem(globalIdx)}
              className={`w-full text-left p-4 rounded-lg flex items-start transition-all duration-200 ${
                isChecked ? 'bg-teal-50 border border-teal-200' : 'bg-white border border-gray-100 hover:border-gold'
              } shadow-sm`}
            >
              <div className={`mt-1 mr-4 flex-shrink-0 ${isChecked ? 'text-deepTeal' : 'text-gray-300'}`}>
                {isChecked ? <CheckCircle2 size={24} /> : <Circle size={24} />}
              </div>
              <div>
                <h4 className={`font-bold ${isChecked ? 'text-deepTeal line-through decoration-gold' : 'text-gray-800'}`}>
                  {action.title}
                </h4>
                <p className={`text-sm mt-1 ${isChecked ? 'text-gray-500' : 'text-gray-600'}`}>
                  {action.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-deepTeal mb-2">Action Plan</h2>
        <p className="text-gray-600">Practical steps to integrate AI into your leadership workflow.</p>
      </div>

      {renderSection('Try This Today', immediateActions, 0)}
      {renderSection('Next Steps for Practice', practiceActions, immediateActions.length)}
      
      <div className="mt-8 bg-gradient-to-r from-deepTeal to-teal-800 rounded-xl p-8 text-white text-center shadow-lg">
        <p className="text-lg font-light mb-4 opacity-90">
          "You are not late. We're all very, very early."
        </p>
        <p className="font-bold text-gold text-xl">
          — Nadia Ellis
        </p>
      </div>
    </div>
  );
};

export default ActionPlan;
