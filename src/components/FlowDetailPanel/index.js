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

import './style.scss';

const FlowDetailPanel = () => {
  return (
    <DetailPanel className='details-form'>
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
        <Card type='inner' size='small' title='Multi Select' bordered={false} />
      </MultiPanel>
      <CanvasPanel>
        <Card type='inner' size='small' title='Canvas' bordered={false} />
      </CanvasPanel>
    </DetailPanel>
  );
};

export default FlowDetailPanel;
