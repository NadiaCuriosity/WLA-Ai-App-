import { Concept, QuizQuestion, ActionItem, GlossaryItem } from './types';

export const CONCEPTS: Concept[] = [
  {
    id: 'dual-nature',
    title: 'The Dual Nature of AI',
    description: 'AI holds both immense promise and serious risk. Recognising this paradox prevents both naive over-adoption and fearful avoidance. You must choose to focus on opportunity while remaining aware of risks.',
    memoryAnchor: '"If you haven\'t had three sleepless nights about AI, you haven\'t adequately understood it." — Ethan Mollick',
    iconName: 'Brain'
  },
  {
    id: 'scaling-laws',
    title: 'Scaling Laws & Value',
    description: 'AI is becoming exponentially faster and cheaper, breaking the link between effort, time, and value. We must reconsider where humans derive meaning when productivity is decoupled from effort.',
    memoryAnchor: '"When skill and effort are decoupled from value, where does that leave us?"',
    iconName: 'Scale'
  },
  {
    id: 'adoption-ladder',
    title: 'The AI Adoption Ladder',
    tagline: 'From answers to workflows',
    description: 'Most are stuck at Level 1 (Answers). Moving up involves using AI for Tasks (Level 2), as a Thinking Partner (Level 3), and finally for full Workflows (Level 4).',
    memoryAnchor: '"Level 1 is Google. Level 3 is a thought partner. Level 4 is delegation."',
    iconName: 'Ladder'
  },
  {
    id: 'personal-vs-process',
    title: 'Personal vs. Process AI',
    tagline: 'Thinking vs. Doing',
    description: 'Personal AI helps you think (conversational). Process AI does the work (automation). Don\'t confuse the two. Map your processes before attempting to automate them.',
    memoryAnchor: '"An AI agent is a doer of work, not a place to do work."',
    iconName: 'Zap'
  },
  {
    id: 'onboarding',
    title: 'The Onboarding Metaphor',
    description: 'Brief AI like a brilliant new hire who knows nothing about your business. Without context, you get generic "safe" outputs. You must provide the context, role, and specific instructions.',
    memoryAnchor: '"If you onboard a brilliant person with no context, you get generic outputs. Same with AI."',
    iconName: 'User'
  },
  {
    id: 'magic-question',
    title: 'The Magic Question',
    description: 'Always end your initial prompt with "Any questions?". This prevents AI from making things up and reveals gaps in your briefing.',
    memoryAnchor: '"If you give it the opportunity to ask questions, it prevents it from making stuff up."',
    iconName: 'Message'
  },
  {
    id: 'data-privacy',
    title: 'The Sahara Desert Principle',
    description: 'Your data is like a grain of sand in the Sahara. Competitors can\'t "retrieve" it easily, but human reviewers might see it for training. Toggle off "Improve the model" to stay safe.',
    memoryAnchor: '"Toggle off \'improve the model\' and nobody is looking at your data."',
    iconName: 'Shield'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Which level of the AI Adoption Ladder represents using AI as a 'Thinking Partner'?",
    options: ["Level 1", "Level 2", "Level 3", "Level 4"],
    correctAnswer: 2,
    explanation: "Level 3 is about using AI to plan, compare, debate, and frame decisions—acting as a thinking partner rather than just an answer engine (Level 1) or task doer (Level 2)."
  },
  {
    id: 2,
    question: "What is 'AI Slop'?",
    options: [
      "A technical term for data processing",
      "Low-quality, unreviewed AI output passed on to others",
      "The liquid cooling used in data centers",
      "A new prompting framework"
    ],
    correctAnswer: 1,
    explanation: "AI Slop refers to poor-quality outputs that people generate and pass on without reviewing, creating more work for the recipient."
  },
  {
    id: 3,
    question: "What is the 'Magic Question' you should ask at the end of a brief?",
    options: [
      "Can you do this for me?",
      "What is your confidence level?",
      "Any questions before we proceed?",
      "Generate the image now."
    ],
    correctAnswer: 2,
    explanation: "Asking 'Any questions before we proceed?' (or similar) gives AI permission to identify gaps in your instructions and prevents hallucinations."
  },
  {
    id: 4,
    question: "What is the primary confidentiality risk with most AI tools?",
    options: [
      "Competitors immediately seeing your strategy",
      "Hackers targeting your specific chat",
      "Human reviewers seeing a fraction of data for training",
      "AI becoming sentient and judging you"
    ],
    correctAnswer: 2,
    explanation: "The real risk is that human reviewers (doing reinforcement learning) might see a tiny fraction of conversations to improve the model. Toggling off 'improve the model' prevents this."
  },
  {
    id: 5,
    question: "What defines a true 'AI Agent' compared to a chatbot?",
    options: [
      "It has a voice interface",
      "It is integrated with tools, proactive, and decides its own steps",
      "It costs more money",
      "It requires a custom microchip to run"
    ],
    correctAnswer: 1,
    explanation: "A true agent is autonomous: it acts as a 'doer of work, deciding on steps, using tools, and determining when a task is complete (e.g., Deep Research)."
  }
];

export const ACTION_PLAN: ActionItem[] = [
  {
    title: "Secure Your Privacy",
    description: "Go to settings (Data Controls) and toggle OFF 'Improve the model for everyone'.",
    type: "immediate"
  },
  {
    title: "Install Mobile Apps",
    description: "Download ChatGPT or Claude for mobile to enable voice mode and on-the-go usage.",
    type: "immediate"
  },
  {
    title: "The 'Pre-Mortem' Prompt",
    description: "Before a project, ask AI: 'What are 5 reasons this project might fail? Be critical.'",
    type: "immediate"
  },
  {
    title: "Draft Critique",
    description: "Paste an email draft and ask: 'Critique this for tone and clarity. How can I make it more persuasive?'",
    type: "practice"
  },
  {
    title: "Meeting Extraction",
    description: "Transcribe a meeting (if allowed) and ask for 'Key decisions made and Action Items with owners'.",
    type: "practice"
  },
  {
    title: "The CRIT Drill",
    description: "Use the CRIT tool for one complex task today: Context, Role, Interview, Task.",
    type: "practice"
  }
];

export const GLOSSARY: GlossaryItem[] = [
  {
    term: "Artificial Intelligence (AI)",
    definition: "Computer systems capable of performing tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages."
  },
  {
    term: "Generative AI",
    definition: "A type of AI that can create new content, including text, images, audio, and video, in response to prompts."
  },
  {
    term: "Large Language Model (LLM)",
    definition: "A deep learning algorithm that can recognize, summarize, translate, predict, and generate text and other content based on knowledge gained from massive datasets."
  },
  {
    term: "Hallucination",
    definition: "When an AI model generates incorrect or nonsensical information confidently. This happens because LLMs predict the next likely word, not necessarily the truth."
  },
  {
    term: "Prompt",
    definition: "The input or instruction you give to an AI model to generate a response. The quality of the output depends heavily on the quality of the prompt."
  },
  {
    term: "Token",
    definition: "The basic unit of text an LLM processes. Roughly, 1000 tokens is about 750 words. Costs and limits are often measured in tokens."
  },
  {
    term: "Context Window",
    definition: "The limit on the amount of text (tokens) an LLM can consider at one time. If a conversation exceeds this, the AI 'forgets' earlier parts."
  },
  {
    term: "Zero-shot / Few-shot Prompting",
    definition: "Zero-shot is asking the AI to do something without examples. Few-shot is providing a few examples of the desired input and output to guide the model."
  },
  {
    term: "Multimodal",
    definition: "AI models that can process and generate multiple types of media, such as text, images, and audio, simultaneously."
  },
  {
    term: "AGI (Artificial General Intelligence)",
    definition: "Hypothetical AI that possesses the ability to understand, learn, and apply knowledge across a wide variety of tasks, matching or exceeding human cognitive abilities."
  },
  {
    term: "Alignment",
    definition: "The process of encoding human values and goals into large language models to make them helpful, harmless, and honest."
  },
  {
    term: "Temperature",
    definition: "A parameter that controls the randomness of the AI's output. High temperature results in more creative/random text, while low temperature results in more predictable/deterministic text."
  }
];