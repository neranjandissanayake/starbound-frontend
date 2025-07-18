import React from 'react';

interface StarIconProps {
  className?: string;
  onClick?: () => void;
  filled?: boolean;
  size?: number;
}

const StarIcon: React.FC<StarIconProps> = ({
  className,
  onClick,
  filled = true,
  size = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill={filled ? '#FBBF24' : 'none'} // yellow fill if filled, else none
      stroke={filled ? 'none' : '#000'} // optionally stroke only if not filled
      className={className}
      onClick={onClick}
      width={size}
      height={size}
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"></path>
    </svg>
  );
};

export default StarIcon;
