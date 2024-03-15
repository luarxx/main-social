import "./cardheader.css";
import Avatar from "../../assets/images/avatar-jessica.jpeg";

export function CardHeader() {
    return (
        <div className="cardheader">
            <img src={ Avatar } alt="Avatar" /> 
        </div>
    )
}