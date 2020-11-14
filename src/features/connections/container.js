import React, {useState} from 'react';
import store from './store';
import ConnectionsComponent from './component';

const defaultProps = {connections: []};

const ConnectionsContainer = () => {
  const [props, setProps] = useState(defaultProps);

  console.log(props);
  return <ConnectionsComponent {...props} />;
};

export default ConnectionsContainer;
