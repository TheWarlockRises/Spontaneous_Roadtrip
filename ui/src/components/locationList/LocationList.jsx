import "./locationList.css"
import LocationPost from '../locationPost/LocationPost'
import GoogleMap from "../../components/googleMap/maps";
import { Posts } from "../../dummyData";

export default function LocationList() {
    return (
        <div className="list">
            <div className="listWrapper">
                <div className='locationmap'>
                    <GoogleMap />
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