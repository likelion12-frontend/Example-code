import { useContext } from "react";
import { DisplayContext } from "../context/DisplayContext";

// export default function Footer({isDark, setIsDark}) {
//   const toggleDisplay = () => {
//     setIsDark(!isDark);
//   }

//   return (
//     <footer
//       className="footer"
//       style={{
//         backgroundColor: isDark ? "black" : "violet",
//       }}
//     >
//       <button className="displayBtn" onClick={toggleDisplay}>Switch</button>
//     </footer>
//   );
// }

export default function Footer() {
  const {isDark, setIsDark} = useContext(DisplayContext);

  const toggleDisplay = () => {
    setIsDark(!isDark);
  }

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "violet",
      }}
    >
      <button className="displayBtn" onClick={toggleDisplay}>Switch</button>
    </footer>
  );
}
