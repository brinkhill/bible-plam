import Card from "./components/Card";
import Tracker from "./components/Tracker";
import SmallCard from "./components/SmallCard";

export default async function Main() {
  return (
    <section className="flex h-4/6 flex-col justify-evenly px-5 font-bold">
      <Card />
      <Tracker />
      <div className="grid w-full grid-cols-2  gap-2 ">
        <SmallCard variant="yesterday" />
        <SmallCard variant="tomorrow" />
      </div>
    </section>
  );
}
