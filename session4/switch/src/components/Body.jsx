import { useContext } from "react";
import { DisplayContext } from "../context/DisplayContext";
import { UserContext } from "../context/UserContext";

// export default function Body({isDark}) {
//   return (
//     <div
//       className="body"
//       style={{
//         backgroundColor: isDark ? "black" : "violet",
//         color: isDark ? "white" : "black",
//       }}
//     >
//       <p>User님, 좋은 하루 되세여.</p>
//     </div>
//   );
// }

export default function Body() {
  const {isDark} = useContext(DisplayContext);
  const userName = useContext(UserContext);

  return (
    <div
      className="body"
      style={{
        backgroundColor: isDark ? "black" : "violet",
        color: isDark ? "white" : "black",
      }}
    >
      <p>{userName}님, 좋은 하루 되세여.</p>
    </div>
  );
}
