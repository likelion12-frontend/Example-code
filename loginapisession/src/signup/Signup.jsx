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
  margin-bottom: 20px;
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

const ErrorMessage2 = styled.p`
  color: #ff001a;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  left: 30px;
  top: 122px;
`;

const FieldButton = ({
  placeholder,
  buttonText,
  value,
  onChange,
  emailError,
  phoneNumberError,
}) => (
  <FieldContainer>
    <FieldbuttonCon>
      <Textfield
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        emailError={emailError}
      />
      <Duplibutton>{buttonText}</Duplibutton>
    </FieldbuttonCon>
    {emailError && <ErrorMessage>이메일 형식이 맞지 않습니다.</ErrorMessage>}
    {phoneNumberError && (
      <ErrorMessage>010-0000-0000 형식으로 입력해주세요.</ErrorMessage>
    )}
  </FieldContainer>
);

function Signup() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false); // 이메일 필드가 수정되었는지 추적

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [PhoneTouched, setPhoneTouched] = useState(false);

  const [isChecking, setIsChecking] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState(null);

  useEffect(() => {
    if (!email || !isEmailValid(email)) {
      // 이메일이 유효하지 않거나 비어있으면 API 호출을 하지 않음
      setEmailAvailable(null);
      return;
    }

    const timer = setTimeout(() => {
      setIsChecking(true);

      checkEmailAvailability(email).then((isAvailable) => {
        setIsChecking(false);
        setEmailAvailable(isAvailable);
      });
    }, 500); // 500ms 디바운싱 시간

    return () => clearTimeout(timer); // 클린업 함수
  }, [email]);

  async function checkEmailAvailability(email) {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/member/exists/email?email=${encodeURIComponent(
          email
        )}`,
        {
          method: 'GET',
        }
      );
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log(data.status);
      return data.available;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  // 이메일 유효성 검사
  function isEmailValid(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  // 이메일 입력 상태 관리 및 유효성 검사
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailTouched(true); // 필드가 수정되었음을 표시
    setEmailError(!isEmailValid(newEmail)); // 이메일 유효성 검사 결과 업데이트
  };

  // 전화번호 유효성 검사
  function isPhoneNumberValid(phoneNumber) {
    const regex = /^\d{3}-?\d{4}-?\d{4}$/;
    return regex.test(phoneNumber);
  }

  // 전화번호 변경 이벤트 핸들러
  const handlePhoneNumberChange = (event) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);
    setPhoneTouched(true);
    setPhoneNumberError(!isPhoneNumberValid(newPhoneNumber));
  };

  return (
    <>
      <PContainer>
        <MainP>회원가입</MainP>
      </PContainer>
      <MainLine />
      <AllContainer>
        <PWfield
          placeholder="이메일 ex) abc123@naver.com"
          value={email}
          onChange={handleEmailChange}
          style={{
            borderColor: emailTouched
              ? emailError || emailAvailable === false
                ? '#FF001A'
                : '#0028da'
              : '#7a7485',
          }}
        />
        {emailTouched && emailError && (
          <ErrorMessage>이메일 형식이 맞지 않습니다.</ErrorMessage>
        )}
        {emailTouched && !emailError && emailAvailable === false && (
          <ErrorMessage>이미 사용 중인 이메일입니다.</ErrorMessage>
        )}
        {emailTouched && !emailError && emailAvailable && (
          <ErrorMessage style={{ color: '#0028da' }}>
            사용 가능한 이메일입니다.
          </ErrorMessage>
        )}
        <PWfield
          placeholder="전화번호 ex) 01000000000"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          style={{
            borderColor: PhoneTouched
              ? phoneNumberError
                ? '#FF001A'
                : '#0028da'
              : '#7a7485',
          }}
        />
        {PhoneTouched && phoneNumberError && (
          <ErrorMessage2 style={{ color: '#FF001A' }}>
            전화번호 형식이 맞지 않습니다.
          </ErrorMessage2>
        )}
        {PhoneTouched && !phoneNumberError && phoneNumber && (
          <ErrorMessage2 style={{ color: '#0028da' }}>
            사용 가능한 전화번호입니다.
          </ErrorMessage2>
        )}
        <PWfield placeholder="아이디" />
        <PWfield placeholder="비밀번호" />
        <PWfield placeholder="비밀번호 확인" />
        <Register>회원가입</Register>
      </AllContainer>
    </>
  );
}

export default Signup;
