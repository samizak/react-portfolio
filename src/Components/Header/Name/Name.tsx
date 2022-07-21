import "./Name.css";

export default function Name() {
  return (
    <>
      <a className="logo" href="#">
        <div>{"{"}</div>
        <div className="logo-emphasize logo-space">S</div>
        <div className="logo-normal">
          <div className="rest-inner">{"ami"}</div>
        </div>
        <div className="logo-emphasize logo-space">Z</div>
        <div className="logo-normal">
          <div className="rest-inner">{"akir Ahmed"}</div>
        </div>
        <div className="logo-space">{"}"}</div>
      </a>
    </>
  );
}
