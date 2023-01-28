import { useState } from "react";

export interface IconComponentProps {
  size?: number;
  color?: string;
  // transform?: boolean;
  className?: string;
  onClick?: () => void;
}

export const VoteIcon = ({
  size = 24,
  color = "grey",
  className,
  onClick,
  ...rest
}: IconComponentProps) => {
  const [isVoted, setIsVoted] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
    setIsVoted(true);
  };

  const decrement = () => {
    setCount((count) => count - 1);
    setIsVoted(false);
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      onClick={isVoted ? decrement : increment}
      style={{
        cursor: "pointer",
      }}
      {...rest}
    >
      <path
        d="M50 0L93.3013 75H6.69873L50 0Z"
        fill={isVoted ? "#F56565" : "grey"}
      />
    </svg>
  );
};
