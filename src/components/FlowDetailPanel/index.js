import React from 'react';
import Card from 'antd/es/card';
import 'antd/es/card/style/css';
import {
  CanvasPanel,
  DetailPanel,
  EdgePanel,
  GroupPanel,
  MultiPanel,
  NodePanel,
} from 'gg-editor';

import DetailForm from './DetailForm';
import './style.css';

const FlowDetailPanel = () => {
  return (
    <DetailPanel className='details'>
      <NodePanel>
        <DetailForm type='node' />
      </NodePanel>
      <EdgePanel>
        <DetailForm type='edge' />
      </EdgePanel>
      <GroupPanel>
        <DetailForm type='group' />
      </GroupPanel>
      <MultiPanel>
        <Card
          type='inner'
          size='small'
          title='Multi Select'
          className='details__card'
          bordered={false}
        />
      </MultiPanel>
      <CanvasPanel>
        <Card
          type='inner'
          size='small'
          title='Canvas'
          className='details__card'
          bordered={false}
        >
          <h4>Keyboard Shortcut</h4>
          <ul>
            <li>
              <span>Zoom in</span> <code>Ctrl -</code>
            </li>
            <li>
              <span>Zoom out</span> <code>Ctrl =</code>
            </li>
          </ul>
        </Card>
      </CanvasPanel>
    </DetailPanel>
  );
};

export default FlowDetailPanel;
