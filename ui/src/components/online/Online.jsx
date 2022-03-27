import "./online.css";

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
            <span className="rightbarUsername">{user.username}</span>
        </li>
    );
}