import FormattedDate from "./formattedDate";
import Greeting from "./greeting";

export default function Header() {
 return (
  <section className="flex flex-col justify-left justify-between h-1/6 p-5 border-b">
   <Greeting />
   <div>
    <FormattedDate />
   </div>
  </section>
 );
}
