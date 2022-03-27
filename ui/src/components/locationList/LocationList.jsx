import "./locationList.css"
import LocationPost from '../locationPost/LocationPost'
import GoogleMap from "../../components/googleMap/maps";
import { Locations } from "../../dummyData";

export default function LocationList() {
    return (
        <div className="list">
            <div className="listWrapper">
                <div className='locationmap'>
                    <GoogleMap />
                </div>
                <div className="locations">
                    {Locations.map((p) =>(
                        <LocationPost Location={p} />
                    ))
                    }
                </div>
            </div>
        </div>
    );
}