import "./locationList.css"
import LocationPost from '../locationPost/LocationPost'
import { Posts } from "../../dummyData";

export default function LocationList() {
    return (
        <div className="list">
            <div className="listWrapper">
                <div className='map'>
                    <p>Map will go here</p>
                </div>
                <div className="locations">
                    {Posts.map((p) =>(
                        <LocationPost key={p.id} post={p} />
                    ))
                    }
                </div>
            </div>
        </div>
    );
}