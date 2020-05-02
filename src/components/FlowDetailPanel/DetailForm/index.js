import React from 'react';
import { withPropsAPI } from 'gg-editor';
import Card from 'antd/es/card';
import Input from 'antd/es/input';
import Select from 'antd/es/select';
import Form from 'antd/es/form';
import ColorPicker from 'rc-color-picker';
import Slider from 'antd/es/slider';

import 'antd/es/card/style/css';
import 'antd/es/input/style/css';
import 'antd/es/select/style/css';
import 'antd/es/form/style/css';
import 'antd/es/slider/style/css';
import 'rc-color-picker/assets/index.css';

import { upperFirst } from '../../../utils';

const { Item } = Form;

const inlineFormItemLayout = {
  labelCol: {
    sm: { span: 6 },
  },
  wrapperCol: {
    sm: { span: 18 },
  },
};

class DetailForm extends React.Component {
  get item() {
    const { propsAPI } = this.props;
    return propsAPI.getSelected()[0];
  }

  handleFieldChange = (values) => {
    const {
      propsAPI: { getSelected, executeCommand, update },
    } = this.props;

    const item = getSelected()[0];
    if (!item) return;

    executeCommand(() => update(item, { ...values }));
  };

  handleInputBlur = (type) => (e) => {
    e.preventDefault();

    this.handleFieldChange({
      [type]: e.currentTarget.value,
    });
  };

  renderNodeDetail = () => {
    const { label } = this.item.getModel();

    return (
      <Form initialValues={{ label }}>
        <Item label='Label' name='label' {...inlineFormItemLayout}>
          <Input onBlur={this.handleInputBlur('label')} />
        </Item>
      </Form>
    );
  };

  renderEdgeDetail = () => {
    const {
      label = '',
      shape = 'flow-polyline-round',
      color,
      style: { lineWidth },
    } = this.item.getModel();

    return (
      <Form initialValues={{ label, shape }}>
        <Item label='Label' name='label' {...inlineFormItemLayout}>
          <Input onBlur={this.handleInputBlur('label')} />
        </Item>

        <Item label='Shape' name='shape' {...inlineFormItemLayout}>
          <Select
            onChange={(value) => this.handleFieldChange({ shape: value })}
          >
            <Select.Option value='flow-smooth'>Smooth</Select.Option>
            <Select.Option value='flow-polyline'>Polyline</Select.Option>
            <Select.Option value='flow-polyline-round'>
              Polyline Round
            </Select.Option>
          </Select>
        </Item>

        <Item label='Size' name='size' {...inlineFormItemLayout}>
          <Slider
            min={1}
            max={10}
            defaultValue={lineWidth}
            onChange={(lineWidth) =>
              this.handleFieldChange({ style: { lineWidth } })
            }
          />
        </Item>

        <Item label='Color' name='color' {...inlineFormItemLayout}>
          <ColorPicker
            animation='slide-up'
            color={color}
            onChange={({ color }) => this.handleFieldChange({ color })}
          />
        </Item>
      </Form>
    );
  };

  renderGroupDetail = () => {
    const { label = 'Group' } = this.item.getModel();

    return (
      <Form initialValues={{ label }}>
        <Item label='Label' name='label' {...inlineFormItemLayout}>
          <Input onBlur={this.handleInputBlur('label')} />
        </Item>
      </Form>
    );
  };

  render() {
    const { type } = this.props;
    if (!this.item) return;

    return (
      <Card
        type='inner'
        size='small'
        title={upperFirst(type)}
        className='details__card'
        bordered={false}
      >
        {type === 'node' && this.renderNodeDetail()}
        {type === 'edge' && this.renderEdgeDetail()}
        {type === 'group' && this.renderGroupDetail()}
      </Card>
    );
  }
}

export default withPropsAPI(DetailForm);