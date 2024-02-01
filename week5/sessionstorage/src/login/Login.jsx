import { useState } from "react";

function Login() {

    let [loginId, setLoginId] = useState("");
    let [loginPassword, setLoginPassword] = useState("");
    let [savedLoginId, setSavedLoginId] = useState("");
    let [savedLoginPassword, setSavedLoginPassword] = useState("");

    let sessionStorage = window.sessionStorage;
    //let localStorage = window.localStorage;

    return (
        <>
            <div>
                ID : <input type="text" size={20} onChange={ (e)=>{
                    setLoginId(e.target.value)
                } } />
            </div>
            <div>
                PW : <input type="password" size={20} onChange={ (e)=>{
                    setLoginPassword(e.target.value)
                } } />
            </div>

            <div>
                <button onClick={ ()=>{ 
                    sessionStorage.setItem("loginId", loginId);
                    sessionStorage.setItem("loginPassword", loginPassword);
                    //localStorage.setItem("loginId", loginId);
                    //localStorage.setItem("loginPassword",loginPassword);

                    setSavedLoginId(sessionStorage.getItem("loginId"));
                    setSavedLoginPassword(sessionStorage.getItem("loginPassword"));
                    //setSavedLoginId(localStorage.getItem("loginId"));
                    //setSavedLoginPassword(localStorage.getItem("loginPassword"));
                } }>Login</button>

                <button onClick={ ()=>{
                    sessionStorage.clear();
                    setSavedLoginId(sessionStorage.getItem("loginId"));
                    setSavedLoginPassword(sessionStorage.getItem("loginPassword"));

                    // localStorage.clear();
                    // setSavedLoginId(localStorage.getItem("loginId"));
                    // setSavedLoginPassword(localStorage.getItem("loginPassword"));
                } }>Logout</button>

                <button onClick={ ()=>{
                    sessionStorage.removeItem("loginId");
                    setSavedLoginId(sessionStorage.getItem("loginId"));
                    // localStorage.removeItem("loginId");
                    // setSavedLoginId(localStorage.getItem("loginId"));
                } }>loginId 삭제</button>

            </div>

            <div>
                sessionStorage에 저장된 loginId는 {savedLoginId} 이고 loginPassword는 {savedLoginPassword} 입니다. 
                {/* localStorage에 저장된 loginId는 {savedLoginId} 이고 loginPassword는 {savedLoginPassword} 입니다. */}
            </div>
            <div>
                { JSON.stringify(sessionStorage) }
                {/* { JSON.stringify(localStorage) } */}
            </div>

        </>
    )
}


export default Login;