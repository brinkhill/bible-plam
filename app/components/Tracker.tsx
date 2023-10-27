import Image from "next/image";
export default async function Tracker() {
  return (
    <div className="flex items-center justify-center gap-10 rounded-lg bg-gradient-to-br from-gray-500 to-gray-400 p-1 text-background shadow-md shadow-gray-400">
      <div className="flex items-center justify-center rounded-full bg-gray-200 p-2 ">
        <Image src="/brink.png" alt="Brink Memoji" width={90} height={70} />
      </div>
      <div className="flex items-center justify-center rounded-full bg-gray-200 p-2 text-gray-600">
        <Image src="/sara.png" alt="Sara Memoji" width={90} height={70} />
      </div>
    </div>
  );
}
