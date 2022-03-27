import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  const [favorite, setFavorite] = useState(post.favorite)
  const [isFavorite, setIsFavorite] = useState(false)

  const favHandler =()=>{
    setFavorite(isFavorite ? favorite-1 : favorite+1)
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <PersonIcon />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpIcon className="likeIcon" onClick={likeHandler}/>
            <span className="postLikeCounter">{like} people like it</span>
            &nbsp;
            &nbsp;
            <FavoriteIcon className="likeIcon" onClick={favHandler}/>
            <span className="postLikeCounter">{favorite} people favorited it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}