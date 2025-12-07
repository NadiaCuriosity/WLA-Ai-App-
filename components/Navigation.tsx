import React from 'react';
import { ViewState } from '../types';
import { LayoutDashboard, PenTool, Lightbulb, CheckCircle, ListTodo } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const navItems: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <LayoutDashboard size={20} /> },
    { id: 'concepts', label: 'Concepts', icon: <Lightbulb size={20} /> },
    { id: 'crit-tool', label: 'CRIT Tool', icon: <PenTool size={20} /> },
    { id: 'quiz', label: 'Quiz', icon: <CheckCircle size={20} /> },
    { id: 'action-plan', label: 'Action Plan', icon: <ListTodo size={20} /> },
  ];

  return (
    <>
      {/* Desktop Sidebar / Mobile Bottom Bar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 md:top-0 md:left-0 md:w-24 md:h-screen md:border-r md:border-t-0 md:flex md:flex-col md:items-center md:py-8 shadow-lg">
        <div className="flex justify-around items-center w-full h-16 md:flex-col md:h-auto md:space-y-8">
            <div className="hidden md:block font-bold text-deepTeal text-xl mb-4">AI</div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors duration-200 ${
                currentView === item.id
                  ? 'text-deepTeal bg-teal-50'
                  : 'text-gray-400 hover:text-deepTeal'
              }`}
            >
              <span className="mb-1">{item.icon}</span>
              <span className="text-[10px] uppercase tracking-wider font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
      
      {/* Spacer for mobile bottom nav */}
      <div className="h-20 md:hidden"></div>
    </>
  );
};

export default Navigation;