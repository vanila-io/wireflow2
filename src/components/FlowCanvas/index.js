import React from 'react';
import { Flow } from 'gg-editor';

const data = {
  nodes: [],
  edges: [],
};

const FlowCanvas = () => {
  return <Flow style={{ width: '100%', height: '100vh' }} data={data} />;
};

export default FlowCanvas;
