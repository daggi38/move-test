import React from 'react';

interface MoveItTextProps {
  moveColor?: string;
  itColor?: string;
  className?: string;
}

const MoveItText: React.FC<MoveItTextProps> = ({ 
  moveColor = 'text-light-yellow', 
  itColor = 'text-light-grey', 
  className = '' 
}) => {
  return (
    <span className={`font-bold ${className}`}>
      <span className={moveColor}>Move</span>
      <span className={itColor}>It</span>
    </span>
  );
};

export default MoveItText;