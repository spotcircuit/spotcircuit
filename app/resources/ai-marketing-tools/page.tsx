"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NextImage from 'next/legacy/image';
import { motion, AnimatePresence } from 'framer-motion';
import FaqAccordion from '@/components/FaqAccordion';
import ResourceNavigation from '@/components/ResourceNavigation';
import { 
  FaTools, 
  FaRobot,
  FaPencilAlt,
  FaSearch,
  FaImage,
  FaVideo,
  FaVolumeUp,
  FaCode,
  FaChartLine,
  FaUsers,
  FaLaptopCode,
  FaClock,
  FaDollarSign,
  FaComments,
  FaPalette,
  FaRocket,
  FaBrain,
  FaCog,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaRegStar,
  FaStar,
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaDownload,
  FaBookmark,
  FaShare,
  FaCopy,
  FaFilter,
  FaSortAmountDown,
  FaChevronDown,
  FaCheckCircle
} from 'react-icons/fa';

import { 
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineSparkles
} from 'react-icons/hi';

// Define tool categories and their icons
const toolCategories = [
  { id: 'all', name: 'All Tools', icon: <FaTools /> },
  { id: 'content', name: 'Content Creation', icon: <FaPencilAlt /> },
  { id: 'image', name: 'Image Generation', icon: <FaImage /> },
  { id: 'video', name: 'Video Creation', icon: <FaVideo /> },
  { id: 'audio', name: 'Audio & Voice', icon: <FaVolumeUp /> },
  { id: 'seo', name: 'SEO & Research', icon: <FaSearch /> },
  { id: 'analytics', name: 'Analytics & Insights', icon: <FaChartLine /> },
  { id: 'social', name: 'Social Media', icon: <FaUsers /> },
  { id: 'personalization', name: 'Personalization', icon: <FaBrain /> },
  { id: 'email', name: 'Email Marketing', icon: <FaComments /> },
  { id: 'design', name: 'Design & Creative', icon: <FaPalette /> },
  { id: 'automation', name: 'Workflow Automation', icon: <FaCog /> },
];

// AI marketing tools data
const aiTools = [
  {
    id: 1,
    name: "ChatGPT",
    description: "Versatile AI assistant for content creation, brainstorming, and text optimization.",
    categories: ['content', 'seo'],
    url: "https://chat.openai.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    pricing: {
      hasFree: true,
      paidPlans: "$20/month for Plus with GPT-4"
    },
    features: [
      "Content creation and editing",
      "Marketing copy generation",
      "Email drafting",
      "Blog post outlining",
      "Social media caption writing"
    ],
    rating: 4.8,
    useCases: [
      "Generate blog post outlines and drafts",
      "Create social media captions and content calendars",
      "Draft marketing emails and newsletters",
      "Generate ad copy variations for testing",
      "Research content ideas and keyword suggestions"
    ],
    pros: [
      "Extremely versatile for various content needs",
      "Simple, intuitive interface",
      "Continuously improving capabilities"
    ],
    cons: [
      "May sometimes generate inaccurate information",
      "Cannot browse the web on its own (unless using custom GPTs)",
      "Quality varies based on prompt quality"
    ]
  },
  {
    id: 2,
    name: "Midjourney",
    description: "AI image generation tool that creates stunning, unique visuals from text descriptions.",
    categories: ['image', 'design'],
    url: "https://www.midjourney.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    pricing: {
      hasFree: false,
      paidPlans: "$10-$60/month depending on usage"
    },
    features: [
      "High-quality image generation",
      "Custom art style control",
      "Detailed prompt parameters",
      "Fast iteration capabilities",
      "Commercial usage rights"
    ],
    rating: 4.7,
    useCases: [
      "Create custom branded imagery for marketing campaigns",
      "Generate product visualization concepts",
      "Design social media graphics and banners",
      "Produce illustrations for blog posts and articles",
      "Develop mood boards and visual concepts"
    ],
    pros: [
      "Produces remarkably high-quality images",
      "Excellent for artistic and creative visuals",
      "Constantly improving technology"
    ],
    cons: [
      "Requires Discord for access",
      "Steeper learning curve for prompt engineering",
      "No free tier available"
    ]
  },
  {
    id: 3,
    name: "Jasper",
    description: "AI content platform specifically designed for marketing teams with templates and workflows.",
    categories: ['content', 'social'],
    url: "https://www.jasper.ai/",
    image: "https://placehold.co/400x400/3a34cb/white?text=Jasper",
    pricing: {
      hasFree: false,
      paidPlans: "Starting at $49/month, billed annually"
    },
    features: [
      "Marketing-focused templates",
      "Brand voice customization",
      "SEO optimization",
      "Collaborative features",
      "Multi-language support"
    ],
    rating: 4.5,
    useCases: [
      "Create on-brand marketing copy at scale",
      "Generate optimized product descriptions",
      "Draft blog posts and long-form content",
      "Develop campaign messaging and taglines",
      "Produce multi-channel content with consistent voice"
    ],
    pros: [
      "Purpose-built for marketing teams",
      "Extensive template library",
      "Collaboration features for teams"
    ],
    cons: [
      "Higher price point compared to general AI tools",
      "Learning curve for maximizing value",
      "Some features overlap with free tools"
    ]
  },
  {
    id: 4,
    name: "Surfer SEO",
    description: "AI-powered SEO content optimization platform with data-driven recommendations.",
    categories: ['seo', 'content'],
    url: "https://surferseo.com/",
    image: "https://dummyimage.com/400x400/25b57f/ffffff&text=Surfer+SEO",
    pricing: {
      hasFree: false,
      paidPlans: "Starting at $89/month, billed annually"
    },
    features: [
      "SERP analysis and content scoring",
      "Content Editor with AI writing assistant",
      "Keyword research and clustering",
      "Content planning tools",
      "Audit and optimization recommendations"
    ],
    rating: 4.6,
    useCases: [
      "Create SEO-optimized content that ranks",
      "Improve existing content performance",
      "Develop comprehensive content strategies",
      "Research competitors and identify gaps",
      "Monitor content performance over time"
    ],
    pros: [
      "Data-driven content recommendations",
      "Combines AI with SEO best practices",
      "Comprehensive content optimization workflow"
    ],
    cons: [
      "Premium pricing",
      "Requires understanding of SEO concepts",
      "May overemphasize certain on-page factors"
    ]
  },
  {
    id: 5,
    name: "Synthesia",
    description: "AI video generation platform that creates professional videos with virtual presenters.",
    categories: ['video', 'content'],
    url: "https://www.synthesia.io/",
    image: "https://dummyimage.com/400x400/0051ff/ffffff&text=Synthesia",
    pricing: {
      hasFree: false,
      paidPlans: "Starting at $30/month"
    },
    features: [
      "Text-to-video AI technology",
      "50+ AI avatars and 120+ languages",
      "Custom avatar creation",
      "Screen recording integration",
      "Templates for various video types"
    ],
    rating: 4.4,
    useCases: [
      "Create product demos and explainer videos",
      "Develop multilingual training content",
      "Produce personalized video messages",
      "Generate social media video content",
      "Create video testimonials and presentations"
    ],
    pros: [
      "Fast video production without filming",
      "Multilingual capabilities",
      "Professional looking results"
    ],
    cons: [
      "Limited customization of movements",
      "Can sometimes appear unnatural",
      "Requires clear script preparation"
    ]
  },
  {
    id: 6,
    name: "Clearscope",
    description: "AI content optimization tool that helps create content that ranks in search engines.",
    categories: ['seo', 'content'],
    url: "https://www.clearscope.io/",
    image: "https://dummyimage.com/400x400/4a7aff/ffffff&text=Clearscope",
    pricing: {
      hasFree: false,
      paidPlans: "Starting at $170/month"
    },
    features: [
      "Content grading and optimization",
      "Competitor content analysis",
      "Keyword research integration",
      "Readability analysis",
      "Content inventory management"
    ],
    rating: 4.7,
    useCases: [
      "Optimize content for search engine visibility",
      "Ensure content comprehensiveness",
      "Identify content gaps and opportunities",
      "Improve existing content performance",
      "Develop data-driven content briefs"
    ],
    pros: [
      "Highly accurate recommendations",
      "Seamless integration with writing tools",
      "Focuses on relevance over keyword stuffing"
    ],
    cons: [
      "Premium pricing model",
      "Enterprise focus may be overkill for small businesses",
      "Steeper learning curve"
    ]
  },
  {
    id: 7,
    name: "Elevenlabs",
    description: "AI voice generation platform for creating lifelike voices for audio content.",
    categories: ['audio', 'content'],
    url: "https://elevenlabs.io/",
    image: "https://dummyimage.com/400x400/ff0049/ffffff&text=ElevenLabs",
    pricing: {
      hasFree: true,
      paidPlans: "Starting at $5/month"
    },
    features: [
      "Ultra-realistic text-to-speech",
      "Voice cloning capabilities",
      "Multi-language support",
      "Voice design and customization",
      "API access for integration"
    ],
    rating: 4.8,
    useCases: [
      "Create professional voiceovers for videos",
      "Develop engaging podcast content",
      "Generate audio versions of blog posts",
      "Create multilingual audio content",
      "Produce audio ads and promotional material"
    ],
    pros: [
      "Incredibly realistic voice quality",
      "Voice customization options",
      "Emotional tone control"
    ],
    cons: [
      "Limited free tier",
      "Some voices may sound slightly robotic",
      "Higher learning curve for advanced features"
    ]
  },
  {
    id: 8,
    name: "Frase",
    description: "AI content research and optimization platform for creating SEO-friendly content.",
    categories: ['content', 'seo'],
    url: "https://www.frase.io/",
    image: "https://dummyimage.com/400x400/00a389/ffffff&text=Frase",
    pricing: {
      hasFree: false,
      paidPlans: "Starting at $14.99/month"
    },
    features: [
      "AI content research assistant",
      "SEO content brief generation",
      "Content optimization suggestions",
      "Question research and FAQ creation",
      "AI writing assistant"
    ],
    rating: 4.5,
    useCases: [
      "Research and plan comprehensive content",
      "Create SEO-optimized content briefs",
      "Generate high-quality blog articles",
      "Develop question-focused content",
      "Optimize existing content for better performance"
    ],
    pros: [
      "Comprehensive research capabilities",
      "Strong focus on answering user questions",
      "All-in-one content workflow"
    ],
    cons: [
      "Search data limitations compared to dedicated SEO tools",
      "AI writing quality varies by topic",
      "Interface can be overwhelming initially"
    ]
  },
  {
    id: 9,
    name: "Pictory",
    description: "AI video creation tool that turns text and blog posts into engaging videos.",
    categories: ['video', 'content'],
    url: "https://pictory.ai/",
    image: "https://dummyimage.com/400x400/ff6b00/ffffff&text=Pictory",
    pricing: {
      hasFree: false,
      paidPlans: "Starting at $19/month"
    },
    features: [
      "Text-to-video conversion",
      "Auto-generated video from blog posts",
      "Script-to-video capability",
      "Automated caption generation",
      "Stock media library access"
    ],
    rating: 4.3,
    useCases: [
      "Convert blog posts to video content",
      "Create social media video snippets",
      "Develop video summaries of long-form content",
      "Generate product videos from descriptions",
      "Produce educational and explainer videos"
    ],
    pros: [
      "Easy repurposing of existing content",
      "Time-saving automation",
      "No video editing skills required"
    ],
    cons: [
      "Limited customization options",
      "Template-based results may look similar",
      "May require manual refinement for best results"
    ]
  },
  {
    id: 10,
    name: "Copy.ai",
    description: "AI copywriting tool with templates for various marketing content types.",
    categories: ['content', 'social'],
    url: "https://www.copy.ai/",
    image: "https://dummyimage.com/400x400/2e63f6/ffffff&text=Copy.ai",
    pricing: {
      hasFree: true,
      paidPlans: "Starting at $36/month, billed annually"
    },
    features: [
      "90+ copywriting templates",
      "Blog post wizard and generator",
      "Social media content creation",
      "Sales copy frameworks",
      "Multi-language support"
    ],
    rating: 4.4,
    useCases: [
      "Generate marketing copy for campaigns",
      "Create social media content calendars",
      "Develop product descriptions and sales pages",
      "Write engaging email newsletters",
      "Produce ad copy variations for testing"
    ],
    pros: [
      "Extensive template library",
      "User-friendly interface",
      "Helpful for overcoming writer's block"
    ],
    cons: [
      "Quality varies by content type",
      "May require editing for brand voice",
      "Templates can sometimes feel formulaic"
    ]
  },
  {
    id: 11,
    name: "HubSpot Content Assistant",
    description: "AI content creation tool integrated with HubSpot's marketing platform.",
    categories: ['content', 'automation'],
    url: "https://www.hubspot.com/ai",
    image: "https://dummyimage.com/400x400/ff7a59/ffffff&text=HubSpot",
    pricing: {
      hasFree: true,
      paidPlans: "Included with HubSpot Marketing Hub (Starting at $20/month)"
    },
    features: [
      "Blog post generation and optimization",
      "Email content creation",
      "Social media post generation",
      "Ad copy creation",
      "Integration with HubSpot CRM"
    ],
    rating: 4.5,
    useCases: [
      "Create content within the HubSpot ecosystem",
      "Generate personalized email campaigns",
      "Develop SEO-friendly blog content",
      "Produce targeted social media posts",
      "Create customer-specific marketing materials"
    ],
    pros: [
      "Seamless integration with HubSpot",
      "Access to customer data for personalization",
      "All-in-one marketing platform capabilities"
    ],
    cons: [
      "Requires HubSpot subscription for full features",
      "Less powerful than dedicated AI content tools",
      "Limited customization options"
    ]
  },
  {
    id: 12,
    name: "MarketMuse",
    description: "AI content planning and optimization platform focused on topical authority.",
    categories: ['seo', 'content'],
    url: "https://www.marketmuse.com/",
    image: "https://dummyimage.com/400x400/5603ad/ffffff&text=MarketMuse",
    pricing: {
      hasFree: false,
      paidPlans: "Starting at $149/month, billed annually"
    },
    features: [
      "Content intelligence and planning",
      "Topic modeling and clustering",
      "Content briefs and outlines",
      "Competitive content analysis",
      "ROI prediction for content"
    ],
    rating: 4.6,
    useCases: [
      "Develop comprehensive content strategies",
      "Build topical authority in specific niches",
      "Create data-driven content briefs",
      "Identify content gaps and opportunities",
      "Optimize existing content portfolio"
    ],
    pros: [
      "Depth of content intelligence",
      "Focus on building topical authority",
      "Advanced competitive analysis"
    ],
    cons: [
      "Higher price point",
      "Steeper learning curve",
      "Best suited for larger content operations"
    ]
  },
  {
    id: 13,
    name: "Lately",
    description: "AI social media content generator that creates multiple posts from long-form content.",
    categories: ['social', 'content'],
    url: "https://www.lately.ai/",
    image: "https://dummyimage.com/400x400/00bf9d/ffffff&text=Lately",
    pricing: {
      hasFree: false,
      paidPlans: "Starting at $49/month"
    },
    features: [
      "Social post generation from long content",
      "Brand voice AI training",
      "Social media scheduling",
      "Analytics and performance tracking",
      "Multi-platform publishing"
    ],
    rating: 4.4,
    useCases: [
      "Generate dozens of social posts from single content piece",
      "Maintain consistent brand voice across channels",
      "Scale social media content production",
      "Repurpose existing content for social media",
      "Optimize social messaging based on performance"
    ],
    pros: [
      "Excellent for content repurposing",
      "Learns from performance data",
      "Saves significant time on social content creation"
    ],
    cons: [
      "Primarily focused on social media only",
      "Requires existing long-form content",
      "May need refinement for optimal brand voice"
    ]
  },
  {
    id: 14,
    name: "Grammarly Business",
    description: "AI writing assistant with brand tone controls and team collaboration features.",
    categories: ['content', 'automation'],
    url: "https://www.grammarly.com/business",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Grammarly_logo.svg",
    pricing: {
      hasFree: true,
      paidPlans: "Business plans start at $15/member/month"
    },
    features: [
      "Advanced grammar and spell checking",
      "Brand tone and style guide settings",
      "Clarity and engagement suggestions",
      "Team collaboration features",
      "Analytics on writing performance"
    ],
    rating: 4.7,
    useCases: [
      "Ensure consistent brand voice across all content",
      "Improve clarity and readability of marketing materials",
      "Streamline content approval workflows",
      "Enhance email and communication effectiveness",
      "Train team members on brand writing standards"
    ],
    pros: [
      "Robust grammar and style checking",
      "Works across multiple platforms and tools",
      "Team management capabilities"
    ],
    cons: [
      "Less focused on content generation",
      "Some integrations require desktop app",
      "Premium features can be costly for large teams"
    ]
  },
  {
    id: 15,
    name: "Persado",
    description: "AI-powered language generation platform for creating emotionally targeted marketing content.",
    categories: ['content', 'personalization'],
    url: "https://www.persado.com/",
    image: "https://dummyimage.com/400x400/e51937/ffffff&text=Persado",
    pricing: {
      hasFree: false,
      paidPlans: "Enterprise pricing (contact sales)"
    },
    features: [
      "Emotion-based language generation",
      "Personalized messaging at scale",
      "Cross-channel content optimization",
      "Performance prediction",
      "Integration with marketing platforms"
    ],
    rating: 4.5,
    useCases: [
      "Create emotionally resonant marketing messages",
      "Develop personalized content at scale",
      "Optimize messaging across all marketing channels",
      "Generate high-converting ad and email copy",
      "Test and refine marketing language"
    ],
    pros: [
      "Sophisticated emotion-based targeting",
      "Proven performance improvements",
      "Enterprise-grade capabilities"
    ],
    cons: [
      "Enterprise focus and pricing",
      "Less accessible for small businesses",
      "Requires integration with existing systems"
    ]
  }
];

// FAQ items
const faqItems = [
  {
    question: "How can AI tools improve my marketing efforts?",
    answer: "AI marketing tools can enhance your marketing in several key ways: 1) Efficiency - automating repetitive tasks like content creation, image generation, and data analysis, freeing your team for strategic work; 2) Personalization - analyzing customer data to deliver highly targeted messages and experiences at scale; 3) Optimization - providing data-driven insights and A/B testing to improve performance; 4) Content creation - generating high-quality content, images, and videos faster than manual methods; 5) Enhanced analytics - uncovering patterns and opportunities in data that humans might miss. The most effective approach is using AI to augment human creativity and strategy rather than replace it entirely. This combination allows marketers to work more efficiently while maintaining the human touch that builds authentic connections with audiences."
  },
  {
    question: "Are AI marketing tools worth the investment for small businesses?",
    answer: "For small businesses with limited resources, AI marketing tools can be particularly valuable when selected strategically. Consider these factors when evaluating ROI: 1) Time savings - tools that automate time-consuming tasks like content creation, social media management, or customer service can free up significant hours; 2) Capability expansion - AI tools can provide enterprise-level capabilities (like personalization or advanced analytics) that would otherwise be inaccessible to small teams; 3) Cost comparison - compare the tool's monthly cost against hiring for the same function or the potential revenue increase from improved marketing; 4) Learning curve - factor in the time investment needed to master the tool. Start with tools that address your biggest pain points or time drains. Many AI platforms offer free tiers or trials, allowing you to test before committing. For many small businesses, content generation tools, automated social media assistants, and simple chatbots often provide the quickest ROI by addressing immediate needs without requiring extensive technical knowledge."
  },
  {
    question: "How do I choose the right AI marketing tools for my specific needs?",
    answer: "Selecting the right AI marketing tools requires a strategic approach: 1) Identify your specific pain points and objectives - determine exactly what marketing challenges you need to solve (content creation bottlenecks, personalization limitations, data analysis needs, etc.); 2) Audit your current technology stack - understand what existing tools you have and where integration will be necessary; 3) Prioritize based on potential impact - focus on tools that address your most significant challenges or opportunities first; 4) Consider your team's technical capabilities - some AI tools require more technical expertise than others; 5) Evaluate ease of implementation - tools that integrate with your existing workflow will have faster adoption; 6) Start with a pilot - test one or two tools thoroughly before expanding; 7) Set clear success metrics - define how you'll measure the tool's effectiveness; 8) Consider scalability - ensure the tool can grow with your needs. Most importantly, involve the end users (your marketing team) in the selection process, as their buy-in is crucial for successful implementation and adoption."
  },
  {
    question: "What are the limitations of AI marketing tools that I should be aware of?",
    answer: "While powerful, AI marketing tools have important limitations to consider: 1) Quality variability - output quality can vary significantly based on your inputs and the specific use case; 2) Lack of human judgment - AI can't fully replicate human creativity, emotional intelligence, or ethical decision-making; 3) Training limitations - tools can perpetuate biases present in their training data or produce generic content without proper guidance; 4) Contextual understanding - many AI tools struggle with nuanced cultural references, humor, or brand subtleties; 5) Technical requirements - some tools require significant technical expertise or integration work; 6) Data privacy concerns - using customer data for AI personalization raises important privacy considerations; 7) Dependency risks - over-reliance on AI tools can create vulnerabilities if the service changes or discontinues; 8) Cost considerations - enterprise-grade AI tools can be expensive, and costs can scale quickly with usage. To mitigate these limitations, maintain human oversight of AI outputs, especially for customer-facing content, use AI as an assistant rather than a replacement for human creativity, and stay informed about the ethical implications of your AI usage."
  },
  {
    question: "How can I measure the ROI of implementing AI marketing tools?",
    answer: "Measuring ROI for AI marketing tools requires tracking both costs and benefits: 1) Establish baseline metrics - document your current performance metrics before implementation (time spent on tasks, conversion rates, engagement metrics, etc.); 2) Calculate total investment - include subscription costs, implementation time, training, and ongoing management; 3) Track efficiency gains - measure time saved on routine tasks and the value of that time when redirected to higher-value activities; 4) Monitor performance improvements - track changes in key metrics like conversion rates, click-through rates, engagement, or lead quality; 5) Measure output increases - quantify the increase in content production, campaign volume, or audience reach; 6) Calculate cost reductions - identify reduced expenses in areas like agency fees or additional headcount; 7) Use attribution modeling - implement proper attribution to connect AI-driven activities to revenue outcomes; 8) Consider qualitative benefits - improvements in team satisfaction, work quality, or brand consistency. For most marketing AI tools, you should expect to see meaningful results within 3-6 months of proper implementation. Remember that some benefits, like improved customer experience or brand perception, may take longer to fully materialize in your financial metrics."
  },
  {
    question: "Do I need technical expertise to use AI marketing tools effectively?",
    answer: "The technical expertise required varies significantly by tool, but the landscape is becoming increasingly accessible: 1) User-friendly tools - many modern AI marketing platforms (like Jasper, Copy.ai, or Canva's AI features) are designed with marketers in mind, featuring intuitive interfaces that require minimal technical knowledge; 2) Mid-level complexity - some tools (like Google Analytics 4 with AI features or certain personalization platforms) require understanding of marketing concepts and some basic data analysis skills; 3) Technical integration - enterprise-level AI tools often require developer support for implementation and integration with existing systems; 4) Prompt engineering - getting optimal results from generative AI tools requires skill in crafting effective prompts, which is learnable but takes practice. For most marketers, the biggest learning curve isn't technical but conceptual—understanding how to effectively collaborate with AI, what it can and can't do well, and how to refine its outputs. Many vendors offer templates, tutorials, and customer support to help bridge knowledge gaps. Starting with user-friendly tools allows you to build expertise gradually while still gaining immediate benefits from AI assistance."
  },
  {
    question: "How do I ensure the content created by AI tools maintains my brand voice?",
    answer: "Maintaining consistent brand voice with AI-generated content requires a strategic approach: 1) Create a detailed brand voice guide - document your tone, style preferences, common phrases, taboo words, and audience language in detail; 2) Use fine-tuning capabilities - many advanced AI tools allow for customization based on your existing content; 3) Provide clear examples - supply the AI with multiple examples of content that perfectly represents your brand voice; 4) Develop effective prompts - learn to write detailed prompts that specify tone, style, and audience considerations; 5) Implement human review - establish an editing process where human team members review and refine AI outputs; 6) Use consistent feedback - many AI tools improve over time based on which outputs you select or modify; 7) Start with lower-stakes content - begin with internal or less visible content while you refine your approach; 8) Consider specialized tools - platforms like Persado or Writer offer more sophisticated brand voice capabilities than general AI tools. Remember that achieving perfect brand voice with AI is an iterative process. The most successful approach combines AI efficiency for first drafts with human refinement to add the authentic touches that truly represent your brand's unique personality."
  },
  {
    question: "What's the difference between general AI platforms like ChatGPT and specialized marketing AI tools?",
    answer: "General AI platforms like ChatGPT differ from specialized marketing AI tools in several important ways: 1) Specialization - marketing-specific tools are optimized for particular use cases (email marketing, SEO, social media, etc.) with features designed for those specific workflows; 2) Integration capabilities - specialized tools typically connect directly with your existing marketing stack, CRM, or analytics platforms; 3) Industry knowledge - marketing-specific AI often includes built-in marketing best practices, templates, and frameworks; 4) User interface - specialized tools feature purpose-built interfaces designed for specific marketing tasks rather than general text generation; 5) Data utilization - marketing AI can often leverage your customer data, previous campaigns, or performance metrics to improve outputs; 6) Compliance features - specialized tools may include industry-specific compliance checks for regulated industries; 7) Workflow optimization - marketing tools include collaboration features, approval processes, and publishing capabilities tailored to marketing teams. General AI platforms like ChatGPT excel at versatility and can handle a wide range of marketing tasks with proper prompting, making them excellent companions for marketers who know how to direct them effectively. Specialized tools, while more limited in scope, often deliver superior results in their specific domain with less prompt engineering required. Many marketing teams find the best results come from combining both approaches."
  }
];

const AIMarketingTools: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating'); // 'rating', 'name', or 'featured'
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedTools, setExpandedTools] = useState<number[]>([]);

  // Toggle tool expansion in list view
  const toggleToolExpansion = (id: number) => {
    if (expandedTools.includes(id)) {
      setExpandedTools(expandedTools.filter(toolId => toolId !== id));
    } else {
      setExpandedTools([...expandedTools, id]);
    }
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (sidebarOpen && !target.closest('.mobile-sidebar') && !target.closest('.mobile-menu-button')) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  // Filter tools based on category and search term
  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.categories.includes(activeCategory);
    const matchesSearch = 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.categories.some(category => category.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort filtered tools
  const sortedTools = [...filteredTools].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    // For 'featured', we'll use the original order
    return 0;
  });

  // Render star rating
  const renderStarRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<FaRegStar key="half" className="text-yellow-400" />);
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-400" />);
    }
    
    return (
      <div className="flex items-center">
        <div className="flex mr-1">{stars}</div>
        <span className="text-sm font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">      
      {/* Structured data - CollectionPage Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AI Marketing Tools Directory",
            "description": "A curated collection of AI tools to enhance your marketing efforts, from content creation to analytics and automation.",
            "url": "https://www.spotcircuit.com/resources/ai-marketing-tools",
            "provider": {
              "@type": "Organization",
              "name": "SpotCircuit",
              "url": "https://www.spotcircuit.com"
            },
            "about": {
              "@type": "Thing",
              "name": "AI Marketing Tools"
            }
          })
        }}
      />

      <main className="pt-20 flex-grow">
        <ResourceNavigation currentPage="ai-marketing-tools" />
        
        {/* Hero Section */}
        <section className="gradient-bg-dark py-20 md:py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="icon-container mb-6 glow-effect">
              <FaRobot className="text-4xl text-white" />
            </div>
            <h1 className="gradient-text text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              AI Marketing Tools Directory
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover the best AI-powered tools to enhance your marketing strategy, boost productivity, and drive better results
            </p>
            
            {/* Search box */}
            <div className="relative max-w-xl mx-auto mb-10">
              <input
                type="text"
                placeholder="Search for tools, categories, or features..."
                className="w-full bg-black/40 backdrop-blur-sm border border-purple-800 rounded-full px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pl-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <button
                  className={`px-5 py-2 rounded-full transition-colors ${activeCategory === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  onClick={() => setActiveCategory('all')}
                >
                  All Tools
                </button>
              </motion.div>
              {toolCategories.slice(1, 5).map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + (index * 0.05) }}
                >
                  <button
                    className={`px-5 py-2 rounded-full transition-colors ${activeCategory === category.id ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <button
                  className="px-5 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                  onClick={() => setSidebarOpen(true)}
                >
                  More Categories...
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mobile Menu Button */}
        <div className="lg:hidden fixed top-20 right-4 z-50">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mobile-menu-button bg-gray-900 p-3 rounded-lg shadow-lg border border-gray-700 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {sidebarOpen ? (
              <HiOutlineX className="text-2xl text-white" />
            ) : (
              <HiOutlineMenu className="text-2xl text-white" />
            )}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="mobile-sidebar fixed inset-0 bg-black/80 z-40 lg:hidden overflow-auto"
            >
              <div className="bg-gray-900 h-full w-80 max-w-[80vw] p-6 pt-24">
                <h3 className="text-xl font-bold mb-6 text-white">Tool Categories</h3>
                <nav className="space-y-2">
                  {toolCategories.map((category) => (
                    <button
                      key={category.id}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition duration-200 w-full text-left ${
                        activeCategory === category.id 
                          ? 'bg-purple-600 text-white' 
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setSidebarOpen(false);
                      }}
                    >
                      <span className="text-sm">{category.icon}</span>
                      <span className="text-sm">{category.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 py-16">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">
                {activeCategory === 'all' 
                  ? 'All AI Marketing Tools' 
                  : `${toolCategories.find(c => c.id === activeCategory)?.name || ''} Tools`}
                {searchTerm && ` matching "${searchTerm}"`}
              </h2>
              <p className="text-gray-400">
                {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'} found
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-lg"
                  onClick={() => document.getElementById('sort-dropdown')?.classList.toggle('hidden')}
                >
                  <FaSortAmountDown />
                  <span>Sort: {sortBy === 'rating' ? 'Rating' : sortBy === 'name' ? 'Name' : 'Featured'}</span>
                  <FaChevronDown className="text-sm" />
                </button>
                <div 
                  id="sort-dropdown" 
                  className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl z-10 hidden"
                >
                  <button 
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors ${sortBy === 'rating' ? 'text-purple-400' : 'text-white'}`}
                    onClick={() => {
                      setSortBy('rating');
                      document.getElementById('sort-dropdown')?.classList.add('hidden');
                    }}
                  >
                    Rating (Highest First)
                  </button>
                  <button 
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors ${sortBy === 'name' ? 'text-purple-400' : 'text-white'}`}
                    onClick={() => {
                      setSortBy('name');
                      document.getElementById('sort-dropdown')?.classList.add('hidden');
                    }}
                  >
                    Name (A-Z)
                  </button>
                  <button 
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors ${sortBy === 'featured' ? 'text-purple-400' : 'text-white'}`}
                    onClick={() => {
                      setSortBy('featured');
                      document.getElementById('sort-dropdown')?.classList.add('hidden');
                    }}
                  >
                    Featured
                  </button>
                </div>
              </div>
              <div className="flex border border-gray-700 rounded-lg overflow-hidden">
                <button 
                  className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button 
                  className={`px-3 py-2 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* No results message */}
          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <FaQuestionCircle className="text-5xl text-gray-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">No tools found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your search or filter criteria</p>
              <button 
                className="px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedTools.map((tool) => (
                <motion.div
                  key={tool.id}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48">
                    <NextImage
                      src={tool.image}
                      alt={tool.name}
                      layout="fill"
                      objectFit="contain"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {tool.categories.slice(0, 2).map((category) => (
                        <div key={category} className="bg-black/60 rounded-full px-3 py-1 text-xs">
                          {toolCategories.find(c => c.id === category)?.name || category}
                        </div>
                      ))}
                      {tool.categories.length > 2 && (
                        <div className="bg-black/60 rounded-full px-3 py-1 text-xs">
                          +{tool.categories.length - 2} more
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{tool.name}</h3>
                      {renderStarRating(tool.rating)}
                    </div>
                    
                    <p className="text-gray-400 mb-4">{tool.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {tool.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                        {tool.features.length > 3 && (
                          <li className="text-sm text-purple-400">+ {tool.features.length - 3} more features</li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <span className="text-gray-400">Pricing: </span>
                        <span className={tool.pricing.hasFree ? "text-green-400" : "text-gray-300"}>
                          {tool.pricing.hasFree ? "Free tier available" : "Paid only"}
                        </span>
                      </div>
                      <a 
                        href={tool.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Visit Site <FaArrowRight className="ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-6">
              {sortedTools.map((tool) => (
                <motion.div
                  key={tool.id}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-800"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative w-full md:w-40 h-32 md:h-40 flex-shrink-0">
                        <NextImage
                          src={tool.image}
                          alt={tool.name}
                          layout="fill"
                          objectFit="contain"
                          unoptimized
                          className="rounded-lg"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                          <h3 className="text-xl font-bold">{tool.name}</h3>
                          <div className="flex items-center space-x-4">
                            {renderStarRating(tool.rating)}
                            <div className="flex flex-wrap gap-2">
                              {tool.categories.slice(0, 2).map((category) => (
                                <div key={category} className="bg-black/60 rounded-full px-3 py-1 text-xs">
                                  {toolCategories.find(c => c.id === category)?.name || category}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 mb-4">{tool.description}</p>
                        
                        <div className="flex flex-col md:flex-row gap-4 justify-between">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                              {tool.features.slice(0, expandedTools.includes(tool.id) ? tool.features.length : 3).map((feature, i) => (
                                <li key={i} className="flex items-start text-sm">
                                  <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                  <span className="text-gray-300">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            {tool.features.length > 3 && !expandedTools.includes(tool.id) && (
                              <button 
                                className="text-sm text-purple-400 mt-2 flex items-center"
                                onClick={() => toggleToolExpansion(tool.id)}
                              >
                                + {tool.features.length - 3} more features <FaChevronDown className="ml-1" />
                              </button>
                            )}
                            {expandedTools.includes(tool.id) && (
                              <button 
                                className="text-sm text-purple-400 mt-2 flex items-center"
                                onClick={() => toggleToolExpansion(tool.id)}
                              >
                                Show less <FaChevronDown className="ml-1 transform rotate-180" />
                              </button>
                            )}
                          </div>
                          
                          <div className="md:text-right mt-4 md:mt-0">
                            <div className="mb-3">
                              <span className="text-gray-400">Pricing: </span>
                              <span className={tool.pricing.hasFree ? "text-green-400" : "text-gray-300"}>
                                {tool.pricing.hasFree ? "Free tier available" : "Paid only"}
                              </span>
                              <div className="text-sm text-gray-400">{tool.pricing.paidPlans}</div>
                            </div>
                            <a 
                              href={tool.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                            >
                              Visit Site <FaArrowRight className="ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Tool Details */}
                    {expandedTools.includes(tool.id) && (
                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-white mb-2">Use Cases:</h4>
                            <ul className="space-y-2">
                              {tool.useCases.map((useCase, i) => (
                                <li key={i} className="flex items-start text-sm">
                                  <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                  <span className="text-gray-300">{useCase}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <div className="mb-4">
                              <h4 className="font-bold text-white mb-2">Pros:</h4>
                              <ul className="space-y-1">
                                {tool.pros.map((pro, i) => (
                                  <li key={i} className="flex items-start text-sm">
                                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                    <span className="text-gray-300">{pro}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-bold text-white mb-2">Cons:</h4>
                              <ul className="space-y-1">
                                {tool.cons.map((con, i) => (
                                  <li key={i} className="flex items-start text-sm">
                                    <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                                    <span className="text-gray-300">{con}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <HiOutlineSparkles className="text-4xl text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Stay Updated on AI Marketing Tools</h2>
              <p className="text-gray-300 mb-8">Subscribe to our newsletter to receive updates on new AI tools, best practices, and exclusive guides.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
              
              <p className="text-gray-500 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto">
            <FaqAccordion 
              faqs={faqItems}
            />

            {/* FAQ Schema for SEO */}
            <script 
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "QAContent",
                  "mainEntity": faqItems.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": item.answer
                    }
                  }))
                })
              }}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-12 text-center border border-indigo-700">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Need Help Implementing AI Tools?
                </h2>
                <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                  Our team of AI marketing experts can help you select and implement the right tools for your specific business needs.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-black/30 rounded-2xl p-6">
                    <FaLaptopCode className="text-3xl text-indigo-400 mx-auto mb-4" />
                    <h3 className="font-bold text-white mb-2">Tool Selection</h3>
                    <p className="text-sm text-indigo-200">Custom AI tool recommendations for your needs</p>
                  </div>
                  <div className="bg-black/30 rounded-2xl p-6">
                    <FaCog className="text-3xl text-purple-400 mx-auto mb-4" />
                    <h3 className="font-bold text-white mb-2">Implementation</h3>
                    <p className="text-sm text-purple-200">Expert setup and integration with your workflow</p>
                  </div>
                  <div className="bg-black/30 rounded-2xl p-6">
                    <FaRocket className="text-3xl text-pink-400 mx-auto mb-4" />
                    <h3 className="font-bold text-white mb-2">Strategy</h3>
                    <p className="text-sm text-pink-200">AI-powered marketing strategies that drive results</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                      Schedule a Free Consultation
                    </span>
                  </Link>
                  <Link href="/services">
                    <span className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block">
                      View Our Services
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Sharing */}
        <section className="mb-16">
          <div className="container mx-auto px-4">
            <div className="bg-gray-900 rounded-2xl p-8 text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-white">Share This Directory</h3>
              <p className="text-gray-300 mb-6">
                Help others discover the best AI marketing tools
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href={`https://twitter.com/intent/tweet?text=AI Marketing Tools Directory: The Complete Guide&url=${encodeURIComponent('https://www.spotcircuit.com/resources/ai-marketing-tools')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
                >
                  <FaShare className="mr-2" />
                  Share on Twitter
                </a>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('https://www.spotcircuit.com/resources/ai-marketing-tools');
                    alert('Link copied to clipboard!');
                  }}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
                >
                  <FaCopy className="mr-2" />
                  Copy Link
                </button>
                <button 
                  onClick={() => {
                    if (typeof window !== 'undefined' && 'localStorage' in window) {
                      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
                      const bookmark = {
                        title: 'AI Marketing Tools Directory',
                        url: '/resources/ai-marketing-tools',
                        date: new Date().toISOString()
                      };
                      bookmarks.push(bookmark);
                      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                      alert('Directory bookmarked!');
                    }
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
                >
                  <FaBookmark className="mr-2" />
                  Bookmark
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-16">
          <div className="container mx-auto px-4">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-white">Related Resources</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/resources/content-strategy-blueprint" className="block p-6 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                  <h4 className="font-bold text-yellow-400 mb-2">Content Strategy Blueprint</h4>
                  <p className="text-sm text-gray-300">Create content that converts visitors into customers</p>
                  <span className="text-xs text-yellow-500 mt-2 inline-block">Read Guide →</span>
                </Link>
                <Link href="/resources/analytics-conversion-guide" className="block p-6 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                  <h4 className="font-bold text-red-400 mb-2">Analytics & Conversion Guide</h4>
                  <p className="text-sm text-gray-300">Set up proper tracking and optimize conversions</p>
                  <span className="text-xs text-red-500 mt-2 inline-block">Read Guide →</span>
                </Link>
                <Link href="/resources/ai-search-optimization" className="block p-6 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                  <h4 className="font-bold text-blue-400 mb-2">AI Search Optimization</h4>
                  <p className="text-sm text-gray-300">Optimize your content for AI search platforms</p>
                  <span className="text-xs text-blue-500 mt-2 inline-block">Read Guide →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>    </div>
  );
};

export default AIMarketingTools;