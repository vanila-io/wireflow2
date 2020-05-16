import React from 'react';
import { Flow } from 'gg-editor';
import './style.css';

const FlowCanvas = () => {
  return (
    <Flow
      // onAfterItemSelected={async (e) => {
      //   const item = await e.item;
      //   item.isSelected = false;
      //   console.log('af', item.id);
      //   console.log('af', item.isSelected);
      // }}
      onMouseEnter={(e) => {
        console.log(e._type);
      }}
      onBeforeItemUnselected={async (e) => {
        const item = await e.item;
        item.isSelected = true;
        console.log('before', item.id);
        console.log('before', item.isSelected);
      }}
      style={{ background: '#ddd' }}
      className='flow'
    />
  );
};

export default FlowCanvas;
