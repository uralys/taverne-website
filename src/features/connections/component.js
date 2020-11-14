import React from 'react';

const Connection = props => {
  const {
    connection: {id, color}
  } = props;
  console.log('✨ rendering Connection', id);
  return <div>{id}</div>;
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
