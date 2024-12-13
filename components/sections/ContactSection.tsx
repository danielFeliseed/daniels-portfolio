import { Mail } from 'lucide-react';

export default function ContactSection() {

    return (
        <section id="contact" className="py-24 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
                <p className="text-gray-400 text-lg mb-8">
                    I'm currently available for freelance work and full-time opportunities.
                </p>

                <a
                    href="mailto:your.email@example.com"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                    <Mail className="w-5 h-5" />
                    Say Hello
                </a>
            </div>
        </section>
    )
}