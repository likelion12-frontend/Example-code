import React from 'react';
import { MainLine } from '../main/main';
import { MainP } from '../main/main';
import { PContainer } from '../main/main';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Textfield = styled.input`
  width: 244px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #7a7485;
  padding: 0 14px;
  color: #1d1927;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:focus {
    outline: none;
    border-color: ${(props) => (props.emailError ? '#FF001A' : '#7A7485')};
  }
`;

const Duplibutton = styled.button`
  width: 96px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #0028da;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FieldbuttonCon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const FieldContainer = styled.div`
  height: 66px;
`;

const PWfield = styled.input`
  color: #1d1927;
  width: 352px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #7a7485;

  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 0 14px;

  ::placeholder {
    color: #b4b4b4;
  }
`;

const Register = styled.button`
  width: 352px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #0028da;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ErrorMessage = styled.p`
  color: #ff001a;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  left: 30px;
  top: 54px;
`;

const FieldWithMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  position: relative; // 필드를 포지셔닝 컨텍스트로 설정
  width: 352px; // 필드의 너비 지정
  margin-bottom: 20px; // 각 필드 간의 간격 조정
`;

const Message = styled.p`
  color: #ff001a;
  font-family: Inter;
  font-size: 10px;
  position: absolute;
  bottom: -15px; // 메시지를 필드 아래에 위치
  left: 0;
  right: 0;
  margin-left: 9px;
  text-align: left;
  visibility: visible;
  transition: visibility 0.2s, opacity 0.2s ease-in-out;
  opacity: 1; // 메시지가 보이도록 설정
`;

function Signup() {
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // 페이지 이동을 위한 navigate 함수
  const navigate = useNavigate();

  // 회원가입을 처리하는 비동기 함수를 선언합니다.
  const handleRegister = async () => {
    try {
      // 서버에 회원가입 정보를 보내는 HTTP POST 요청을 보냅니다.

      const response = await fetch(
        'http://52.78.139.114:8081/api/member/sign-up',
        {
          method: 'POST', // HTTP 메소드를 POST로 설정하여 서버에 데이터를 전송합니다.
          headers: {
            'Content-Type': 'application/json', // 요청 본문의 형식이 JSON임을 서버에 알립니다.
          },
          body: JSON.stringify({
            email: email, // 사용자의 이메일
            userId: userId, // 사용자의 아이디
            phone: phone, // 사용자의 전화번호
            password: password, // 사용자의 비밀번호
          }), // JavaScript 객체를 JSON 문자열로 변환하여 서버에 전송합니다.
        }
      );

      // 요청에 대한 서버의 응답을 로깅합니다.
      console.log(`Status: ${response.status}`); // 서버로부터 받은 응답의 HTTP 상태 코드를 콘솔에 출력합니다.

      // 서버 응답이 HTTP 201 상태 코드인 경우 (생성됨), 회원가입이 성공적으로 완료되었음을 사용자에게 알립니다.
      if (response.status === 201) {
        alert('회원가입이 완료되었습니다.'); // 사용자에게 알림을 띄웁니다.
        navigate('/'); // 메인 페이지로 이동합니다.
      } else {
        // 서버 응답이 201이 아닌 경우, 회원가입에 실패했다는 에러를 발생시킵니다.
        throw new Error('회원가입에 실패했습니다.');
      }
    } catch (error) {
      // 네트워크 오류 또는 서버 응답 처리 중 에러가 발생한 경우, 오류 정보를 콘솔에 로깅하고 사용자에게 알립니다.
      console.error('Registration error:', error); // 콘솔에 오류 정보를 출력합니다.
      alert('회원가입에 실패하였습니다.'); // 사용자에게 오류 알림을 띄웁니다.
    }
  };

  return (
    <>
      <AllContainer>
        <PContainer>
          <MainP>회원가입</MainP>
        </PContainer>
        <MainLine />
        <FieldWithMessage>
          <PWfield
            placeholder="이메일 ex) abc123@naver.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Message></Message>
        </FieldWithMessage>

        <FieldWithMessage>
          <PWfield
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Message></Message>
        </FieldWithMessage>

        <FieldWithMessage>
          <PWfield
            placeholder="전화번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Message></Message>
        </FieldWithMessage>

        <FieldWithMessage>
          <PWfield
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Message></Message>
        </FieldWithMessage>

        <FieldWithMessage>
          <PWfield
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Message></Message>
        </FieldWithMessage>

        <Register onClick={handleRegister}>회원가입</Register>
      </AllContainer>
    </>
  );
}

export default Signup;
