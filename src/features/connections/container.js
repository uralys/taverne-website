import React, {useEffect, useState} from 'react';
import store from './store';
import ConnectionsComponent from './component';

// -----------------------------------------------------------------------------

const ConnectionsContainer = () => {
  const [props, setProps] = useState();

  useEffect(() => {
    console.log('connection container mounted: loading connections');
    const connections = CONFIG.connections.reduce((acc, _connection) => {
      const {devices, ...content} = _connection;
      return {
        ...acc,
        [_connection.id]: content
      };
    }, {});

    setProps({connections});

    console.log('connection container subscribes to store events');
    const mapStateToProps = (state, action) => {
      setProps(state);
    };

    store.subscribe(mapStateToProps);
  }, []);

  console.log('✨ rendering ConnectionsContainer', props);
  return <ConnectionsComponent {...props} />;
};

export default ConnectionsContainer;
