import React, {memo} from 'react';
import styled from 'styled-components';

const StyledConnection = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.color
  }
}))`
  color: #fff;
  user-select: none;
  height: 100px;
`;

const _Connection = props => {
  const {
    connection: {id, color, selected},
    selectConnection
  } = props;

  console.log('✨ rendering Connection', id);
  return (
    <StyledConnection onClick={selectConnection(id)} color={color}>
      {id} {selected && '*'}
    </StyledConnection>
  );
};

const Connection = memo(_Connection, (prevProps, nextProps) => {
  return (
    prevProps.connection.color === nextProps.connection.color &&
    prevProps.connection.selected === nextProps.connection.selected
  );
});

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
