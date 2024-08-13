import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {

    const ref = useRef(null);

  const data = [
    // description,filesize, closeOrDownload, tagDetails
    {
      description: "Hey there!! It's me Aryan...",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Book Appointment", tagColor: "blue" },
    },
    {
      description: "New Avengers Movie is Coming Soon!!! Get your free passes now.",
      filesize: "2.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description: "Apna Bana le Piya (720p60)",
      filesize: "3.3mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    
  ];


  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap  p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
