"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function TornTitle({ text }: { text: string }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setDisplay("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplay(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [text]);

  return (
    <div className="relative mx-auto mb-6 max-w-5xl">
      <div className="relative mx-auto w-full max-w-5xl">
        <Image src="/assets/decor/tornpaper.png" alt="torn paper" width={1600} height={500} className="h-auto w-full" />
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3">
          <Image src="/assets/decor/tack.png" alt="tack" width={70} height={70} />
        </div>
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-semibold text-black">
          {display}
        </div>
      </div>
    </div>
  );
}


