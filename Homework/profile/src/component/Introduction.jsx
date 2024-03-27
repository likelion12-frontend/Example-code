import { styled } from "styled-components";

const IntroductionContainer = styled.div`
  width: 100%;
  background-color: #4A86FF;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const IntroductionText = styled.p`
  color: white;
  font-weight: 800;
  font-size: 3rem;
  line-height: 5rem;
`

const BolodText = styled.span`
  color: red;
  // font-weight: 800;
  // font-size: 3rem;
`

export default function IntroductionBox() {
  return (
    <IntroductionContainer>
      <IntroductionText>안녕하세요!<br /><BolodText>가치</BolodText> 있는 사람이 되고 싶은 박제준입니다.<br />카페 사장이 되고 싶어요.</IntroductionText>
    </IntroductionContainer>
  )
}