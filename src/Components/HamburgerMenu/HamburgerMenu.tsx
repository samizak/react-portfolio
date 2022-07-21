import "./HamburgerMenu.css";

export default function HambergerMenu(props: {
  isActive: any;
  setIsActive: any;
}) {
  return (
    <div
      className={"hamburger-menu" + (props.isActive ? " is-active" : "")}
      onClick={() => props.setIsActive(!props.isActive)}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"> </div>
    </div>
  );
}
