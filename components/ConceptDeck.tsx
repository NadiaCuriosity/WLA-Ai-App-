import React from 'react';
import { CONCEPTS } from '../constants';
import { Brain, Scale, TrendingUp, User, MessageSquare, Shield, Zap } from 'lucide-react';

const iconMap = {
  Brain: Brain,
  Scale: Scale,
  Ladder: TrendingUp,
  User: User,
  Message: MessageSquare,
  Shield: Shield,
  Zap: Zap
};

const ConceptDeck: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-deepTeal mb-2">Core Concepts</h2>
        <p className="text-gray-600">
          Anchors to remember the key insights from the AI for Leaders workshop.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CONCEPTS.map((concept) => {
          const Icon = iconMap[concept.iconName];
          return (
            <div key={concept.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-1 bg-gradient-to-r from-deepTeal to-gold w-full"></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-teal-50 rounded-lg text-deepTeal group-hover:bg-deepTeal group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  {concept.tagline && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold bg-yellow-50 px-2 py-1 rounded">
                      {concept.tagline}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-deepTeal mb-3">{concept.title}</h3>
                <p className="text-gray-600 mb-6 flex-1 leading-relaxed text-sm">
                  {concept.description}
                </p>
                
                <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-gold">
                  <p className="text-xs font-medium text-gray-500 uppercase mb-1">Memory Anchor</p>
                  <p className="text-sm font-semibold text-deepTeal italic">
                    {concept.memoryAnchor}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConceptDeck;
