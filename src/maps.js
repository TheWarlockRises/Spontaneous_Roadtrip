import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import styled from 'styled-components';

import AutoComplete from './autocomplete';
import Marker from './marker';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

class MyMap extends Component {


    state = {
        mapApiLoaded: false,
        mapInstance: null,
        mapApi: null,
        geoCoder: null,
        places: [],
        center: [],
        zoom: 2,
        address: '',
        draggable: true,
        lat: null,
        lng: null,
        latitudes: [40.7484, 37.8199, 29.5518, 36.0161, 38.8977, 25.7826, 33.8121, 29.9584, 28.3772, 41.8796],
        longitudes: [-73.9857, -122.4783, -95.0981, -114.7377, -77.0365, -80.1341, -117.9190, -90.0644, -81.5707, -87.6237]
    };

    componentWillMount() {
        this.setCurrentLocation();
    }

    _onChange = ({ center, zoom }) => {
        this.setState({
            center: center,
            zoom: zoom,
        });

    }

    apiHasLoaded = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
        });

        this._generateAddress();
    };

    addPlace = (place) => {
        this.setState({
            places: [place],
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        });
        this._generateAddress()
    };

    _generateAddress() {
        const {
            mapApi
        } = this.state;

        const geocoder = new mapApi.Geocoder;

        geocoder.geocode({ 'location': { lat: this.state.lat, lng: this.state.lng } }, (results, status) => {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.setState({ address: results[0].formatted_address });
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }

        });
    }

    bucketList = [];
    bucket

    // Get Current Location Coordinates
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    center: [position.coords.latitude, position.coords.longitude],
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        }
    }

    render() {
        const {
            places, mapApiLoaded, mapInstance, mapApi,
        } = this.state;


        return (
            <Wrapper>
                {mapApiLoaded && (
                    <div>
                        <AutoComplete map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />
                    </div>
                )}
                <GoogleMapReact
                    center={this.state.center}
                    zoom={this.state.zoom}
                    draggable={this.state.draggable}
                    onChange={this._onChange}
                    onChildMouseDown={this.onMarkerInteraction}
                    onChildMouseUp={this.onMarkerInteractionMouseUp}
                    onChildMouseMove={this.onMarkerInteraction}
                    onChildClick={() => console.log('child click')}
                    onClick={this._onClick}
                    bootstrapURLKeys={{
                        key: 'AIzaSyCL7JnG11slL5p2jKQypAbU2YHevASbg_s',
                        libraries: ['places', 'geometry'],
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
                >
                    
                    <Marker
                        lat={this.state.latitudes[0]}
                        lng={this.state.longitudes[0]}
                    />
                    

                    <Marker
                        lat={this.state.latitudes[1]}
                        lng={this.state.longitudes[1]}
                    />
                    <Marker
                        lat={this.state.latitudes[2]}
                        lng={this.state.longitudes[2]}
                    />
                    <Marker
                        lat={this.state.latitudes[3]}
                        lng={this.state.longitudes[3]}
                    />
                    <Marker
                        lat={this.state.latitudes[4]}
                        lng={this.state.longitudes[4]}
                    />
                    <Marker
                        lat={this.state.latitudes[5]}
                        lng={this.state.longitudes[5]}
                    />
                    <Marker
                        lat={this.state.latitudes[6]}
                        lng={this.state.longitudes[6]}
                    />
                    <Marker
                        lat={this.state.latitudes[7]}
                        lng={this.state.longitudes[7]}
                    />
                    <Marker
                        lat={this.state.latitudes[8]}
                        lng={this.state.longitudes[8]}
                    />
                    <Marker
                        lat={this.state.latitudes[9]}
                        lng={this.state.longitudes[9]}
                    />

                    <Marker
                        text={this.state.address}
                        lat={this.state.lat}
                        lng={this.state.lng}
                    />


                </GoogleMapReact>

                <div className="info-wrapper">
                    <div className="map-details">Latitude: <span>{this.state.lat}</span>, Longitude: <span>{this.state.lng}</span></div>
                    <div className="map-details">Zoom: <span>{this.state.zoom}</span></div>
                    <div className="map-details">Address: <span>{this.state.address}</span></div>
                </div>


            </Wrapper>
        );
    }

}

export default MyMap;