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
        // attrs: node image style
        attrs: {
          x: -width / 2,
          y: -height / 2,
          width: width,
          height: height,
          img: group.model.img,
        },
        draggable: true,
      });
      if (cfg.model.label) {
        group.addShape('text', {
          // attrs: label style
          attrs: {
            x: -(width - 10) / 2,
            y: -(height - 23) / 2,
            // textAlign: 'center',
            fontWeight: 600,
            textBaseline: 'middle',
            text: cfg.model.label,
            fill: '#94A4A5',
            fontSize: 10,
          },
        });
      }
    },
  };

  return <RegisterNode name='node-image' config={config} extend='flow-rect' />;
};

export default NodeRegister;
