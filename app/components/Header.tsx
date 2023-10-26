import Greeting from "./Greeting";
import SettingsButton from "./SettingsButton";
import FormattedDate from "./Date";
export default function Header() {
  return (
    <section className="flex h-1/6 items-center justify-between p-5 font-bold">
      <Greeting />
      <SettingsButton />
    </section>
  );
}
