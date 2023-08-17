export default function Header() {
 const today: Date = new Date();
 const formattedDate: string = formatDate(today);
 return (
  <section className="flex flex-col justify-left justify-between h-1/6 p-5 border-b">
   <p className="text-3xl">Good Morning!</p>
   <div>
    <p>Today is:</p>
    <p>{formattedDate}</p>
   </div>
  </section>
 );
}

function formatDate(date: Date): string {
 const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

 const day: number = date.getDate();
 const month: string = months[date.getMonth()];
 const year: number = date.getFullYear();

 const suffix: string = day >= 11 && day <= 13 ? "th" : day % 10 === 1 ? "st" : day % 10 === 2 ? "nd" : day % 10 === 3 ? "rd" : "th";

 return `${month} ${day}${suffix}, ${year}`;
}
