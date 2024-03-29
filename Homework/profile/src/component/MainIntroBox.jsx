import { styled } from "styled-components";
import ProfileComponent from "./Profile";
import DetailInfoComponent from "./DetailInfo";
import HobbyComponent from "./Hobby";
import nangmanImg from "../assests/nangman.jpeg";
import wbImg from "../assests/WB.jpeg";
import musicImg from "../assests/music.jpeg";
import ContactComponent from "./Contact";

const IntroBody = styled.div`
  background: #F3F5FF;
  padding-bottom: 10vh;
`

const CategoryText = styled.p`
  font-family: Inter;
  font-size: 5vw;
  font-weight: 800;
  // line-height: 84.72px;
  text-align: center;
  color: #4A86FF;
  margin: 0;
  padding-top: 5vh;

  @media (max-width: 450px) {
    padding-top: 3vh;
  }
`

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vw;
  margin-top: 3vh;
  padding-left: 5vw;
  padding-right: 5vw;
  margin-bottom: 15vh;

  @media (max-width: 450px) {
    margin-bottom: 5vh;
  }
`

const HobbyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  gap: 2vw;
  margin-bottom: 15vh;

  @media(max-width: 450px) {
    margin-top: 1.5vh;
    margin-bottom: 5vh;
  }
`

const ContactContainer = styled.div``

export default function MainIntroBox() {
  return (
    <IntroBody>
      <CategoryText>ABOUT</CategoryText>
      <ProfileContainer>
        <ProfileComponent />
        <DetailInfoComponent />
      </ProfileContainer>
      <CategoryText>Hobby</CategoryText>
      <HobbyContainer>
        <HobbyComponent text="연인들 보면서 스트레스 받기" img={nangmanImg}/>
        <HobbyComponent text="자기 싫어서 발악하기" img={musicImg}/>
        <HobbyComponent text="스트레스 쌓이게 하면서 풀기" img={wbImg}/>
      </HobbyContainer>
      <CategoryText>Contact & Channels</CategoryText>
      <ContactContainer>
        <ContactComponent />
      </ContactContainer>
    </IntroBody>
  )
}