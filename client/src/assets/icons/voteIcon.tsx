export interface IconComponentProps {
  size?: number;
  color?: string;
  transform?: string;
  className?: string;
}

export const VoteIcon = ({
  size = 24,
  color = "grey",
  transform,
  className,
  ...rest
}: IconComponentProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M50 0L93.3013 75H6.69873L50 0Z" fill={color} />
    </svg>
  );
};
