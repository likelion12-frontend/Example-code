import { useState, useRef } from "react";
import Modal from "./Modal.jsx";

export default function Player() {
  const playerName = useRef();
  const modal = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    const name = playerName.current.value;
    playerName.current.value = "";

    if(name.trim() === '') {
      modal.current.open();
      return;
    }
    setEnteredPlayerName(name);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a vaild value for every input field.</p>
      </Modal>
      <section id="player">
        <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2> {/*왼쪽 피연산자가 null 이거나 undefined 이면 오른쪽 피연산자 반환*/}
        <p>
          <input ref={playerName} type="text" />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
    </>
  );
}