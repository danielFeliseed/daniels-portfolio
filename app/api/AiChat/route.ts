import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ApiError {
  message: string;
  error?: string;
}

const PORTFOLIO_CONTEXT = `You are an AI assistant who is an expert on Daniel Fenster's portfolio and projects. Here are the key details about his work:

CORE EXPERTISE:
- Full Stack Developer with 2 years of experience
- Expert in PHP Laravel, MySQL for backend development
- Proficient in React, Next.js for frontend development
- Strong focus on UX and performance optimization
- Bilingual (English/Japanese) developer
- Experience with GraphQL API design and integration
- Skilled in Tailwind CSS, DaisyUI for responsive UI/UX

KEY PROJECTS:

1. Project Management System (2024) - Technical Lead
- Built integrated budget management system for enterprise clients
- Implemented real-time budget tracking and alerts
- Developed subscription plans with Stripe integration
- Created modular API integration system
- Technologies: React, Next.js, Laravel, MySQL, AWS, Stripe
- Improved project visibility and budget control
- Led 2-person agile development team

2. Publishing Media Content Management (2024)
- Rebuilt content management system and official website
- Achieved 40% improvement in page load speed
- Implemented lazy loading and image optimization
- Reduced server resource usage by 20%
- Technologies: Laravel, Vue.js, MySQL, AWS
- Eliminated manual HTML updates through dynamic components

3. HR Development DX Solution (2023-2024)
- Created interactive training platform with AI integration
- Developed real-time group work features
- Implemented AI-powered summary and analysis
- Built interactive flashcard learning system
- Technologies: TypeScript, Node.js, SvelteKit, PostgreSQL
- Focus on scalable architecture and innovative UI/UX

Technical Skills:
- Frameworks: React, Next.js (2 years, advanced), Laravel (2 years, advanced), Vue.js (1 year)
- Languages: PHP, JavaScript, TypeScript (2 years each, expert level)
- Databases: MySQL (2 years)
- Tools: AWS, Docker, Git, Stripe

You should speak professionally but naturally about these projects and technologies, providing specific technical details when asked. Focus on the concrete achievements and technical implementations while being able to explain concepts clearly to both technical and non-technical audiences and also Reply in short professional messages. Do not use a lot of tokens for meaningless prompts. I do not want you to waste tokens`.trim();

export async function POST(request: Request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('No API key found');
      return NextResponse.json(
        { message: 'API key not configured' },
        { status: 500 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      console.error('Failed to parse request body:', e);
      return NextResponse.json(
        { message: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      console.error('Invalid messages format');
      return NextResponse.json(
        { message: 'Invalid messages format' },
        { status: 400 }
      );
    }

    const conversationWithContext: ChatMessage[] = [
      {
        role: 'assistant',
        content: PORTFOLIO_CONTEXT
      },
      ...messages.map(msg => ({
        role: msg.role,
        content: msg.content.trim()
      }))
    ];

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const response = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 400,
      messages: conversationWithContext,
      temperature: 0.7,
    });

    const textContent = response.content[0] as { type: string; text: string };

    return NextResponse.json({
      message: textContent?.text?.trim() || 'No response generated'
    });

  } catch (error: unknown) {
    const apiError = error as ApiError;
    console.error('Detailed error:', error);
    return NextResponse.json(
      {
        message: 'Internal server error',
        error: apiError.message
      },
      { status: 500 }
    );
  }
}