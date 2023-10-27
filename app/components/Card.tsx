import FormattedDate from "./Date";

export default async function Card() {
  const response = await fetch(`https://bible.brinkley.dev/api/passage`, {
    cache: "no-store",
  });
  const result = await response.json();
  return (
    <div className="rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 p-3 text-background shadow-lg shadow-blue-400">
      <div className="flex justify-between">
        <span className="text-blue-200">Today's Readings</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          <path d="M6 8h2" />
          <path d="M6 12h2" />
          <path d="M16 8h2" />
          <path d="M16 12h2" />
        </svg>
      </div>
      <div>
        <div className="flex flex-col justify-center pt-8">
          <FormattedDate />
          <span className="text-4xl">{result?.Passage}</span>
        </div>
      </div>
    </div>
  );
}
