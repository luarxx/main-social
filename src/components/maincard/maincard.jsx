import "./maincard.css"

export function MainCard(props) {
  return (
    <div className="maincard">
      {props.children}
    </div>
  );
}