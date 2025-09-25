import React from 'react';

interface ErrorDisplayProps {
  message: string;
  onRestart: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message, onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-center p-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl border border-red-500 max-w-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-3xl font-bold font-cinzel text-red-400 mb-2">An Anomaly in Fate</h2>
        <p className="text-gray-300 mb-6">{message}</p>
        <button
          onClick={onRestart}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg font-cinzel"
        >
          Begin a New Saga
        </button>
      </div>
    </div>
  );
};

export default ErrorDisplay;
