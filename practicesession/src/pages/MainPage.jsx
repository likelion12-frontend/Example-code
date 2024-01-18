import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import styled from "styled-components";
import logo from "../images/hsuLogo.png";

let Btn = styled.button`
  width: 22rem;
  height: 3.5625rem;
  flex-shrink: 0;
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  border: 1px solid black;
  border-radius: 0.625rem;
  cursor: pointer;
  text-align: center;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default function MainPage() {
  let navigate = useNavigate();

  return (
    <>
      <Header title="회원가입 & 로그인 연습 홈페이지" />
      <img src={logo} alt="img" className="logoImg" />
      <div className="btnBox">
        <Btn bg="white">로그인</Btn>
        <Btn bg="blue" onClick={() => navigate("/회원가입")}>회원가입</Btn>
      </div>
    </>
  );
}
