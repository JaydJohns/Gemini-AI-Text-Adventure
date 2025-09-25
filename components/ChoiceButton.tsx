import React from 'react';

interface ChoiceButtonProps {
  choice: string;
  onClick: (choice: string) => void;
  disabled: boolean;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ choice, onClick, disabled }) => {
  return (
    <button
      onClick={() => onClick(choice)}
      disabled={disabled}
      className="w-full text-left bg-gray-800 border-l-4 border-cyan-500 text-gray-200 px-6 py-4 rounded-r-lg hover:bg-gray-700 hover:border-cyan-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
    >
      {choice}
    </button>
  );
};

export default ChoiceButton;
