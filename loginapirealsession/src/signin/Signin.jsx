import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Main, { PContainer } from '../main/main';
import { MainP } from '../main/main';
import { MainLine } from '../main/main';
import Bugi from '../images/Bugi.png';
import { ImgContainer } from '../main/main';
import { useEffect } from 'react';

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  font-size: 15px;
  font-weight: 600;
  margin-top: 8px;
`;

function Signin() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/api/member/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          password: password,
        }),
      });

      console.log(`Status: ${response.status}`);

      if (response.status === 200) {
        alert('로그인이 완료되었습니다.');
        sessionStorage.setItem('userId', userId);
        navigate('/LoginMain');
      } else {
        throw new Error('회원가입에 실패했습니다.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('로그인에 실패하였습니다.');
    }
  };

  return (
    <AllContainer>
      <PContainer>
        <MainP>로그인</MainP>
      </PContainer>
      <MainLine />
      <ImgContainer>
        <img
          src={Bugi}
          alt="부기"
          style={{ width: '153px', height: '166px' }}
        />
      </ImgContainer>
      <PWfield
        placeholder="아이디"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <PWfield
        placeholder="비밀번호"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Register onClick={handleLogin}>로그인</Register>
    </AllContainer>
  );
}

export default Signin;
