import React, { useState } from 'react';
// import useAxios from 'hooks/useAxios';

function ButtonState() {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="wrapper">
      <div className="">
        <div className="buttonWrapper">
          <button
            style={{
              backgroundColor: tabs === 0 ? '#16aa56' : 'white',
              color: tabs === 0 ? 'white' : 'black',
            }}
            className="buttons"
            onClick={() => setTabs(0)}
          >
            My NFTs
          </button>
          <button
            style={{
              backgroundColor: tabs === 1 ? '#16aa56' : 'white',
              color: tabs === 1 ? 'white' : 'black',
            }}
            className="buttons"
            onClick={() => setTabs(1)}
          >
            Wish List{' '}
          </button>
          <button
            style={{
              backgroundColor: tabs === 2 ? '#16aa56' : 'white',
              color: tabs === 2 ? 'white' : 'black',
            }}
            className="buttons"
            onClick={() => setTabs(2)}
          >
            Recently Viewed artWorks
          </button>
          <button
            style={{
              backgroundColor: tabs === 3 ? '#16aa56' : 'white',
              color: tabs === 3 ? 'white' : 'black',
            }}
            className="buttons"
            onClick={() => setTabs(3)}
          >
            Recently Viewed artists
          </button>
        </div>
      </div>
      {tabs === 0 && (
        <div className="viewingcard">
          <div>첫번째 카드</div>
        </div>
      )}
      {tabs === 1 && (
        <div className="secondcard">
          <div>두번째 카드</div>
        </div>
      )}
      {tabs === 2 && (
        <div className="viewingcard">
          <div>세번째 카드</div>
        </div>
      )}
      {tabs === 3 && (
        <div className="viewingcard">
          <div>네번째 카드</div>
        </div>
      )}
    </div>
  );
}

export default ButtonState;
