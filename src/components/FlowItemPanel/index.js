import React from 'react';
import Card from 'antd/es/card';
import 'antd/es/card/style/css';
import { ItemPanel } from 'gg-editor';

import NodeItem from './NodeItem';

const node = [
  {
    type: 'circle',
    size: 50,
    label: 'circle',
    src: 'https://gw.alicdn.com/tfs/TB1IRuSnRr0gK0jSZFnXXbRRXXa-110-112.png',
  },
];

const FlowItemPanel = () => {
  return (
    <Card>
      <ItemPanel>
        {node && node.map((item, i) => <NodeItem key={i} {...item} />)}
      </ItemPanel>
    </Card>
  );
};

export default FlowItemPanel;
