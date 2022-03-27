import "./friends.css"
import FaceIcon from '@mui/icons-material/Face';

export default function Friend({user}) {
    return (
        <li className="sidebarFriend">
            <FaceIcon className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    );
}