function getDate(isTomorrow: boolean) {
  const today = new Date();

  isTomorrow
    ? today.setDate(today.getDate() + 1)
    : today.setDate(today.getDate() - 1);

  const formattedDate = today.toISOString().split("T")[0];
  return formattedDate;
}

export default async function SmallCard(props: {
  variant: "yesterday" | "tomorrow";
}) {
  let date, when, color;
  switch (props.variant) {
    case "yesterday":
      date = getDate(false);
      when = "Yesterday's";
      color = "something";
      break;
    case "tomorrow":
      date = getDate(true);
      when = "Tomorrow's";
      color = "something";
      break;
  }

  const response = await fetch(
    `https://bible.brinkley.dev/api/passage/?date=${date}`,
    {
      cache: "no-store",
    },
  );
  const result = await response.json();
  return (
    <div className="rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 p-3 text-background shadow-md shadow-blue-400">
      <div className="flex justify-between">
        <span className="text-sm text-blue-200">{when} Reading</span>
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
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
        </svg>
      </div>
      <div>
        <div className="flex flex-col  pt-8">
          <span className="text-2xl">{result?.Passage}</span>
        </div>
      </div>
    </div>
  );
}
