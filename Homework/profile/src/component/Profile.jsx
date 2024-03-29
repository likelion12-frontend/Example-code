import { styled } from "styled-components";
import profileImg from "../assests/developer.JPG";
import phoneImg from "../assests/phone.svg";
import mailImg from "../assests/mail.svg";
import mapImg from "../assests/map.svg";
import "./profile.css";

const ProfileContainer = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 40vw;
  height: 75vh;

  @media(max-width: 450px) {
    height: 25vh;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15vw;

  @media (max-width: 450px) {
    width: 20vw;
  }
`;

const ProfileDetailConatinerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  // align-items: left;
  padding-left: 3vw;
  padding-right: 3vw;
`

const ProfileDetailBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`;

const ProfileDetailText = styled.p`
  color: #484a64;
  font-family: Inter;
  font-size: 2vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const NameText = styled.p`
  color: #4a86ff;
  text-align: center;
  font-family: Inter;
  font-size: 3vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export default function ProfileComponent() {
  return (
    <ProfileContainer>
      <ProfileBox>
        <img src={profileImg} alt="profileImg" className="profileImg" />
        <NameText>박제준</NameText>
      </ProfileBox>
      <ProfileDetailConatinerBox>
        <ProfileDetailBox>
          <img src={phoneImg} alt="phoneImg" className="detailImg" />
          <ProfileDetailText className="phone">010-3279-7995</ProfileDetailText>
        </ProfileDetailBox>
        <ProfileDetailBox>
          <img src={mailImg} alt="mailImg" className="detailImg" />
          <ProfileDetailText>33.beautifulboy@gmail.com</ProfileDetailText>
        </ProfileDetailBox>
        <ProfileDetailBox>
          <img src={mapImg} alt="mapImg" className="detailImg" />
          <ProfileDetailText>서울특별시 용산동</ProfileDetailText>
        </ProfileDetailBox>
      </ProfileDetailConatinerBox>
    </ProfileContainer>
  );
}
