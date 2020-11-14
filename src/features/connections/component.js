import React from 'react';

const Connection = props => {
  const {connection} = props;
  return <div>{connection}</div>;
};

const ConnectionsComponent = props => {
  const {connections} = props;
  return (
    <>
      <p>Connections:</p>
      {connections.length === 0 && <p>none.</p>}
      {connections.map((connection, index) => (
        <Connection key={index} connection={connection} />
      ))}
    </>
  );
};

export default ConnectionsComponent;
