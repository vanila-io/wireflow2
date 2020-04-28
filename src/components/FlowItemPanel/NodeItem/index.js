import React from 'react';
import { Item } from 'gg-editor';
const NodeItem = (props) => {
  const { type, size, label, src } = props;
  return (
    <Item
      model={{
        type: type,
        size: size,
        label: label,
      }}
    >
      <img src={src} width='55' height='56' draggable={false} alt='' />
    </Item>
  );
};

export default NodeItem;
