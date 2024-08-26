type Props={
    titulo:string
}
const Header = ({titulo}: Props) => {
  return (
    <div className="header">
      <h1>{titulo}</h1>
    </div>
  )
}

export default Header
