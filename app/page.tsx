import Card from "./components/Card";
import Tracker from "./components/Tracker";
import SmallCard from "./components/SmallCard";

async function getStreaks() {
  const res = await fetch("https://bible.brinkley.dev/api/streaks", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Main() {
  const streaks = await getStreaks();
  return (
    <section className="grid h-[65svh] gap-2 px-5 font-bold">
      <Card />
      <Tracker streaks={streaks} />
      <div className="grid w-full grid-cols-2 gap-2">
        <SmallCard variant="yesterday" />
        <SmallCard variant="tomorrow" />
      </div>
    </section>
  );
}
