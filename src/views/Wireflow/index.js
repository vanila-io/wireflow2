import React from 'react';
import Row from 'antd/es/row';
import 'antd/es/row/style/css';
import Col from 'antd/es/col';
import 'antd/es/col/style/css';

import FlowItemPanel from '../../components/FlowItemPanel';
import FlowCanvas from '../../components/FlowCanvas';

const Wireflow = () => {
  return (
    <Row>
      <Col span={2}>
        <FlowItemPanel />
      </Col>
      <Col span={18}>
        <FlowCanvas />
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default Wireflow;
