import React from 'react';
import Layout from 'antd/es/layout';
import 'antd/es/layout/style/css';
import Row from 'antd/es/row';
import 'antd/es/row/style/css';
import Col from 'antd/es/col';
import 'antd/es/col/style/css';
import GGEditor from 'gg-editor';

import NodeRegister from '../../register/node';
import FlowToolbar from '../../components/FlowToolbar';
import FlowCanvas from '../../components/FlowCanvas';
import FlowItemPanel from '../../components/FlowItemPanel';
import FlowDetailPanel from '../../components/FlowDetailPanel';
import FlowMiniMap from '../../components/FlowMiniMap';
import ExportCanvas from '../../components/ExportCanvas';

GGEditor.setTrackable(false);

const App = () => {
  function onBeforeCommandExecute(ev) {
    const { command } = ev;
    if (command.name !== 'add') return;
    const { addModel, type } = command;
    if (type === 'node') {
      addModel.shape = 'node-image';
    }
    if (type === 'edge') {
      addModel.shape = 'flow-polyline-round';
      addModel.color = '#a4b2c0';
      addModel.style = { lineWidth: 2 };
    }
  }

  return (
    <Layout>
      <GGEditor onBeforeCommandExecute={onBeforeCommandExecute}>
        <Row>
          <Col span={2}>
            <FlowItemPanel />
          </Col>
          <Col span={18} className='text-center'>
            <ExportCanvas />
            <FlowToolbar />
            <FlowCanvas />
          </Col>
          <Col span={4}>
            <FlowDetailPanel />
            <FlowMiniMap />
          </Col>
        </Row>
        <NodeRegister />
      </GGEditor>
    </Layout>
  );
};

export default App;
