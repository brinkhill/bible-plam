"use client";

export default function Greeting() {
 const greeting = getGreeting();
 return <p className="text-3xl">{greeting}</p>;
}

function getGreeting() {
 var hour = new Date().getHours();
 let greeting;
 console.log(`current hour: ${hour}`);
 if (hour >= 11 && hour < 17) {
  greeting = "Good Afternoon!";
 } else if (hour >= 17 && hour <= 24) {
  greeting = "Good Evening!";
 } else {
  greeting = "Good Morning!";
 }
 return greeting;
}
