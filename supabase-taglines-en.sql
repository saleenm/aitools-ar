-- أضف عمود tagline_en
ALTER TABLE tools ADD COLUMN IF NOT EXISTS tagline_en text;

-- الأدوات الأصلية الـ 12
UPDATE tools SET tagline_en = 'The most powerful conversational AI from OpenAI' WHERE slug = 'chatgpt';
UPDATE tools SET tagline_en = 'Google''s multimodal AI for search, coding, and creativity' WHERE slug = 'gemini';
UPDATE tools SET tagline_en = 'Generate stunning artistic images with AI prompts' WHERE slug = 'midjourney';
UPDATE tools SET tagline_en = 'Safe, helpful, and honest AI assistant by Anthropic' WHERE slug = 'claude';
UPDATE tools SET tagline_en = 'Generate high-quality images from text with GPT-4 Vision' WHERE slug = 'dall-e-3';
UPDATE tools SET tagline_en = 'AI-powered search engine with real-time cited answers' WHERE slug = 'perplexity';
UPDATE tools SET tagline_en = 'AI coding assistant by GitHub — write code faster' WHERE slug = 'github-copilot';
UPDATE tools SET tagline_en = 'Open-source AI image generation you can run locally' WHERE slug = 'stable-diffusion';
UPDATE tools SET tagline_en = 'AI writing assistant integrated directly into Notion' WHERE slug = 'notion-ai';
UPDATE tools SET tagline_en = 'AI-powered video generation and editing for creators' WHERE slug = 'runway-ml';
UPDATE tools SET tagline_en = 'Generate ultra-realistic human voices with AI' WHERE slug = 'elevenlabs';
UPDATE tools SET tagline_en = 'AI copywriting assistant for marketing and content teams' WHERE slug = 'jasper-ai';

-- الأدوات الجديدة
UPDATE tools SET tagline_en = 'Real-time AI with live access to X (Twitter) posts' WHERE slug = 'grok';
UPDATE tools SET tagline_en = 'Meta''s free AI assistant built into WhatsApp and Instagram' WHERE slug = 'meta-ai';
UPDATE tools SET tagline_en = 'AI assistant integrated into Windows, Office 365, and Edge' WHERE slug = 'microsoft-copilot';
UPDATE tools SET tagline_en = 'Meta''s open-source language model you can run locally' WHERE slug = 'llama';
UPDATE tools SET tagline_en = 'Efficient open-source AI models from Europe' WHERE slug = 'mistral';
UPDATE tools SET tagline_en = 'Enterprise AI platform for business NLP and search' WHERE slug = 'cohere';
UPDATE tools SET tagline_en = 'Adobe''s AI image generator — safe for commercial use' WHERE slug = 'adobe-firefly';
UPDATE tools SET tagline_en = 'AI-powered design tools built right into Canva' WHERE slug = 'canva-ai';
UPDATE tools SET tagline_en = 'Generate images with perfectly readable text using AI' WHERE slug = 'ideogram';
UPDATE tools SET tagline_en = 'Professional AI image generation for game art and concepts' WHERE slug = 'leonardo-ai';
UPDATE tools SET tagline_en = 'The fastest, most accurate open-source image generation model' WHERE slug = 'flux-ai';
UPDATE tools SET tagline_en = 'Generate realistic videos from text — by OpenAI' WHERE slug = 'sora';
UPDATE tools SET tagline_en = 'High-quality AI video generation at competitive prices' WHERE slug = 'kling-ai';
UPDATE tools SET tagline_en = 'Turn images and text into creative short videos' WHERE slug = 'pika-labs';
UPDATE tools SET tagline_en = 'Free AI video generation with impressive quality' WHERE slug = 'hailuo-ai';
UPDATE tools SET tagline_en = 'Generate complete songs with lyrics and vocals from text' WHERE slug = 'suno-ai';
UPDATE tools SET tagline_en = 'Create professional-quality music from text descriptions' WHERE slug = 'udio';
UPDATE tools SET tagline_en = 'Generate natural human voiceovers in 20+ languages' WHERE slug = 'murf-ai';
UPDATE tools SET tagline_en = 'AI-powered marketing copywriting with 90+ templates' WHERE slug = 'copy-ai';
UPDATE tools SET tagline_en = 'Write SEO-optimized articles with real-time web research' WHERE slug = 'writesonic';
UPDATE tools SET tagline_en = 'AI writing assistant designed for fiction and novel writers' WHERE slug = 'sudowrite';
UPDATE tools SET tagline_en = 'The smartest AI code editor — VS Code rebuilt with AI' WHERE slug = 'cursor';
UPDATE tools SET tagline_en = 'Write and run code in the browser with AI assistance' WHERE slug = 'replit';
UPDATE tools SET tagline_en = 'Privacy-first AI code completion for any IDE' WHERE slug = 'tabnine';
UPDATE tools SET tagline_en = 'Build full web apps from a description in seconds' WHERE slug = 'bolt-new';
UPDATE tools SET tagline_en = 'Automatically transcribe and summarize meetings with AI' WHERE slug = 'otter-ai';
UPDATE tools SET tagline_en = 'Your second brain — AI-powered notes that connect ideas' WHERE slug = 'mem-ai';
UPDATE tools SET tagline_en = 'AI-powered project management and team collaboration' WHERE slug = 'taskade';
UPDATE tools SET tagline_en = 'The gold standard SEO platform with AI content tools' WHERE slug = 'semrush-ai';
UPDATE tools SET tagline_en = 'Optimize your content to rank #1 on Google' WHERE slug = 'surfer-seo';
UPDATE tools SET tagline_en = 'The most comprehensive backlink and keyword research tool' WHERE slug = 'ahrefs';
UPDATE tools SET tagline_en = 'AI-powered UI design tools built into Figma' WHERE slug = 'figma-ai';
UPDATE tools SET tagline_en = 'Design professional logos with AI in minutes' WHERE slug = 'looka';
UPDATE tools SET tagline_en = 'Generate unlimited personalized color palettes with AI' WHERE slug = 'khroma';
UPDATE tools SET tagline_en = 'Chat with your data — analyze Excel and CSV files with AI' WHERE slug = 'julius-ai';
UPDATE tools SET tagline_en = 'Build predictive ML models from your data — no code needed' WHERE slug = 'obviously-ai';
UPDATE tools SET tagline_en = 'Interactive data visualization powered by Einstein AI' WHERE slug = 'tableau-ai';
