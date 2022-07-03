import React from "react";
import { BsSpotify, BsPlayFill, BsPauseFill } from "react-icons/bs";
import { Howler } from "howler";

export default function Header({ selectedHowl, playing, setPlaying }) {
  const handleVolumeChange = (e) => {
    Howler.volume(parseInt(e.target.value, 10) / 100);
  };

  const togglePlay = () => {
    if (!selectedHowl) return;

    if (playing) {
      selectedHowl.pause();
      setPlaying(false);
    } else {
      selectedHowl.play();
      setPlaying(true);
    }
  };

  return (
    <div className="bg-header w-full p-4 flex items-center justify-between">
      <div className="flex items-center">
        <BsSpotify className="text-textLight" size="30px" />
        <h1 className="text-textLight ml-2 font-bold text-2xl">Notify</h1>
      </div>
      <div className="flex items-center">
        <input
          type="range"
          max="100"
          defaultValue="100"
          onChange={handleVolumeChange}
          className="cursor-pointer"
        />
        <button
          className="text-textLight bg-brand p-2 rounded-full ml-4"
          onClick={togglePlay}
        >
          {playing ? <BsPauseFill size="24px" /> : <BsPlayFill size="24px" />}
        </button>
      </div>
    </div>
  );
}
