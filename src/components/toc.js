import React from 'react';
import Markdown from './markdown';

const TOC = ({markdown}) => {
  const md = `  - [setup](#setup)
  - [create a reducer](#create-a-reducer)
  - [🐿️ setup the \<Taverne> provider](#-setup-the-%5Ctaverne-provider)
  - [Pouring your global state to your containers](#pouring-your-global-state-to-your-containers)
    - [storeState ➡️ props](#storestate--props)
  - [📡 dispatching actions](#-dispatching-actions)
  - [Advanced usage](#advanced-usage)
    - [local rendering](#local-rendering)
    - [more pouring facilities](#more-pouring-facilities)`;

  return <Markdown markdown={md} />;
};

export default TOC;
