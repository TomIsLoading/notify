import React, { useEffect, useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { Howl } from "howler";

export default function Track({
  track,
  selectedHowl,
  setSelectedHowl,
  playing,
  setPlaying,
  isFirstTrack,
}) {
  const [howl, setHowl] = useState(null);

  useEffect(() => {
    const newHowl = new Howl({
      src: [track.src],
      loop: true,
      autoplay: false,
    });

    setHowl(newHowl);

    if (isFirstTrack) {
      setSelectedHowl(newHowl);
    }
  }, [track]);

  const togglePlay = () => {
    if (howl.playing()) {
      howl.pause();
      setPlaying(false);
      return;
    }

    selectedHowl.playing() && selectedHowl.pause();

    setPlaying(true);
    howl.play();
    setSelectedHowl(howl);
  };

  return (
    <div
      onClick={togglePlay}
      className="grid grid-cols-player mx-auto px-4 py-2 rounded-sm transition-colors hover:bg-hover cursor-pointer"
    >
      <div className="col-span-1 flex items-center">
        {selectedHowl === howl && playing ? (
          <BsPauseFill size="20px" />
        ) : (
          <BsPlayFill size="20px" />
        )}
        <img src={track.imgSrc} className="w-[40px] h-[40px] ml-2" />
      </div>
      <div className="col-span-5 flex flex-col items-start justify-start">
        <span className="text-white font-semibold">{track.title}</span>
        <span>{track.artist}</span>
      </div>
      <div className="col-span-5 flex items-center justify-start">
        {track.album}
      </div>
      <div className="col-span-1 flex items-center justify-start">
        {track.duration}
      </div>
    </div>
  );
}
