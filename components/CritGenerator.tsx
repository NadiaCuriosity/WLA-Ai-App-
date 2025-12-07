import React, { useState } from 'react';
import { Copy, RefreshCw, Check, Mic, MicOff } from 'lucide-react';

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

const CritGenerator: React.FC = () => {
  const [context, setContext] = useState('');
  const [role, setRole] = useState('');
  const [task, setTask] = useState('');
  const [copied, setCopied] = useState(false);
  const [isListening, setIsListening] = useState<string | null>(null);

  const generatePrompt = () => {
    return `### Context
${context || '[Insert detailed context here]'}

### Role
Act as ${role || '[Insert expert persona here]'}

### Task
${task || '[Insert specific task instructions here]'}

### Interview
Interview me with 3-5 clarifying questions so you understand what is important to me. Do not start the task until I have answered these questions.`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatePrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    if(window.confirm("Are you sure you want to clear your inputs?")) {
        setContext('');
        setRole('');
        setTask('');
    }
  };

  const toggleListening = (field: string, setter: (val: string) => void, currentVal: string) => {
    if (isListening === field) {
      setIsListening(null);
      return;
    }

    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Voice dictation is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-NZ';

    recognition.onstart = () => setIsListening(field);
    recognition.onend = () => setIsListening(null);
    recognition.onerror = () => setIsListening(null);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setter(currentVal ? `${currentVal} ${transcript}` : transcript);
    };

    recognition.start();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-deepTeal mb-2">CRIT Prompt Builder</h2>
        <p className="text-gray-600">
          Context. Role. Interview. Task. Use this framework to get superior outputs.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg border-t-4 border-gold overflow-hidden">
        <div className="p-6 space-y-6">
          
          {/* C - Context */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold text-deepTeal uppercase tracking-wide">
                1. Context (The Brain Dump)
              </label>
              <button 
                onClick={() => toggleListening('context', setContext, context)}
                className={`flex items-center text-xs px-2 py-1 rounded transition-colors ${isListening === 'context' ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {isListening === 'context' ? <MicOff size={12} className="mr-1" /> : <Mic size={12} className="mr-1" />}
                {isListening === 'context' ? 'Listening...' : 'Dictate'}
              </button>
            </div>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="E.g., We are a boutique hotel in Wanaka facing a slow winter season. Our target audience is luxury travelers..."
              className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none h-32 resize-y text-gray-700 placeholder-gray-400 bg-slate-50"
            />
          </div>

          {/* R - Role */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold text-deepTeal uppercase tracking-wide">
                2. Role ( The Expert)
              </label>
              <button 
                onClick={() => toggleListening('role', setRole, role)}
                className={`flex items-center text-xs px-2 py-1 rounded transition-colors ${isListening === 'role' ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {isListening === 'role' ? <MicOff size={12} className="mr-1" /> : <Mic size={12} className="mr-1" />}
                {isListening === 'role' ? 'Listening...' : 'Dictate'}
              </button>
            </div>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="E.g., A Senior Marketing Strategist combining the style of Seth Godin and James Clear."
              className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none text-gray-700 placeholder-gray-400 bg-slate-50"
            />
          </div>

          {/* I - Interview (Updated) */}
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-100 flex items-start">
            <div className="bg-deepTeal text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">FIXED</div>
            <div>
              <p className="font-bold text-deepTeal text-sm">3. Interview</p>
              <p className="text-sm text-teal-800 mt-1 italic">
                "Interview me with 3-5 clarifying questions so you understand what is important to me."
              </p>
              <p className="text-xs text-teal-600 mt-1">(Automatically added to your prompt)</p>
            </div>
          </div>

          {/* T - Task */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold text-deepTeal uppercase tracking-wide">
                4. Task (The Output)
              </label>
              <button 
                onClick={() => toggleListening('task', setTask, task)}
                className={`flex items-center text-xs px-2 py-1 rounded transition-colors ${isListening === 'task' ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {isListening === 'task' ? <MicOff size={12} className="mr-1" /> : <Mic size={12} className="mr-1" />}
                {isListening === 'task' ? 'Listening...' : 'Dictate'}
              </button>
            </div>
            <textarea
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="E.g., Create a 30-day content calendar for Instagram including caption hooks and visual descriptions."
              className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none h-24 resize-y text-gray-700 placeholder-gray-400 bg-slate-50"
            />
          </div>

        </div>

        {/* Actions */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-200">
           <button 
            onClick={handleReset}
            className="flex items-center text-gray-500 hover:text-red-500 transition-colors text-sm font-medium"
           >
             <RefreshCw size={16} className="mr-2" /> Reset
           </button>

           <button
            onClick={handleCopy}
            className={`flex items-center px-6 py-3 rounded-lg font-bold text-white transition-all transform hover:scale-105 shadow-md ${copied ? 'bg-green-600' : 'bg-deepTeal hover:bg-teal-800'}`}
           >
             {copied ? <Check size={20} className="mr-2" /> : <Copy size={20} className="mr-2" />}
             {copied ? 'Copied!' : 'Copy Prompt'}
           </button>
        </div>
      </div>
    </div>
  );
};

export default CritGenerator;