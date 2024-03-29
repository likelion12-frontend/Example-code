import styled from "styled-components"


const HobbyBox = styled.div`
  width: 25vw;
`

const TextContainer = styled.div`
  width: 100%;
  height: 5vh;
  background: #4A86FF;
  border-radius: 1rem 1rem 0rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    height: 2vh;
  }
`

const HobbyText = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`

const ImgContainer = styled.div`
  border: 1px solid #EBEDF8;
  background: #FFF;
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    height: 10vh;
  }
`

const Img = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 1rem;
`
export default function HobbyComponent({text, img}) {
  return (
    <HobbyBox>
      <TextContainer>
        <HobbyText>{text}</HobbyText>
      </TextContainer>
      <ImgContainer>
        <Img src={img} alt="img" />
      </ImgContainer>
    </HobbyBox>
  )
}