import React, {useContext, useLayoutEffect, useState} from 'react';
import store from './store';
import ConnectionsComponent from './component';
import GlobalContext from '../../global-context';

// -----------------------------------------------------------------------------

import {LOAD_CONNECTIONS, SELECT_CONNECTION} from '../../actions';

// -----------------------------------------------------------------------------

const ConnectionsContainer = () => {
  const [props, setProps] = useState({connections: {}});
  const {dispatch} = useContext(GlobalContext);
  const {connections} = props;

  useLayoutEffect(() => {
    console.log('connection container subscribes to store events');
    const mapStateToProps = (state, action) => {
      setProps(state);
    };

    store.subscribe(mapStateToProps);

    console.log('connection container mounted: loading connections');
    dispatch({type: LOAD_CONNECTIONS});
  }, []);

  // -------------------------------------------------
  console.log('✨ rendering ConnectionsContainer', props);

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
