import React from 'react';
import { MainLine } from '../main/main';
import { MainP } from '../main/main';
import { PContainer } from '../main/main';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 34px;
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
`;

const Message = styled.p`
  color: #ff001a;
  font-family: Inter;
  font-size: 12px;
  margin: 5px 10px;
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease;
`;

function Signup() {
  const [email, setEmail] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);
  const [emailMessage, setEmailMessage] = useState('');
  const messageOpacity = email && emailMessage ? 1 : 0;

  const [userId, setUserId] = useState('');
  const [userIdStatus, setUserIdStatus] = useState(null);
  const [userIdMessage, setUserIdMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailStatus(null); // 이메일 입력이 변경되면 상태 코드 초기화
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
    setUserIdStatus(null); // userId 입력이 변경되면 상태 코드 초기화
  };

  useEffect(() => {
    if (!email) {
      setEmailStatus(null);
      setEmailMessage('');
      return;
    }

    const timer = setTimeout(() => {
      setIsChecking(true);

      checkEmailAvailability(email).then((status) => {
        setIsChecking(false);
        setEmailStatus(status);

        switch (status) {
          case 200:
            setEmailMessage('사용 가능한 이메일입니다.');
            break;
          case 400:
            setEmailMessage('이메일 형식을 맞춰주세요.');
            break;
          case 409:
            setEmailMessage('이미 사용 중인 이메일입니다.');
            break;
          default:
            setEmailMessage('');
        }
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [email]);

  useEffect(() => {
    if (!userId) {
      setUserIdStatus(null);
      setUserIdMessage('');
      return;
    }

    const timer = setTimeout(() => {
      checkUserIdAvailability(userId).then((status) => {
        setUserIdStatus(status);

        switch (status) {
          case 200:
            setUserIdMessage('사용 가능한 아이디입니다.');
            break;
          case 409:
            setUserIdMessage('이미 사용중인 아이디입니다.');
            break;
          default:
            setUserIdMessage('');
        }
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [userId]);

  async function checkEmailAvailability(email) {
    //이메일 통신코드
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/member/exists/email?email=${encodeURIComponent(
          email
        )}`,
        { method: 'GET' }
      );
      if (response.status === 400) {
        return 400;
      }
      if (!response.ok && response.status !== 409) {
        throw new Error('Network response was not ok');
      }
      return response.status;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return null;
    }
  }

  async function checkUserIdAvailability(userId) {
    //아이디 통신코드
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/member/exists/userId?userId=${encodeURIComponent(
          userId
        )}`,
        { method: 'GET' }
      );
      if (response.status === 400) {
        return 400;
      }
      if (!response.ok && response.status !== 409) {
        throw new Error('Network response was not ok');
      }
      console.log(response.status);
      return response.status; // 상태 코드 반환
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return null;
    }
  }
  //이메일필드의 테두리
  const emailBorderColor =
    emailStatus === 200
      ? '#0028da'
      : emailStatus === 400 || emailStatus === 409
      ? '#FF001A'
      : '#7a7485';

  // 아이디 필드의 테두리 색상 계산
  const userIdBorderColor =
    userIdStatus === 200
      ? '#0028da'
      : userIdStatus === 409
      ? '#FF001A'
      : '#7a7485';

  return (
    <>
      <AllContainer>
        <FieldWithMessage>
          <PWfield
            placeholder="이메일 ex) abc123@naver.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailBorderColor }}
          />
          <Message
            style={{ color: emailStatus === 200 ? '#0028da' : '#FF001A' }}
          >
            {emailMessage}
          </Message>
        </FieldWithMessage>
        <FieldWithMessage>
          <PWfield
            placeholder="아이디"
            value={userId}
            onChange={handleUserIdChange}
            style={{ borderColor: userIdBorderColor }}
          />
          <Message
            style={{ color: userIdStatus === 200 ? '#0028da' : '#FF001A' }}
          >
            {userIdMessage}
          </Message>
        </FieldWithMessage>
        <PWfield placeholder="비밀번호" />
        <PWfield placeholder="비밀번호 확인" />
        <Register>회원가입</Register>
      </AllContainer>
    </>
  );
}

export default Signup;
