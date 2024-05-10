import { useNavigate } from "react-router-dom";
import "../App.css";
import ToDoButton from "./ToDoButton";

export default function Main({list, addList, updateList, deleteList, saveContent, toggleCheck}) {
  const navigate = useNavigate();

  function completeList() {
    navigate("/storage");
  }

  return  (
    <div className="App">
      <div className="buttonBox">
        <button className="plusButton" onClick={addList}>
          Plus
        </button>
        <button className="plusButton" onClick={completeList}>
          Storage
        </button>
      </div>
      {list.map((item) => {
        return (<ToDoButton 
          key={item.id}
          item={item}
          updateContent={updateList}
          deleteList={()=>deleteList(item.id)}
          saveContent={saveContent}
          toggleCheck={() => toggleCheck(item.id)}
        />)
      })}
    </div>
  )
}