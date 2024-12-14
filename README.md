# Daniel Fenster's Portfolio

A modern, responsive portfolio website built with Next.js 15 and React 19, featuring AI integration and bilingual support.

## 🌟 Features

- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **AI Integration**: Integrated Claude AI for interactive portfolio exploration
- **Bilingual Support**: Full English and Japanese language support
- **Responsive Design**: Optimized for all device sizes
- **Interactive UI**: Smooth animations using Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 15, React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **AI Integration**: Claude AI (Anthropic)
- **Deployment**: Vercel

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Anthropic API key to `.env.local`:
```
ANTHROPIC_API_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
portfolio/
├── app/              # Next.js app directory
├── components/       # React components
├── stores/          # Zustand stores
├── types/           # TypeScript types
├── data/            # Static data
├── locales/         # Translation files
└── public/          # Static assets
```

## 🌐 Deployment

The project is optimized for deployment on Vercel. You can deploy your own version with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/portfolio)

## 📜 License

MIT License - feel free to use this project as inspiration for your own portfolio!

## 🙏 Acknowledgments

- [Anthropic](https://www.anthropic.com/) for Claude AI
- [Vercel](https://vercel.com) for hosting
- All the amazing open-source libraries used in this project
