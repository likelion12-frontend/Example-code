import styled from "styled-components";
import StorageContent from "./StorageContent";
import { useNavigate } from "react-router-dom";

const StorgaeTitle = styled.p `
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`

const MainTitle = styled.p `
  font-size: 2rem;
  font-weight: 700;
`

export default function Storage({list}) {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div style={{display: "flex", gap: "2rem"}}>
        <StorgaeTitle>보관함</StorgaeTitle>
        <MainTitle onClick={() => navigate("/")}>홈</MainTitle>
      </div>
      {list.map((item, index) => {
        return <StorageContent key={index} title={item.content} />
      })}
    </div>
  )
}