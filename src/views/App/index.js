import React from 'react';
import { Layout, Row, Col } from 'antd';
import GGEditor from 'gg-editor';

import NodeRegister from '../../register/node';
import FlowToolbar from '../../components/FlowToolbar';

import FlowCanvas from '../../components/FlowCanvas';
import FlowItemPanel from '../../components/FlowItemPanel';
import FlowDetailPanel from '../../components/FlowDetailPanel';

import './style.scss';

GGEditor.setTrackable(false);

const App = () => {
  function onBeforeCommandExecute(pp) {
    const { command } = pp;
    if (command.name !== 'add') return;
    const { addModel, type } = command;
    type === 'node'
      ? (addModel.shape = 'node-image')
      : (addModel.shape = 'flow-polyline-round');
  }

  return (
    <Layout>
      <GGEditor onBeforeCommandExecute={onBeforeCommandExecute}>
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
