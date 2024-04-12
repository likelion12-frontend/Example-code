import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { DisplayContext } from "../context/DisplayContext";

export default function Body() {
  const {isDark} = useContext(DisplayContext);
  const useName = useContext(UserContext);
  return (
    <div className="body" style={{backgroundColor: isDark ? "black" : "violet", color: isDark ? "white" : "black"}}>
      <p>{useName}님, 좋은 하루 되세여.</p>
    </div>
  );
}