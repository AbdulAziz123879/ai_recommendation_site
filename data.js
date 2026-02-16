// AI Tools Database
const aiToolsDatabase = [
  {
    id: 1,
    name: "ChatGPT",
    category: "Text & Writing AI",
    logo: "🤖",
    description: "Advanced conversational AI for content creation, coding, and problem-solving",
    features: ["Natural conversations", "Code generation", "Content writing", "Problem solving"],
    pricing: "Free / $20/mo",
    rating: 4.8,
    reviews: 15420,
    url: "https://chat.openai.com",
    useCase: "Content creation, coding, research",
    experienceLevel: ["beginner", "intermediate", "advanced"],
    industries: ["marketing", "development", "education", "business"]
  },
  {
    id: 2,
    name: "Midjourney",
    category: "Image & Video Generation",
    logo: "🎨",
    description: "AI art generator creating stunning images from text descriptions",
    features: ["High-quality images", "Multiple art styles", "Easy prompting", "Community gallery"],
    pricing: "$10-$60/mo",
    rating: 4.7,
    reviews: 8930,
    url: "https://midjourney.com",
    useCase: "Image generation, creative design",
    experienceLevel: ["beginner", "intermediate", "advanced"],
    industries: ["design", "marketing", "creative"]
  },
  {
    id: 3,
    name: "GitHub Copilot",
    category: "Code & Development",
    logo: "💻",
    description: "AI pair programmer that helps you write code faster",
    features: ["Code completion", "Multi-language support", "Context-aware", "IDE integration"],
    pricing: "$10/mo",
    rating: 4.6,
    reviews: 12340,
    url: "https://github.com/features/copilot",
    useCase: "Coding assistance, development",
    experienceLevel: ["intermediate", "advanced"],
    industries: ["development"]
  },
  {
    id: 4,
    name: "Jasper AI",
    category: "Text & Writing AI",
    logo: "✍️",
    description: "AI writing assistant for marketing content and copywriting",
    features: ["Marketing copy", "SEO optimization", "Brand voice", "Templates"],
    pricing: "$39-$125/mo",
    rating: 4.5,
    reviews: 6780,
    url: "https://jasper.ai",
    useCase: "Marketing content, copywriting",
    experienceLevel: ["beginner", "intermediate"],
    industries: ["marketing", "business"]
  },
  {
    id: 5,
    name: "DALL-E 3",
    category: "Image & Video Generation",
    logo: "🖼️",
    description: "Create realistic images and art from text descriptions",
    features: ["Photorealistic images", "Art generation", "Easy prompts", "High resolution"],
    pricing: "Free / $20/mo",
    rating: 4.7,
    reviews: 9450,
    url: "https://openai.com/dall-e-3",
    useCase: "Image creation, visual content",
    experienceLevel: ["beginner", "intermediate"],
    industries: ["design", "marketing", "creative"]
  },
  {
    id: 6,
    name: "Notion AI",
    category: "Productivity & Automation",
    logo: "📝",
    description: "AI-powered workspace for notes, docs, and project management",
    features: ["Smart writing", "Auto-summaries", "Task automation", "Knowledge base"],
    pricing: "$10/mo",
    rating: 4.6,
    reviews: 11230,
    url: "https://notion.so",
    useCase: "Productivity, note-taking",
    experienceLevel: ["beginner", "intermediate", "advanced"],
    industries: ["business", "education", "development"]
  },
  {
    id: 7,
    name: "Runway ML",
    category: "Image & Video Generation",
    logo: "🎬",
    description: "AI video editing and generation platform",
    features: ["Video generation", "AI editing", "Green screen", "Motion tracking"],
    pricing: "$12-$76/mo",
    rating: 4.5,
    reviews: 5620,
    url: "https://runwayml.com",
    useCase: "Video creation, editing",
    experienceLevel: ["intermediate", "advanced"],
    industries: ["design", "marketing", "creative"]
  },
  {
    id: 8,
    name: "Grammarly",
    category: "Text & Writing AI",
    logo: "📖",
    description: "AI writing assistant for grammar, spelling, and style",
    features: ["Grammar checking", "Style suggestions", "Tone detection", "Plagiarism check"],
    pricing: "Free / $12/mo",
    rating: 4.7,
    reviews: 18900,
    url: "https://grammarly.com",
    useCase: "Writing improvement, editing",
    experienceLevel: ["beginner", "intermediate"],
    industries: ["education", "business", "marketing"]
  },
  {
    id: 9,
    name: "Tableau AI",
    category: "Data Analysis & Business Intelligence",
    logo: "📊",
    description: "AI-powered data visualization and analytics platform",
    features: ["Data visualization", "Predictive analytics", "Natural language queries", "Dashboards"],
    pricing: "$70-$150/mo",
    rating: 4.6,
    reviews: 7890,
    url: "https://tableau.com",
    useCase: "Data analysis, business intelligence",
    experienceLevel: ["intermediate", "advanced"],
    industries: ["business", "data science"]
  },
  {
    id: 10,
    name: "ElevenLabs",
    category: "Voice & Audio",
    logo: "🎙️",
    description: "AI voice generation and cloning for realistic speech",
    features: ["Voice cloning", "Multiple languages", "Realistic speech", "API access"],
    pricing: "Free / $5-$330/mo",
    rating: 4.8,
    reviews: 6340,
    url: "https://elevenlabs.io",
    useCase: "Voice generation, audio content",
    experienceLevel: ["beginner", "intermediate"],
    industries: ["marketing", "creative", "education"]
  },
  {
    id: 11,
    name: "Canva AI",
    category: "Design & Creative",
    logo: "🎨",
    description: "AI-powered graphic design platform with Magic Design",
    features: ["Template generation", "Background removal", "Image editing", "Brand kit"],
    pricing: "Free / $13/mo",
    rating: 4.7,
    reviews: 14560,
    url: "https://canva.com",
    useCase: "Graphic design, visual content",
    experienceLevel: ["beginner", "intermediate"],
    industries: ["marketing", "design", "business"]
  },
  {
    id: 12,
    name: "Zapier AI",
    category: "Productivity & Automation",
    logo: "⚡",
    description: "AI-powered workflow automation connecting apps",
    features: ["App integration", "Workflow automation", "No-code", "AI suggestions"],
    pricing: "Free / $20-$600/mo",
    rating: 4.5,
    reviews: 9870,
    url: "https://zapier.com",
    useCase: "Automation, productivity",
    experienceLevel: ["beginner", "intermediate", "advanced"],
    industries: ["business", "marketing", "development"]
  },
  {
    id: 13,
    name: "Claude",
    category: "Text & Writing AI",
    logo: "🧠",
    description: "Advanced AI assistant for analysis, coding, and creative work",
    features: ["Deep analysis", "Coding help", "Long conversations", "File handling"],
    pricing: "Free / $20/mo",
    rating: 4.8,
    reviews: 8920,
    url: "https://claude.ai",
    useCase: "Analysis, coding, research",
    experienceLevel: ["beginner", "intermediate", "advanced"],
    industries: ["development", "business", "education"]
  },
  {
    id: 14,
    name: "Synthesia",
    category: "Image & Video Generation",
    logo: "🎥",
    description: "AI video generation with realistic avatars",
    features: ["AI avatars", "Multi-language", "Custom voices", "Templates"],
    pricing: "$22-$67/mo",
    rating: 4.5,
    reviews: 4560,
    url: "https://synthesia.io",
    useCase: "Video creation, presentations",
    experienceLevel: ["beginner", "intermediate"],
    industries: ["marketing", "education", "business"]
  },
  {
    id: 15,
    name: "Copy.ai",
    category: "Text & Writing AI",
    logo: "📝",
    description: "AI copywriting tool for marketing and sales content",
    features: ["Marketing copy", "Email templates", "Social media", "Blog posts"],
    pricing: "Free / $49/mo",
    rating: 4.4,
    reviews: 7230,
    url: "https://copy.ai",
    useCase: "Copywriting, marketing",
    experienceLevel: ["beginner", "intermediate"],
    industries: ["marketing", "business"]
  },
  {
    id: 16,
    name: "Replit AI",
    category: "Code & Development",
    logo: "🚀",
    description: "AI-powered online IDE for collaborative coding",
    features: ["Code completion", "AI debugging", "Collaboration", "Instant deployment"],
    pricing: "Free / $20/mo",
    rating: 4.6,
    reviews: 5890,
    url: "https://replit.com",
    useCase: "Web development, learning",
    experienceLevel: ["beginner", "intermediate"],
    industries: ["development", "education"]
  },
  {
    id: 17,
    name: "Otter.ai",
    category: "Voice & Audio",
    logo: "🦦",
    description: "AI meeting assistant with transcription and summaries",
    features: ["Real-time transcription", "Meeting summaries", "Action items", "Integrations"],
    pricing: "Free / $10-$30/mo",
    rating: 4.6,
    reviews: 8340,
    url: "https://otter.ai",
    useCase: "Transcription, meeting notes",
    experienceLevel: ["beginner", "intermediate"],
    industries: ["business", "education"]
  },
  {
    id: 18,
    name: "Fireflies.ai",
    category: "Productivity & Automation",
    logo: "🔥",
    description: "AI assistant for recording and transcribing meetings",
    features: ["Auto-recording", "Transcription", "Action items", "CRM integration"],
    pricing: "Free / $10-$39/mo",
    rating: 4.5,
    reviews: 6780,
    url: "https://fireflies.ai",
    useCase: "Meeting automation, notes",
    experienceLevel: ["beginner", "intermediate"],
    industries: ["business", "sales"]
  },
  {
    id: 19,
    name: "Descript",
    category: "Voice & Audio",
    logo: "🎧",
    description: "AI-powered audio and video editing with text",
    features: ["Text-based editing", "Overdub", "Transcription", "Multi-track"],
    pricing: "Free / $12-$24/mo",
    rating: 4.7,
    reviews: 5420,
    url: "https://descript.com",
    useCase: "Audio/video editing, podcasts",
    experienceLevel: ["intermediate"],
    industries: ["creative", "marketing"]
  },
  {
    id: 20,
    name: "MonkeyLearn",
    category: "Data Analysis & Business Intelligence",
    logo: "🐵",
    description: "AI text analysis and sentiment analysis platform",
    features: ["Sentiment analysis", "Text classification", "Entity extraction", "Custom models"],
    pricing: "Free / $299-$1199/mo",
    rating: 4.4,
    reviews: 3210,
    url: "https://monkeylearn.com",
    useCase: "Text analysis, customer insights",
    experienceLevel: ["intermediate", "advanced"],
    industries: ["business", "data science"]
  }
];

// Categories
const categories = [
  "All Categories",
  "Text & Writing AI",
  "Image & Video Generation",
  "Code & Development",
  "Voice & Audio",
  "Productivity & Automation",
  "Data Analysis & Business Intelligence",
  "Design & Creative"
];

// Quiz Questions
const quizQuestions = [
  {
    question: "What's your primary industry or field?",
    options: [
      { value: "marketing", label: "Marketing & Sales", icon: "📢" },
      { value: "development", label: "Development & Tech", icon: "💻" },
      { value: "design", label: "Design & Creative", icon: "🎨" },
      { value: "education", label: "Education & Training", icon: "📚" },
      { value: "business", label: "Business & Operations", icon: "💼" },
      { value: "data science", label: "Data Science & Analytics", icon: "📊" }
    ]
  },
  {
    question: "What's your main use case?",
    options: [
      { value: "content creation", label: "Content Creation", icon: "✍️" },
      { value: "image generation", label: "Image Generation", icon: "🖼️" },
      { value: "coding", label: "Coding Assistance", icon: "👨‍💻" },
      { value: "data analysis", label: "Data Analysis", icon: "📈" },
      { value: "automation", label: "Automation & Productivity", icon: "⚡" },
      { value: "audio/video", label: "Audio/Video Creation", icon: "🎬" }
    ]
  },
  {
    question: "What's your experience level with AI tools?",
    options: [
      { value: "beginner", label: "Beginner", icon: "🌱" },
      { value: "intermediate", label: "Intermediate", icon: "🚀" },
      { value: "advanced", label: "Advanced", icon: "⚡" }
    ]
  },
  {
    question: "What's your budget preference?",
    options: [
      { value: "free", label: "Free Only", icon: "🆓" },
      { value: "freemium", label: "Free with Premium Options", icon: "💎" },
      { value: "paid", label: "Paid Subscriptions", icon: "💳" }
    ]
  },
  {
    question: "What's most important to you?",
    options: [
      { value: "ease", label: "Ease of Use", icon: "😊" },
      { value: "customization", label: "Customization Options", icon: "⚙️" },
      { value: "integration", label: "Integration Capabilities", icon: "🔗" },
      { value: "support", label: "Community & Support", icon: "👥" }
    ]
  }
];

// Make data globally accessible
window.aiToolsDatabase = aiToolsDatabase;
window.categories = categories;
window.quizQuestions = quizQuestions;
