import React, {useContext, useEffect, useState} from 'react';
import store from './store';
import ConnectionsComponent from './component';
import GlobalContext from '../../global-context';

import {SELECT_CONNECTION} from '../../actions';

// -----------------------------------------------------------------------------

const ConnectionsContainer = () => {
  const [props, setProps] = useState({connections: {}});

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

  // -------------------------------------------------
  console.log('✨ rendering ConnectionsContainer', props);

  const {dispatch} = useContext(GlobalContext);
  const {connections} = props;

  const selectConnection = id => () => {
    dispatch({
      type: SELECT_CONNECTION,
      connectionId: id
    });
  };

  return (
    <ConnectionsComponent
      selectConnection={selectConnection}
      connections={connections}
    />
  );
};

export default ConnectionsContainer;
