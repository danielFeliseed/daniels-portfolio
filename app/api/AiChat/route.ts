import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface RequestBody {
  messages: ChatMessage[];
}

interface ApiError extends Error {
  message: string;
  status?: number;
}

const SYSTEM_CONTEXT = `You are a professional AI assistant representing Daniel Fenster's professional portfolio. 

PROFESSIONAL PROFILE:
Full Stack Developer with 2 years of experience specializing in:
- PHP Laravel, MySQL for backend development
- React, Next.js for frontend development
- UX and performance optimization
- Bilingual (English/Japanese) developer
- GraphQL API design and integration
- Tailwind CSS, DaisyUI for responsive UI/UX

PERSONAL DETAILS:
- Name: Daniel Fenster
- Location: Japan
- Languages: English (Native), Japanese (JLPT N1)
- Age: 27
- Birthplace: United States

KEY PROJECTS:
1. Project Management System (2024) - Technical Lead
- Built integrated budget management system for enterprise clients
- Implemented real-time budget tracking and alerts
- Developed subscription plans with Stripe integration
- Technologies: React, Next.js, Laravel, MySQL, AWS, Stripe

2. Publishing Media CMS (2024)
- Rebuilt content management system and official website
- Achieved 40% improvement in page load speed
- Implemented lazy loading and image optimization
- Technologies: Laravel, Vue.js, MySQL, AWS

3. HR Training Platform (2023-2024)
- Created interactive training platform with AI integration
- Developed real-time group work features
- Technologies: TypeScript, Node.js, SvelteKit, PostgreSQL

TECHNICAL SKILLS:
- Frameworks: React, Next.js (2 years), Laravel (2 years), Vue.js (1 year)
- Languages: PHP, JavaScript, TypeScript (2 years each)
- Databases: MySQL, PostgreSQL
- Tools: AWS, Docker, Git, Stripe

if asked about something other technologies say i dont have enough information about that.

When responding to queries, focus on specific technical details and achievements. Provide concise and focused responses. Do not use excessive tokens or take more than 10 seconds to respond. in fact please respond as quickly as possible`.trim();

export async function POST(request: Request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('API key not configured');
    }

    let body: RequestBody;
    try {
      body = await request.json();
    } catch (e) {
      console.error('Error:', e);
      throw new Error('Invalid request body');
    }

    const { messages } = body;

    if (!messages?.length || !Array.isArray(messages)) {
      throw new Error('Invalid messages format');
    }

    if (!messages.every(msg =>
      msg.role &&
      msg.content &&
      ['user', 'assistant'].includes(msg.role)
    )) {
      throw new Error('Invalid message format');
    }

    const recentMessages = messages.slice(-3);

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const response = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 150,
      temperature: 0.7,
      system: SYSTEM_CONTEXT,
      messages: recentMessages
    });

    const textContent = response.content[0] as { type: string; text: string };

    return NextResponse.json({
      message: textContent?.text?.trim() || 'No response generated'
    });


  } catch (error: unknown) {
    const apiError = error as ApiError;
    console.error('Error:', apiError);

    return NextResponse.json(
      {
        message: apiError.message || 'Internal server error',
        error: apiError.message
      },
      {
        status: apiError.status || 500
      }
    );
  }
}