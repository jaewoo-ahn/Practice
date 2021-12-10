import React from 'react';
import styled from 'styled-components';

function FeatureLarge() {
  return (
    <Container>
      {/* <ArtImage>
        <ArtImageContainer />
      </ArtImage> */}
      <ArtInfo>
        <Items>
          <Artist>
            <Avatar>
              <AvatarImage />
              <AvatarImfo>
                <Creater>Creater</Creater>
                <Name>JaewooAhn</Name>
              </AvatarImfo>
              <LeftInfo>
                <Info>asdasdasdasd</Info>
              </LeftInfo>
            </Avatar>
          </Artist>
          <Divider />
        </Items>
      </ArtInfo>
    </Container>
  );
}

export default FeatureLarge;

const Container = styled.div`
  position: relative;
  width: 760px;
  height: 888px;
  border: 1px solid black;
`;
const ArtInfo = styled.div`
  position: absolute;
  left: 0%;
  right: 52.11%;
  top: 85.59%;
  bottom: 0%;
`;
const ArtImageContainer = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 14.41%;

  border-radius: 24px;
  background-color: red;
`;
const ArtImage = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: -12.5%;
  bottom: -12.47%;

  width: 760px;
  height: 949.77px;
`;
const Items = styled.div`
  position: absolute;
  width: 364px;
  height: 48px;
  left: 0px;
  top: 80px;
`;
const Divider = styled.hr`
  position: absolute;
  width: 1px;
  height: 48px;
  left: calc(50% - 1px / 2 - 0.5px);
  top: calc(50% - 62px / 2);
  background: #e1e1e1;
`;
const Artist = styled.div`
  position: absolute;
  width: 164px;
  height: 48px;
  left: 0px;
  top: 0px;
`;
const Avatar = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  left: 0px;
  top: 0px;
`;
const AvatarImage = styled.img`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: -24.97%;
  background-color: red;
  width: 100%;
  height: 100%;
`;
const AvatarImfo = styled.div`
  position: absolute;
  width: 100px;
  height: 41px;
  left: 49px;
  top: 3px;
  background-color: red;
`;
const Creater = styled.span`
  position: absolute;
  left: 0%;
  right: 60%;
  top: 0%;
  bottom: 51.22%;
  color: #9e9e9e;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
`;
const Name = styled.span`
  position: absolute;
  left: 0%;
  right: 60%;
  top: 40%;
  bottom: 49.22%;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
`;
const LeftInfo = styled.div`
  position: absolute;
  width: 100px;
  height: 41px;
  left: 200px;
  top: 3px;
`;
const Info = styled.span`
  position: absolute;
  left: 0%;
  right: 60%;
  top: 0%;
  bottom: 51.22%;
  color: #9e9e9e;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
`;
// const Container8 = styled.div``;
// const Container8 = styled.div``;
// const Container8 = styled.div``;
// const Container8 = styled.div``;
// const Container8 = styled.div``;
// const Container8 = styled.div``;
// const Container8 = styled.div``;
