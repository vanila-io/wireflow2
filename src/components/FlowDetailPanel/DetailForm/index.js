import React from 'react';
import { withPropsAPI } from 'gg-editor';
import Card from 'antd/es/card';
import 'antd/es/card/style/css';
import Input from 'antd/es/input';
import 'antd/es/input/style/css';
import Select from 'antd/es/select';
import 'antd/es/select/style/css';
import Form from 'antd/es/form';
import 'antd/es/form/style/css';

const { Item } = Form;
const { Option } = Select;

const upperFirst = (str) =>
  str.toLowerCase().replace(/( |^)[a-z]/g, (l) => l.toUpperCase());

const inlineFormItemLayout = {
  labelCol: {
    sm: { span: 8 },
  },
  wrapperCol: {
    sm: { span: 16 },
  },
};

class DetailForm extends React.Component {
  get item() {
    const { propsAPI } = this.props;
    return propsAPI.getSelected()[0];
  }

  handleFieldChange = (values) => {
    const { propsAPI } = this.props;
    const { getSelected, executeCommand, update } = propsAPI;

    setTimeout(() => {
      const item = getSelected()[0];
      if (!item) {
        return;
      }
      executeCommand(() => {
        update(item, {
          ...values,
        });
      });
    }, 0);
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
    const { label = '', shape = 'flow-polyline-round' } = this.item.getModel();

    return (
      <Form initialValues={{ label, shape }}>
        <Item label='Label' name='label' {...inlineFormItemLayout}>
          <Input onBlur={this.handleInputBlur('label')} />
        </Item>
        <Item label='Shape' name='shape' {...inlineFormItemLayout}>
          <Select
            onChange={(value) => this.handleFieldChange({ shape: value })}
          >
            <Option value='flow-smooth'>Smooth</Option>
            <Option value='flow-polyline'>Polyline</Option>
            <Option value='flow-polyline-round'>Polyline Round</Option>
          </Select>
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
      <Card type='inner' size='small' title={upperFirst(type)} bordered={false}>
        {type === 'node' && this.renderNodeDetail()}
        {type === 'edge' && this.renderEdgeDetail()}
        {type === 'group' && this.renderGroupDetail()}
      </Card>
    );
  }
}

export default withPropsAPI(DetailForm);
