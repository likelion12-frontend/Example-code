import { styled } from "styled-components";

const IntroBody = styled.div`
  background: #F3F5FF;
`

const CategoryText = styled.p`
  font-family: Inter;
  font-size: 3rem;
  font-weight: 800;
  // line-height: 84.72px;
  text-align: center;
  color: #4A86FF;
  margin: 0;
`

export default function MainIntroBox() {
  return (
    <IntroBody>
      <CategoryText>ABOUT</CategoryText>
    </IntroBody>
  )
}