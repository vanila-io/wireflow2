import React from 'react';
import { Tooltip } from 'antd';
import { Command } from 'gg-editor';
import IconFont from '../../../common/IconFont';

const upperFirst = (str) =>
  str.toLowerCase().replace(/( |^)[a-z]/g, (l) => l.toUpperCase());

const ToolbarButton = (props) => {
  const { command, icon, text } = props;

  return (
    <Command name={command}>
      <Tooltip title={text || upperFirst(command)} placement='bottom'>
        <IconFont type={`icon-${icon || command}`} />
      </Tooltip>
    </Command>
  );
};

export default ToolbarButton;
