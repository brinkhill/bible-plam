"use client";
import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();
  return (
    <div className="pr-3 drop-shadow-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        onClick={() => router.refresh()}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="rounded-full bg-gray-200 p-1 text-gray-600 transition active:rotate-90"
      >
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
      </svg>
    </div>
  );
}
