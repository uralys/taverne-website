// -----------------------------------------------------------------------------

const random1To = n => Math.floor(Math.random() * n) + 1;
const randomColor = () => `#${random1To(9)}${random1To(9)}${random1To(9)}`;

// -----------------------------------------------------------------------------

const nbBuildings = 10;
const nbLevelsPerBuilding = 20;
const nbConnections = 5;
const nbDevicesPerConnection = 3;

const rangeBuildings = [...Array(nbBuildings).keys()];
const rangeLevels = [...Array(nbLevelsPerBuilding).keys()];
const rangeConnections = [...Array(nbConnections).keys()];
const rangeDevices = [...Array(nbDevicesPerConnection).keys()];

// -----------------------------------------------------------------------------

const generateConfig = () => {
  const config = {
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

  console.log('generated', config);
  return config;
};

// -----------------------------------------------------------------------------

export default generateConfig;
