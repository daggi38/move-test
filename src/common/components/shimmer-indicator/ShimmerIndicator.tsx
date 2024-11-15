import React from "react";

type ShimmerIndicatorProps = {
  count: number;
  width: number;
  height: number;
  className?: string; // Optional className prop
};

const ShimmerIndicator: React.FC<ShimmerIndicatorProps> = ({
  count,
  width,
  height,
  className = "", 
}) => {
  return (
    <div className={`flex flex-row flex-wrap gap-x-5 gap-y-5 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
          className="bg-primary rounded-lg shimmer-effect w-full sm:w-auto"
        />
      ))}
    </div>
  );
};

export default ShimmerIndicator;
