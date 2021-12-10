import React from 'react';
import './ArtistInfo.scss';

function ArtistInfo() {
  return (
    <div className="artistInfoWrapper">
      <div className="artistImageWrapper">
        <img src="image/sample.jpg" />
      </div>
      <div className="artistTextWrapper">
        <span className="nameText">Creater</span>
        <span className="infoText">샘플용입니다.</span>
      </div>
    </div>
  );
}

export default ArtistInfo;
