import React from 'react';
import styled, {css} from 'styled-components';

const StyledConnection = styled.div`
  color: #fff;
  height: 100px;

  ${props => css`
    background-color: ${props.color};
  `};
`;

const Connection = props => {
  const {
    connection: {id, color},
    selectConnection
  } = props;

  console.log('✨ rendering Connection', id);
  return (
    <StyledConnection onClick={selectConnection(id)} color={color}>
      {id}
    </StyledConnection>
  );
};

const ConnectionsComponent = props => {
  const {connections = {}, selectConnection} = props;
  const keys = Object.keys(connections);

  console.log('✨ rendering ConnectionsComponent', props);
  return (
    <>
      <p>Connections:</p>
      {keys.length === 0 && <p>none.</p>}
      {keys.map(key => (
        <Connection
          key={key}
          connection={connections[key]}
          selectConnection={selectConnection}
        />
      ))}
    </>
  );
};

export default ConnectionsComponent;
