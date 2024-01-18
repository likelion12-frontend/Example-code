import "./Header.css"

export default function Header(props) {
  return (
    <header>
      <p className="headerTitle">{props.title}</p>
      <hr />
    </header>
  )
}