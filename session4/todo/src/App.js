import Main from "./components/Main.jsx";
import Storage from "./components/Storage.jsx";
import { Route, Routes} from "react-router-dom";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]); // 목록 배열 생성
  const [storgaeList, setStorageList] = useState([]);

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

  const saveContent = (itemId) => {
    const checkList = list.find(item => item.id === itemId);
    if(checkList) {
      setStorageList((prev) => [...prev, checkList]);
      deleteList(itemId);
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Main updateList={updateList} addList={addList} list={list} deleteList={deleteList} saveContent={saveContent} />}></Route>
      <Route path="/Storage" element={<Storage list={storgaeList} />} />
    </Routes>
  );
}

export default App;
