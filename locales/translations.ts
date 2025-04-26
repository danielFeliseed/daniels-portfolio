export const translations = {
    ja: {
        nav: {
            about: 'について',
            projects: 'プロジェクト',
            contact: 'お問い合わせ'
        },
        hero: {
            greeting: 'こんにちは',
            name: 'フェンスター ダニエル',
            title: 'フルスタックエンジニアです',
            subtitle: 'PHP、Laravel、TypeScript、React、Next.js を用いて、NoBiのようなモダンなSaaSソリューションを含むウェブ体験を構築しています。',
            viewProjects: 'プロジェクトを見る',
            contactMe: 'お問い合わせ'
        },
        projects: {
            title: '主なプロジェクト',
            keyFeatures: '主な機能',
            viewMore: '詳細を見る',
            viewLess: '閉じる',
            projectItems: {
                1: {
                    title: "NoBi",
                    description: "教師が生徒を管理し、エンゲージメントを高める方法を革新する革新的な教育プラットフォーム。この包括的なSaaSソリューションは、宿題管理を合理化し、学習体験をパーソナライズし、直感的なインターフェースを通じて教育をゲーミフィケーションします。",
                    features: [
                        "包括的なクラスおよび生徒管理システム",
                        "レベルに応じた学習教材のためのAIを活用したコンテンツ生成",
                        "多言語翻訳サポート付きテキスト読み上げ機能",
                        "連続記録、ポイント、リーダーボードを備えたゲーミフィケーションシステム",
                        "宿題提出状況を追跡するためのインタラクティブカレンダー",
                        "Stripe統合による複数階層のサブスクリプションモデル"
                    ],
                    period: "2025年1月 - 現在",
                    highlight: true,
                    role: "単独開発者 兼 プロダクトオーナー",
                    url: "https://nobi.jp",
                    achievements: [
                        "コンセプトから展開までのプラットフォーム全体のアーキテクチャを設計・実装",
                        "教育コンテンツ生成のための高度なAI機能を統合",
                        "複数の価格帯を持つスケーラブルなサブスクリプションモデルを構築",
                        "生徒の参加率を60%向上させた魅力的なゲーミフィケーションシステムを作成",
                        "リアルタイムの進捗追跡および通知システムを実装"
                    ]
                },
                2: {
                    title: "プロジェクト管理システム",
                    description: "複数のタスク管理APIと連携し、リアルタイムでプロジェクトの予算を可視化し、予算超過リスクを検知する統合予算管理システム。",
                    features: [
                        "リアルタイムの予算追跡とアラート",
                        "サブスクリプションプラン（Basic、Standard、Premium）",
                        "Stripe決済の統合",
                        "モジュラーAPIシステム",
                        "直感的なダッシュボード"
                    ],
                    period: "2024年6月 - 現在",
                    role: "テックリード"
                },
                3: {
                    title: "出版メディアCMS",
                    description: "既存の社内システムと公式ウェブサイトを統合する戦略的システム再開発プロジェクト。コンテンツ管理の効率化とUX改善に重点を置いています。",
                    features: [
                        "モダンフレームワークへの移行",
                        "画像最適化",
                        "遅延読み込みの実装",
                        "動的コンテンツ管理",
                        "サーバーリソースの最適化"
                    ],
                    period: "2024年3月 - 現在",
                    role: "フルスタックエンジニア"
                },
                4: {
                    title: "人材育成プラットフォーム",
                    description: "AIを活用したリアルタイム学習支援、グループワーク分析、知識定着機能を備えた次世代型新入社員教育支援システム。",
                    features: [
                        "リアルタイムグループワーク機能",
                        "AI要約・分析",
                        "インタラクティブな学習カードシステム",
                        "学習進捗の可視化",
                        "レスポンシブデザイン"
                    ],
                    period: "2023年10月 - 2024年3月",
                    role: "フルスタックエンジニア"
                }
            }
        },
        chatbot: {
            title: "AIポートフォリオアシスタント",
            greeting: "こんにちは！私はダニエルのポートフォリオ、プロジェクト、スキルに特化したAIアシスタントです。React、Next.js、Laravel、PHPなどの経験や特定のプロジェクトについてお話しできます。何を知りたいですか？",
            errorMessage: "申し訳ありませんが、トークンが切れました。後でもう一度お試しください。",
            thinking: "考え中...",
            chatbotName: "ポートフォリオアシスタント",
            placeholder: "AIポートフォリオアシスタントに質問する"
        },
        skills: {
            title: "スキル",
            frontend: "フロントエンド",
            backend: "バックエンド",
            databases: "データベース",
            cloud: "クラウド",
            tools: "開発ツール",
            payment: "決済システム"
        },
        experience: {
            title: "職務経歴",
            company: "フェリシード株式会社",
            position: "フルスタックエンジニア",
            type: "正社員",
            description: "ユーザー体験とパフォーマンス最適化に重点を置いたモダンなウェブアプリケーション開発をリード。",
            achievements: [
                "複数のフルスタックプロジェクトを主導",
                "AI機能の実装と統合",
                "アプリケーションのパフォーマンスを40%向上",
                "アジャイル手法を用いた小規模開発チームのリード"
            ]
        },
        about: {
            title: "自己紹介",
            location: "拠点: 日本",
            languages: {
                title: "言語",
                en: "英語 (ネイティブ)",
                ja: "日本語 (JLPT N1)"
            },
            summary: "2年間のフルスタック開発経験を持ち、効率的でスケーラブルなウェブアプリケーションの構築に専念。Next.js、React、Laravel、AWSを専門とし、ユーザー体験とパフォーマンス最適化に情熱を持つバイリンガル開発者として、グローバルな視点を開発プロジェクトにもたらしています。",
            certifications: {
                title: "資格",
                status: "取得予定",
                inProgress: "学習中"
            }
        },
        contact: {
            title: "お問い合わせ",
            downloadCV: "職務経歴書をダウンロード",
            sayHello: "連絡をする"
        }
    },
    en: {
        nav: {
            about: 'About',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Hello, I\'m',
            name: 'Daniel Fenster',
            title: 'Full Stack Developer',
            subtitle: 'Building modern web experiences, including SaaS platforms like NoBi, using PHP, Laravel, TypeScript, React, and Next.js',
            viewProjects: 'View Projects',
            contactMe: 'Contact Me'
        },
        projects: {
            title: 'Featured Projects',
            keyFeatures: 'Key Features',
            viewMore: 'View More',
            viewLess: 'View Less',
            projectItems: {
                
                1: {
                    title: "NoBi",
                    description: "An innovative educational platform revolutionizing how teachers manage and engage with students. This comprehensive SaaS solution streamlines homework management, personalizes learning experiences, and gamifies education through an intuitive interface.",
                    features: [
                        "Comprehensive class and student management system",
                        "AI-powered content generation for level-appropriate learning materials",
                        "Text-to-speech with multilingual translation support",
                        "Gamification system with streaks, points, and leaderboards",
                        "Interactive calendar for homework submission tracking",
                        "Multi-tier subscription model with Stripe integration"
                    ],
                    period: "January 2025 - Present",
                    highlight: true,
                    role: "Sole Developer & Product Owner",
                    url: "https://no-bi.jp",
                    achievements: [
                        "Designed and implemented the entire platform architecture from concept to deployment",
                        "Integrated advanced AI capabilities for generating educational content",
                        "Built a scalable subscription model with multiple pricing tiers",
                        "Created an engaging gamification system that increased student participation by 60%",
                        "Implemented real-time progress tracking and notification systems"
                    ]
                },
                2: {
                    title: "Project Management System",
                    description: "Integrated budget management system that visualizes project budgets in real-time and detects budget overrun risks by connecting with multiple task management APIs.",
                    features: [
                        "Real-time budget tracking and alerts",
                        "Subscription plans (Basic, Standard, Premium)",
                        "Stripe payment integration",
                        "Modular API integration system",
                        "Intuitive dashboard interface"
                    ],
                    period: "June 2024 - Present",
                    role: "Tech Lead"
                },
                3: {
                    title: "Publishing Media CMS",
                    description: "Strategic system redevelopment project integrating existing internal systems with official website, focusing on content management efficiency and UX improvement.",
                    features: [
                        "Modern framework migration",
                        "Image optimization",
                        "Lazy loading implementation",
                        "Dynamic content management",
                        "Server resource optimization"
                    ],
                    period: "March 2024 - Present",
                    role: "Full Stack Developer"
                },
                4: {
                    title: "HR Training Platform",
                    description: "Next-generation educational support system for new employees featuring AI-powered real-time learning support, group work analysis, and knowledge retention features.",
                    features: [
                        "Real-time group work functionality",
                        "AI summary and analysis",
                        "Interactive flashcard system",
                        "Learning progress visualization",
                        "Responsive design"
                    ],
                    period: "October 2023 - March 2024",
                    role: "Full Stack Developer"
                }
            }
        },
        chatbot: {
            title: "AI Portfolio Assistant",
            greeting: "Hi! I'm an AI assistant specializing in Daniel's portfolio, projects and skills. I can tell you about his experience with React, Next.js, Laravel, PHP and various other technologies, as well as specific projects. What would you like to know?",
            errorMessage: "I apologize, but I have run out of tokens for now. Please try again later.",
            thinking: "Thinking...",
            chatbotName: "Portfolio Assistant",
            placeholder: "Ask AI Portfolio Assistant a question"
        },
        skills: {
            title: "Skills",
            frontend: "Frontend",
            backend: "Backend",
            databases: "Databases",
            cloud: "Cloud",
            tools: "Development Tools",
            payment: "Payment Systems"
        },
        experience: {
            title: "Experience",
            company: "Feliceed Co., Ltd",
            position: "Full Stack Developer",
            type: "Full-time",
            description: "Leading development of modern web applications with focus on user experience and performance optimization.",
            achievements: [
                "Spearheaded multiple successful full-stack projects",
                "Implemented AI features and integrations",
                "Optimized application performance by up to 40%",
                "Led small development teams using agile methodologies"
            ]
        },
        about: {
            title: "About Me",
            location: "Location: Japan",
            languages: {
                title: "Languages",
                en: "English (Native)",
                ja: "Japanese (JLPT N1)"
            },
            summary: "Full stack developer with 2 years of experience building efficient and scalable web applications. Specialized in Next.js, React, Laravel, and AWS. Passionate about user experience and performance optimization. Bilingual professional bringing global perspective to development projects.",
            certifications: {
                title: "Certifications",
                status: "Expected",
                inProgress: "In Progress"
            }
        },
        contact: {
            title: "Contact",
            downloadCV: "Download CV",
            sayHello: "Say Hello"
        }
    }
};