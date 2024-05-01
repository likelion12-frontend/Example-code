import "../App.css";
import ToDoButton from "./ToDoButton.jsx";

import {useNavigate} from "react-router-dom";

function Main({list, addList, updateList, deleteList, saveContent}) {
  // let Btn = styled.button`
  //   margin-top: 2rem;
  //   border: none;
  //   width: 5rem;
  //   background: ${(props) => props.bg};
  //   cursor: pointer;
  // `;
  const navigate = useNavigate();

  // 보관함 이동 함수 
  function completeList() {
    navigate('/Storage');
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
        <button className="plusButton" onClick={completeList}>
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
            saveContent={saveContent}
          />
        );
      })}
    </div>
  );
}

export default Main;
