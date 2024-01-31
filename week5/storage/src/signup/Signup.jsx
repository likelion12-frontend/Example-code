import React from "react";
import { MainLine } from "../main/Main";
import { MainP } from "../main/Main";
import { PContainer } from "../main/Main";
import styled from "styled-components";
import { useState } from "react";



const AllContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:34px;
`
const Textfield = styled.input`
    width: 244px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #7A7485;
    padding:0 14px;
    color: #1D1927;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
&:focus {
    outline: none;
    border-color: ${props => (props.emailError ? '#FF001A' : '#7A7485')};
  }
`

const Duplibutton = styled.button`
    width: 96px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #0028DA;    
    color: #FFF;
text-align: center;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const FieldbuttonCon = styled.div`
    display:flex;
    flex-direction: row;
    gap:12px;
   
`

const FieldContainer = styled.div`
  height:66px;
`;

const PWfield  = styled.input`
    width: 352px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #7A7485;
    margin-bottom:20px;
    color: #B4B4B4;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding: 0 14px;
`

const Register = styled.button`
    width: 352px;
height: 48px;
flex-shrink: 0;
border-radius: 10px;
background: #0028DA;
color: #FFF;
text-align: center;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;

`

const ErrorMessage = styled.p`
    color: #FF001A;
font-family: Inter;
font-size: 8px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top:5px;
padding: 0 10px;
`
const FieldButton = ({ placeholder, buttonText, value, onChange, emailError, phoneNumberError }) => (
    <FieldContainer>
    <FieldbuttonCon>
      <Textfield 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange}
      emailError={emailError}/>
      <Duplibutton>{buttonText}</Duplibutton>
    </FieldbuttonCon>
    {emailError && <ErrorMessage>이메일 형식이 맞지 않습니다.</ErrorMessage> }
    {phoneNumberError && <ErrorMessage>010-0000-0000 형식으로 입력해주세요.</ErrorMessage>}
    </FieldContainer>
  );
  

function Signup(){

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [phoneNumber, setPhoneNumber]=useState('');
  const [phoneNumberError, setPhoneNumberError]= useState(false);

  function isEmailValid(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  function isPhoneNumberValid(phoneNumber) {
    const regex = /^\d{3}-\d{4}-\d{4}$/;
    return regex.test(phoneNumber);
  }

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailError(!isEmailValid(newEmail));
  };

  const handlePhoneNumberChange = (event) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);
    setPhoneNumberError(!isPhoneNumberValid(newPhoneNumber));
  }

    return (
        <>
        <PContainer>
        <MainP>회원가입</MainP>
        </PContainer>
        <MainLine/>
        <AllContainer>
        <FieldButton placeholder="이메일 ex) abc123@naver.com" 
        buttonText="중복 확인"
        value={email} 
        onChange={handleEmailChange}
        emailError={emailError}/>
        <FieldButton placeholder="전화번호 ex) 010-0000-0000" 
        buttonText="중복 확인" 
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        phoneNumberError={phoneNumberError}/>
        <FieldButton placeholder="아이디" buttonText="중복 확인" />
        <PWfield placeholder="비밀번호"/>
        <PWfield placeholder="비밀번호 확인"/>
        <Register>회원가입</Register>
        </AllContainer>
        </>
    )
}

export default Signup;