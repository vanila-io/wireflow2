import React from 'react';
import { RegisterNode } from 'gg-editor';

const NodeRegister = () => {
  const config = {
    afterDraw(cfg) {
      const { group } = cfg;
      const size = cfg.size || [100, 100];
      const width = size[0];
      const height = size[1];
      group.addShape('image', {
        attrs: {
          x: -width / 2,
          y: -height / 2,
          width: width,
          height: height,
          img: group.model.img,
        },
        draggable: true,
      });
      // group.addShape('dom', {
      //   attrs: {
      //     x: 0,
      //     y: 0,
      //     width: width,
      //     height: height,
      //     html: `
      //     <span onclick="alert('Hi')" style="background-color: red;height: 20px;  width: 30px;">No No no
      //     </span>
      //       `,
      //   },
      //   draggable: true,
      // });
      if (cfg.model.label) {
        group.addShape('text', {
          // attrs: style
          attrs: {
            x: 0, // 居中
            y: -(height - 25) / 2,
            textAlign: 'center',
            textBaseline: 'middle',
            text: cfg.model.label,
            fill: '#333',
            fontSize: 11,
          },
        });
      }
    },
  };

  return <RegisterNode name='node-image' config={config} extend='flow-rect' />;
};

export default NodeRegister;
