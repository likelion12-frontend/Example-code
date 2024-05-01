import styled from "styled-components";
import "../App.css";
import ToDoButton from "./ToDoButton.jsx";
import { useState } from "react";

function App() {
  // let Btn = styled.button`
  //   margin-top: 2rem;
  //   border: none;
  //   width: 5rem;
  //   background: ${(props) => props.bg};
  //   cursor: pointer;
  // `;
  const [list, setList] = useState([]); // 목록 배열 생성

  // 목록 입력 함수 => 
  function updateList(itemId, newContent) { 
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, content: newContent } : item // map 함수를 통해 id 값이 같은 곳에 새로운 할 일 내용 초기화 
      )
    );
  }

  // 목록 추가
  function addList() {
    const newItem = { // 목록 객체 생성
      id: Date.now(), // 고유한 id 값
      content: "", // 내용
    };
    setList((prevList) => [...prevList, newItem]); // 목록 추가
  }

  // 삭제 함수
  function deleteList(itemId) {
    setList((prevList) => {
      return prevList.filter((item) => item.id !== itemId); // 삭제하고 싶은 id 값을 입력 받아서 해당 id 값이 아닌 요소들을 리턴
    });
  }

  // 보관함 이동 함수 
  function completeList() {

  }

  return (
    <div className="App">
      {/* <div className="buttonBox">
        <Btn bg="#FF9F9F">Add</Btn>
        <Btn bg="aliceblue">Save</Btn>
      </div> */}
      <div className="buttonBox">
        <button className="plusButton" onClick={addList}>
          Plus
        </button>
        <button className="plusButton" onClick={addList}>
          보관함
        </button>
      </div>
      {list.map((item) => {
        return (
          <ToDoButton
            key={item.id}
            item={item}
            updateContent={updateList}
            deleteList={() => deleteList(item.id)}
          />
        );
      })}
    </div>
  );
}

export default App;
