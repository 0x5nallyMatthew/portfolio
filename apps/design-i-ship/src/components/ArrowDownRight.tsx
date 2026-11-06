export default function ArrowDownRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="square"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 7 17 17" />
      <path d="M17 7v10H7" />
    </svg>
  );
}
