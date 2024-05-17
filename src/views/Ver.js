import React from "react";
import {useParams} from "react-router-dom";
import YouTube from 'react-youtube';

import lista from "../data/lista"
export const Ver = () =>{
  let { id } = useParams();

  let ver = lista.find( ver => ver.id === parseInt(id))
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  return (
    <main>
      <YouTube className="container-fluid" videoId={ver.video.replace('https://www.youtube.com/watch?v=','')} opts={opts} onReady={_onReady} />
    </main>
  )
};