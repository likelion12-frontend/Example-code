import { styled } from "styled-components";
import { useState } from "react";

const DetailInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2vw;
  grid-row-gap: 5vh;

  @media (max-width: 450px) {
    grid-row-gap: 1vh;
  }
`;

const DetailInfoBox = styled.div`
  position: relative;
`;

const InfoText = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 3vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

const InfoDetailText = styled.p`
  margin: 0;
  margin-top: 1vh;
  color: #626682;
  font-family: Inter;
  font-size: 1.7vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 2.125rem */

  @media (max-width: 450px) {
    // font-size: 1.5vw;
    line-height: 130%;
  }
`;

const InfoDetailTailText = styled.ul`
  font-size: 1.5vw;
  padding-left: 2.5vw;
`;

const MoreBtn = styled.button`
  background-color: #4A86FF;
  color: white;
  border: none;
  border-radius: 5px;
  width: 5vw;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
`

export default function DetailInfoComponent() {
  const [show,setShow] = useState(false);

  const handleShowMore = () => {
    setShow(!show);
  }
  return (
    <DetailInfoContainer>
      <DetailInfoBox>
        <InfoText>EDUCATION</InfoText>
        <InfoDetailText>
          한성대학교 컴퓨터공학부
          <br />
          2023.03 ~ 재학 중
        </InfoDetailText>
      </DetailInfoBox>
      <DetailInfoBox>
        <InfoText>SKILLS</InfoText>
        <InfoDetailText>
          HTMl / CSS / Javascript <br /> React.js / Next.js <br /> C / C++{" "}
          <br /> Netlify <br /> Figma / Github / Discord / Slack / Notion{" "}
        </InfoDetailText>
      </DetailInfoBox>
      <DetailInfoBox>
        <InfoText>WORK</InfoText>
        <InfoDetailText>
          現) FE 개발자 <br /> 前) 축구선수
        </InfoDetailText>
      </DetailInfoBox>
      <DetailInfoBox>
        <InfoText>ACTIVITIES</InfoText>
        <InfoDetailText>
          2024
          <hr />
          <InfoDetailTailText>
            <li>한성대학교 LIKELION 12기 FrontEnd 운영진</li>
            <li>한성대학교 컴퓨터공학과 학술 모임 회장</li>
            <li>9oormthonUNIV 2기 FrontEnd</li>
          </InfoDetailTailText>
          <MoreBtn onClick={handleShowMore}>{show ? "Hide" : "More"}</MoreBtn>
          <div style={show ? { display: "block" } : { display: "none" }}>
            2023
            <hr />
            <InfoDetailTailText>
              <li>한성대학교 LIKELION 11기 FrontEnd 트랙</li>
            </InfoDetailTailText>
          </div>
        </InfoDetailText>
      </DetailInfoBox>
    </DetailInfoContainer>
  );
}
