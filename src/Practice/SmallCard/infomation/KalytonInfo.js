import React from 'react';
import './KlaytonInfo.scss';

function KalytonInfo() {
  return (
    <div className="iTemsWrapper">
      <div className="klaytonInfoWrapper">
        <div className="klaytonBox">
          <div className="klaytonImgWrapper" />
          <div className="klaytonTextWrapper">
            <span className="KlaytonPrice">321.123.312</span>
            <span className="EthereumPrice">1.53 ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KalytonInfo;
