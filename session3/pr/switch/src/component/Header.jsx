import { useContext } from "react";
import { DisplayContext } from "../context/DisplayContext";

export default function Header() {
  const {isDark} = useContext(DisplayContext);
  return (
    <header className="header" style={{backgroundColor: isDark ? "black" : "violet", color: isDark ? "white" : "black"}}>
      <h1>useContext 사용법</h1>
    </header>
  );
}