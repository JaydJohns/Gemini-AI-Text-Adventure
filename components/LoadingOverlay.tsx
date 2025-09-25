import React from 'react';

const loadingMessages = [
    "The mists of fate are swirling...",
    "Consulting the ancient oracles...",
    "Weaving the next thread of destiny...",
    "Painting your world with pixels...",
    "The storyteller clears their throat...",
    "Loading your next great adventure...",
];

const LoadingSpinner: React.FC = () => (
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-400"></div>
);

interface LoadingOverlayProps {
    message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ message }) => {
    const [displayMessage, setDisplayMessage] = React.useState(message || loadingMessages[0]);

    React.useEffect(() => {
        if (!message) {
            const interval = setInterval(() => {
                setDisplayMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [message]);
    
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center z-50 transition-opacity duration-300">
            <LoadingSpinner />
            <p className="mt-6 text-xl text-cyan-200 font-cinzel tracking-wider animate-pulse">
                {displayMessage}
            </p>
        </div>
    );
};

export default LoadingOverlay;
