import React, { useState } from 'react';
import { GLOSSARY } from '../constants';
import { Search } from 'lucide-react';

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = GLOSSARY.filter((item) =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-deepTeal mb-2">Workshop Glossary</h2>
        <p className="text-gray-600">Terminology to help you navigate the AI landscape.</p>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold sm:text-sm shadow-sm"
          placeholder="Search terms (e.g., 'Tokens', 'Hallucination')..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-teal-200 transition-colors">
              <h3 className="text-lg font-bold text-deepTeal mb-1">{item.term}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.definition}</p>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-500">
            No terms found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default Glossary;
