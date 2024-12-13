import { useEffect, useState } from "react";

interface TypingTextProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
}

export default function TypingText({ text, delay = 0, speed = 50, className = "" }: TypingTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    const startTyping = () => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => {
                if (prev >= text.length - 1) {
                    clearInterval(intervalId);
                    setIsTypingComplete(true);
                    return prev;
                }
                return prev + 1;
            });
        }, speed);

        return () => clearInterval(intervalId);
    };

    useEffect(() => {
        if (delay > 0) {
            const delayTimeout = setTimeout(() => {
                startTyping();
            }, delay);
            return () => clearTimeout(delayTimeout);
        } else {
            startTyping();
        }
    }, [delay]);

    useEffect(() => {
        setDisplayedText(text.substring(0, currentIndex + 1));
    }, [currentIndex, text]);

    return (
        <span className={className}>
            {displayedText}
            {!isTypingComplete && (
                <span className="inline-block w-[2px] h-[1em] bg-current animate-pulse ml-1" />
            )}
        </span>
    );
};