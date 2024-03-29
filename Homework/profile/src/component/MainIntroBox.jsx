import { styled } from "styled-components";
import ProfileComponent from "./Profile";
import DetailInfoComponent from "./DetailInfo";

const IntroBody = styled.div`
  background: #F3F5FF;
`

const CategoryText = styled.p`
  font-family: Inter;
  font-size: 5vw;
  font-weight: 800;
  // line-height: 84.72px;
  text-align: center;
  color: #4A86FF;
  margin: 0;
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

export default function MainIntroBox() {
  return (
    <IntroBody>
      <CategoryText>ABOUT</CategoryText>
      <ProfileContainer>
        <ProfileComponent />
        <DetailInfoComponent />
      </ProfileContainer>
      <CategoryText>Hobby</CategoryText>
    </IntroBody>
  )
}