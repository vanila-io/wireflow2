import React from 'react';
import { Layout, Row, Col } from 'antd';
import GGEditor from 'gg-editor';

import NodeRegister from '../../register/node';
import FlowToolbar from '../../components/FlowToolbar';

import FlowCanvas from '../FlowCanvas';
import FlowItemPanel from '../FlowItemPanel';
import FlowDetailPanel from '../FlowDetailPanel';

import './style.scss';

GGEditor.setTrackable(false);

const App = () => {
  function onBeforeCommandExecute(pp) {
    console.log('onBeforeCommandExecute -> pp', pp);
    const { command } = pp;
    if (command.name !== 'add') return;
    const { addModel, type } = command;
    type === 'node'
      ? (addModel.shape = 'node-image')
      : (addModel.shape = 'flow-polyline-round');
  }
  const obj = {
    hell: 'hlo',
    tst: {
      tsd: this,
    },
  };
  console.log('App -> obj', obj);

  return (
    <Layout>
      <GGEditor
        onBeforeCommandExecute={onBeforeCommandExecute}
        // onAfterCommandExecute={(command) => {
        //   console.log('object', command);
        // }}
        // editor={(dd) => {
        //   console.log('dd', dd);
        // }}
      >
        <Row>
          <Col span={2}>
            <FlowItemPanel />
          </Col>
          <Col span={18} style={{ textAlign: 'center' }}>
            <FlowToolbar />
            <FlowCanvas />
          </Col>
          <Col span={4}>
            <FlowDetailPanel />
          </Col>
        </Row>
        <NodeRegister />
      </GGEditor>
    </Layout>
  );
};

export default App;
