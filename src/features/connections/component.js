import React, {useContext} from 'react';
import styled, {css} from 'styled-components';
import GlobalContext from '../../global-context';

import {SELECT_CONNECTION} from '../../actions';

const StyledConnection = styled.div`
  color: #fff;
  height: 100px;

  ${props => css`
    background-color: ${props.color};
  `};
`;

const Connection = props => {
  const {
    connection: {id, color}
  } = props;

  const {dispatch} = useContext(GlobalContext);
  const selectConnection = () => {
    dispatch({
      type: SELECT_CONNECTION
    });
  };

  console.log('✨ rendering Connection', id);
  return (
    <StyledConnection onClick={selectConnection} color={color}>
      {id}
    </StyledConnection>
  );
};

const ConnectionsComponent = props => {
  const {connections = {}} = props;
  const keys = Object.keys(connections);

  console.log('✨ rendering ConnectionsComponent', props);
  return (
    <>
      <p>Connections:</p>
      {keys.length === 0 && <p>none.</p>}
      {keys.map(key => (
        <Connection key={key} connection={connections[key]} />
      ))}
    </>
  );
};

export default ConnectionsComponent;
