import { Mail } from 'lucide-react';
import { Download } from 'lucide-react';
import { socialLinks } from '@/data';

export default function ContactSection() {

    return (
        <section id="contact" className="py-24 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
                <div className="flex items-center justify-center gap-4 flex-wrap">

                    <a href={`mailto:${socialLinks.email}`}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        Say Hello
                    </a>

                    <a
                        href="/cv.pdf"
                        download="daniel-fenster-cv.pdf"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                        <Download className="w-5 h-5" />
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}