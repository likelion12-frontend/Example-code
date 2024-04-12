import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";


export default function Page() {
  return (
    <div className="page">
      <Header/>
      <Body />
      <Footer />
    </div>
  )
}