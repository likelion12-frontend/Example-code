import styled from "styled-components";

const ConatactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
`

const ContactText = styled.p`
  cursor: pointer;
  margin: 0;
  margin-top: 5vh;
  color: #000;
  font-family: Inter;
  font-size: 3vw;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 450px) {
    margin-top: 2vh;
  }
`

const ContactLink = styled.a`
  cursor: pointer;
  margin: 0;
  margin-top: 5vh;
  color: #000;
  font-family: Inter;
  font-size: 3vw;
  font-style: normal;
  font-weight: 700;
  text-decoration: none; 

  @media (max-width: 450px) {
    margin-top: 2vh;
  }
`

export default function ContactComponent() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("33.beautifulboy@gmail.com");
      alert("이메일이 복사되었습니다.")
    }
    catch (e) {
      alert("복사 실패했습니다.");
    }
  }

  return (
    <ConatactBox>
      <ContactText onClick={handleCopy}>📧 E-Mail</ContactText>
      <ContactLink href="https://github.com/Jun279" target="_blank" rel="noopener noreferrer">🦊 Github</ContactLink>
      <ContactLink href="https://www.instagram.com/omiomotd" target="_blank" rel="noopener noreferrer">🔴 Instagram</ContactLink>
    </ConatactBox>
  )
}