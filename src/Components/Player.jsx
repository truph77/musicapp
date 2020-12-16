import React from "react";
import PlayerDetail from "./playerDetail";
import PlayerControl from "./PlayerControl";

const Player = (props) => {
  return (
    <div className="c-player">
      <h4>Playing now</h4>
      <PlayerDetail song={props.song} />
      <audio controls loop>
        <source src={props.song.src}></source>
      </audio>
      <PlayerControl />
      <p>
        <strong>Next up:</strong>
        {props.nextSong.title} by {props.nextSong.artist}
      </p>
    </div>
  );
};

export default Player;