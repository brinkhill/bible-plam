"use client";

export default function FormattedDate() {
  const today: Date = new Date();
  const formattedDate: string = formatDate(today);

  return <span className="font-semibold">{formattedDate}</span>;
}

function formatDate(date: Date): string {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day: number = date.getDate();
  const month: string = months[date.getMonth()];
  const year: number = date.getFullYear();

  const suffix: string =
    day === 11 || day === 12 || day === 13
      ? "th"
      : day % 10 === 1
      ? "st"
      : day % 10 === 2
      ? "nd"
      : day % 10 === 3
      ? "rd"
      : "th";

  return `${month} ${day}${suffix}`;
}
