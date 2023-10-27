import Card from "./components/Card";
import Tracker from "./components/Tracker";
import SmallCard from "./components/SmallCard";

export default async function Main() {
  return (
    <section className="grid h-[65svh] gap-4 px-5 font-bold">
      <Card />
      <Tracker />
      <div className="grid w-full grid-cols-2  gap-2 ">
        <SmallCard variant="yesterday" />
        <SmallCard variant="tomorrow" />
      </div>
    </section>
  );
}
