import FormattedDate from "./Date";
import Greeting from "./greeting";

export default function Header() {
  return (
    <section className="justify-left flex h-1/6 flex-col justify-between border-b p-5">
      <Greeting />
      <div>
        <FormattedDate />
      </div>
    </section>
  );
}
