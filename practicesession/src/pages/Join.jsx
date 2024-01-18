import Header from "../components/Header";
import "./Join.css";

const Field = (props) => <input type={props.type} placeholder={props.placeholder} className={props.class}></input>;
const ConfirmBtn = () => <button className="confirmBtn">중복 확인</button>;

export default function Join() {
  return (
    <>
      <Header title="회원가입" />
      <div className="btnContainer">
        <div className="btnContent">
          <Field type="email" placeholder="이메일 ex)abc123@naver.com" class="idField"/>
          <ConfirmBtn></ConfirmBtn>
        </div>
        <div className="btnContent">
          <Field type="tel" placeholder="전화번호 ex) 010-0000-0000" class="idField"/>
          <ConfirmBtn></ConfirmBtn>
        </div>
        <div className="btnContent">
          <Field type="text" placeholder="아이디" class="idField"/>
          <ConfirmBtn></ConfirmBtn>
        </div>
          <Field type="password" placeholder="비밀번호" class="pwField" />
          <Field type="password" placeholder="비밀번호 확인" class="pwField" />
          <button className="joinBtn">회원가입</button>
      </div>
    </>
  )
}