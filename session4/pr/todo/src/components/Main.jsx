import "../App.css";
import ToDoButton from "./ToDoButton";

export default function Main({list, addList, updateList, deleteList}) {
  return  (
    <div className="App">
      <div className="buttonBox">
        <button className="plusButton" onClick={addList}>
          Plus
        </button>
        <button className="plusButton">
          Storage
        </button>
      </div>
      {list.map((item) => {
        return (<ToDoButton 
          key={item.id}
          item={item}
          updateContent={updateList}
          deleteList={()=>deleteList(item.id)}
        />)
      })}
    </div>
  )
}