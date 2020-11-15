import React, {useLayoutEffect, useState} from 'react';
import ConnectionsComponent from './component';
import {useDispatcher} from '../../dispatcher-context';

// -----------------------------------------------------------------------------

import {LOAD_CONNECTIONS, SELECT_CONNECTION} from '../../actions';

// -----------------------------------------------------------------------------

const ConnectionsContainer = props => {
  const [componentProps, setComponentProps] = useState({});
  const {dispatch} = useDispatcher();
  const {connectionsStore} = props;

  console.log('✨ rendering ConnectionsContainer', props);

  // -------------------------------------------------

  useLayoutEffect(() => {
    console.log('connection container subscribes to store events');
    const mapStateToProps = (state, action) => {
      console.log('  connectionsContainer: mapStateToProps');
      setComponentProps({connections: state.connections});
    };

    connectionsStore.subscribe(mapStateToProps);

    console.log('connection container mounted: loading connections');
    dispatch({type: LOAD_CONNECTIONS});
  }, []);

  // -------------------------------------------------

  const selectConnection = id => () => {
    dispatch({
      type: SELECT_CONNECTION,
      scope: connectionsStore.id,
      connectionId: id
    });
  };

  // -------------------------------------------------

  return (
    <ConnectionsComponent
      selectConnection={selectConnection}
      {...componentProps}
    />
  );
};

export default ConnectionsContainer;
