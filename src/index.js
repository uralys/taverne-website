import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import App from './app';

// -----------------------------------------------------------------------------

const random1To = n => Math.floor(Math.random() * n) + 1;
const randomColor = () => `#${random1To(9)}${random1To(9)}${random1To(9)}`;

// -----------------------------------------------------------------------------

const nbBuildings = 10;
const nbLevelsPerBuilding = 20;
const nbConnections = 10;
const nbDevicesPerConnection = 20;

const rangeBuildings = [...Array(nbBuildings).keys()];
const rangeLevels = [...Array(nbLevelsPerBuilding).keys()];
const rangeConnections = [...Array(nbConnections).keys()];
const rangeDevices = [...Array(nbDevicesPerConnection).keys()];

// -----------------------------------------------------------------------------

const CONFIG = {
  connections: rangeConnections.map(c => ({
    id: `connection-${c}`,
    color: randomColor(),
    devices: rangeDevices.map(d => ({
      id: `device-${c}-${d}`,
      color: randomColor()
    }))
  })),
  buildings: rangeBuildings.map(b => ({
    id: `building-${b}`,
    color: randomColor(),
    levels: rangeLevels.map(l => ({
      id: `level-${b}-${l}`,
      color: randomColor()
    }))
  }))
};

console.log(CONFIG);

// -----------------------------------------------------------------------------

const createApp = (options = {}) => {
  if (!options.container) {
    console.error('[App] Requires a container.');
  }

  const container = document.getElementById(options.container);
  render(<App />, container);
};

// -----------------------------------------------------------------------------

if (window && !window.createApp) {
  window.createApp = createApp;
}

export default createApp;
