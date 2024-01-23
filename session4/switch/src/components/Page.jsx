import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

// Page 컴포넌트는 isDark, setIsDark 필요하지 않음. 단지 전달해주기 위한 용도.

// export default function Page({isDark, setIsDark}) {
//   return (
//     <div className="page">
//       <Header isDark={isDark} />
//       <Body isDark={isDark} />
//       <Footer isDark={isDark} setIsDark={setIsDark} /> 
//     </div>
//   )
// }

export default function Page() {
  return (
    <div className="page">
      <Header />
      <Body />
      <Footer /> 
    </div>
  )
}