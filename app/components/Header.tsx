import Greeting from "./Greeting";
import SettingsButton from "./SettingsButton";
import RefreshButton from "./RefreshButton";
export default function Header() {
  return (
    <section className="flex h-[15svh] items-center justify-between px-5 font-bold">
      <Greeting />
      {/* <SettingsButton /> */}
      <div className="flex">
        <RefreshButton />
        <SettingsButton />
      </div>
    </section>
  );
}
