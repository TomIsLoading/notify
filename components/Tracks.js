import React from "react";
import TableHeader from "./TableHeader";
import Track from "./Track";

const tracks = [
  {
    id: 1,
    src: "track1.mp3",
    title: "Smooth AF",
    artist: "Ed",
    album: "Ed's Album",
    imgSrc: "https://unsplash.it/40/40",
    duration: "3:03",
  },
  {
    id: 2,
    src: "track2.mp3",
    title: "Smoother AF",
    artist: "Edd",
    album: "Edd's Album",
    imgSrc: "https://unsplash.it/40/40",
    duration: "3:52",
  },
  {
    id: 3,
    src: "track3.mp3",
    title: "Smoothest AF",
    artist: "Eddy",
    album: "Eddy's Album",
    imgSrc: "https://unsplash.it/40/40",
    duration: "2:31",
  },
];

export default function Tracks({
  playing,
  setPlaying,
  selectedHowl,
  setSelectedHowl,
}) {
  return (
    <div className="w-full mx-auto px-4 py-2">
      <TableHeader />

      {tracks.map((track, idx) => {
        return (
          <Track
            key={track.id}
            track={track}
            selectedHowl={selectedHowl}
            setSelectedHowl={setSelectedHowl}
            playing={playing}
            setPlaying={setPlaying}
            isFirstTrack={idx === 0}
          />
        );
      })}
    </div>
  );
}
