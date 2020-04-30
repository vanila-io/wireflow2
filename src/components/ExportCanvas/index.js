import React from 'react';
import Button from 'antd/es/button';
import 'antd/es/button/style/css';

import IconFont from '../IconFont';

import './style.css';

const ExportCanvas = () => {
  function saveCanvas() {
    const canvasSave = document.getElementById('canvas_1');
    const imgSrc = canvasSave.toDataURL('image/*');
    var element = document.createElement('a');
    element.href = imgSrc;
    element.setAttribute('download', 'image.png');
    element.click();
  }

  return (
    <div className='export'>
      <Button
        onClick={saveCanvas}
        type='dashed'
        size='large'
        shape='circle'
        icon={<IconFont type='icon-upload-demo' />}
      />
    </div>
  );
};

export default ExportCanvas;
