import React, { Component } from 'react';
import './App.css';
import ReactMapGL from 'react-map-gl';
import {StaticMap} from 'react-map-gl';
import dotenv from 'dotenv';
import DeckGL from 'deck.gl';
import {TripsLayer} from '@deck.gl/experimental-layers';
dotenv.config();

const DATA_URL = 'https://raw.githubusercontent.com/luccab/rawJSON/master/myjsonfile4.json';

const LIGHT_SETTINGS = {
  lightsPosition: [-74.05, 40.7, 8000, -73.5, 41, 5000],
  ambientRatio: 0.05,
  diffuseRatio: 0.6,
  specularRatio: 0.8,
  lightsStrength: [2.0, 0.0, 0.0, 0.0],
  numberOfLights: 2
};

export const INITIAL_VIEW_STATE = {
  longitude: -122.47,
  latitude: 37.72,
  zoom: 10,
  maxZoom: 16,
  pitch: 27,
  bearing: 0
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this._animate();
  }

  componentWillUnmount() {
    if (this._animationFrame) {
      window.cancelAnimationFrame(this._animationFrame);
    }
  }

  _animate() {
    const {
      loopLength = 30, // unit corresponds to the timestamp in source data
      animationSpeed = 0.5 // unit time per second
    } = this.props;
    const timestamp = Date.now() / 300;
    const loopTime = loopLength / animationSpeed;

    this.setState({
      time: ((timestamp % loopTime) / loopTime) * loopLength
    });
    this._animationFrame = window.requestAnimationFrame(this._animate.bind(this));
  }

  _renderLayers() {
    const {trips = DATA_URL, trailLength = 180} = this.props;
    console.log(trips);
    return [
      new TripsLayer({
        id: 'trips',
        data: trips,
        getPath: d => d.segments,
        getColor: [0, 255, 0],
        opacity: 0.3,
        strokeWidth: 2,
        trailLength,
        currentTime: this.state.time
      })
    ];
  }

  render() {
    const {viewState, controller = true, baseMap = true} = this.props;

    return (
      <DeckGL
        layers={this._renderLayers()}
        initialViewState={INITIAL_VIEW_STATE}
        viewState={viewState}
        controller={controller}
      >
        {baseMap && (
          <StaticMap
            reuseMaps
            mapStyle="mapbox://styles/mapbox/dark-v10"
            preventStyleDiffing={true}
            mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX}
          />
        )}
      </DeckGL>
    );
  }
}

export default App;
