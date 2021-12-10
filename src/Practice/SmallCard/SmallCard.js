import React from 'react';
import './SmallCard.scss';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { BsCameraVideo } from 'react-icons/bs';
import ArtistInfo from './infomation/ArtistInfo';
import KalytonInfo from './infomation/KalytonInfo';

function SmallCard() {
  return (
    <div className="wholeWrapper">
      <div className="imageWrapper">
        <img src="image/sample.jpg" alt="1" />
        <div className="musicButton">
          <BsMusicNoteBeamed className="musicIcon" />
        </div>
        <div className="videoButton">
          <BsCameraVideo className="videoIcon" />
        </div>
      </div>
      <div className="artInfo">
        <span className="artistTitle">Jaewoo Ahn</span>
        <ArtistInfo />
        <div className="dividedLine" />
        <KalytonInfo />
      </div>
    </div>
  );
}

export default SmallCard;
