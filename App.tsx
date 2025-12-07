import React, { useState } from 'react';
import Navigation from './components/Navigation';
import CritGenerator from './components/CritGenerator';
import ConceptDeck from './components/ConceptDeck';
import Quiz from './components/Quiz';
import ActionPlan from './components/ActionPlan';
import { ViewState } from './types';
import { ArrowRight, Linkedin, Lightbulb, PenTool, CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12 animate-fade-in">
             <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-3xl border-t-8 border-deepTeal relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Lightbulb size={150} />
                </div>
                <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest text-deepTeal uppercase bg-teal-50 rounded-full">
                  Wanaka Leadership Academy
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-deepTeal mb-6 leading-tight tracking-tight">
                  AI for Leaders
                </h1>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Master the transition from fearless avoidance to strategic engagement. Use these tools to anchor your learning and build your AI capability.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                  <button 
                    onClick={() => setView('crit-tool')}
                    className="flex items-center justify-center px-8 py-4 bg-deepTeal text-white font-bold rounded-xl hover:bg-teal-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Launch CRIT Builder <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl text-left">
                <button 
                  onClick={() => setView('concepts')}
                  className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gold transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-gold transition-colors"></div>
                  <div className="mb-4 text-deepTeal group-hover:scale-110 transition-transform origin-left">
                    <Lightbulb size={32} />
                  </div>
                  <h3 className="text-deepTeal font-bold text-xl mb-2 group-hover:text-gold transition-colors">Reflect</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Review the Core Concepts to solidify your understanding of the AI landscape.
                  </p>
                </button>

                <button 
                  onClick={() => setView('crit-tool')}
                  className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gold transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-gold transition-colors"></div>
                  <div className="mb-4 text-deepTeal group-hover:scale-110 transition-transform origin-left">
                    <PenTool size={32} />
                  </div>
                  <h3 className="text-deepTeal font-bold text-xl mb-2 group-hover:text-gold transition-colors">Build</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Use the interactive CRIT tool to construct high-quality prompts with context.
                  </p>
                </button>

                <button 
                  onClick={() => setView('quiz')}
                  className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gold transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-gold transition-colors"></div>
                  <div className="mb-4 text-deepTeal group-hover:scale-110 transition-transform origin-left">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-deepTeal font-bold text-xl mb-2 group-hover:text-gold transition-colors">Test</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Challenge your knowledge with a quick quiz on the key workshop takeaways.
                  </p>
                </button>
             </div>
          </div>
        );
      case 'concepts':
        return <ConceptDeck />;
      case 'crit-tool':
        return <CritGenerator />;
      case 'quiz':
        return <Quiz />;
      case 'action-plan':
        return <ActionPlan />;
      default:
        return <ConceptDeck />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-24 md:pb-0">
      <Navigation currentView={view} setView={setView} />
      
      <main className="md:ml-24 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
          {renderContent()}
        </div>

        {/* Footer / Contact */}
        <footer className="w-full bg-white border-t border-gray-200 py-8 px-4 mt-auto">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
             <div>
               <p className="text-sm text-gray-500 font-medium">Facilitated by Nadia Ellis, Curiosity</p>
               <p className="text-xs text-gray-400">Workshop: December 2025</p>
             </div>
             <a 
               href="https://www.linkedin.com/in/nadia-ellis/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center px-6 py-2 bg-[#0077b5] text-white rounded-full font-medium hover:bg-[#006396] transition-colors shadow-md"
             >
               <Linkedin size={18} className="mr-2" /> Connect on LinkedIn
             </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;