// "use client";
import Image from "next/image";
// import React, { useState } from "react";

interface AvatarProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  count: number;
}

function Avatar({ src, alt, width, height, count }: AvatarProps) {
  // const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };

  return (
    <div
      className={` webkit-select relative flex h-28 w-28 items-center justify-center rounded-full bg-gray-300 p-2`}
      // onClick={handleClick}
      // ${ clicked ? "bg-green-300" : "bg-gray-300" }
    >
      <Image src={src} alt={alt} width={width} height={height} />
      <div className="absolute left-[-4vw] top-[-0.5vh] flex items-center justify-center rounded-lg bg-orange-300">
        <span className="p-1 text-2xl">🔥{count}</span>
      </div>
    </div>
  );
}

export default function Tracker({ streaks }: any) {
  return (
    <div className="flex items-center justify-evenly gap-2 rounded-lg bg-gradient-to-br from-gray-500 to-gray-400 p-2 text-background shadow-md shadow-gray-400">
      <Avatar
        src="/brink.png"
        alt="Brink Memoji"
        width={70}
        height={70}
        count={streaks.brink.streak}
      />
      <Avatar
        src="/sara.png"
        alt="Sara Memoji"
        width={65}
        height={70}
        count={streaks.sara.streak}
      />
    </div>
  );
}
