import styled from "styled-components";
import "./App.css";
import ToDoButton from "./components/ToDoButton.jsx";
import { useState } from "react";

function App() {
  // let Btn = styled.button`
  //   margin-top: 2rem;
  //   border: none;
  //   width: 5rem;
  //   background: ${(props) => props.bg};
  //   cursor: pointer;
  // `;
  const [list, setList] = useState([]);

  function updateList(itemId, newContent) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, content: newContent } : item
      )
    );
  }

  function addList() {
    const newItem = {
      id: Date.now(),
      content: "",
    };
    setList((prevList) => [...prevList, newItem]);
  }

  function deleteList(itemId) {
    setList((prevList) => {
      return prevList.filter((item) => item.id !== itemId);
    });
  }

  return (
    <div className="App">
      {/* <div className="buttonBox">
        <Btn bg="#FF9F9F">Add</Btn>
        <Btn bg="aliceblue">Save</Btn>
      </div> */}
      <button className="plusButton" onClick={addList}>
        Plus
      </button>
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
