import React from 'react';
import {Form, Select, InputNumber, Switch, Radio, Slider, Button, Upload,   
     Icon, Rate, Checkbox, Row, Col, Layout, Typography} from 'antd';
import './App.css';
import { relative } from 'path';

     const { Option } = Select;
     const {Header} = Layout;
     const { Title } = Typography;

class Hospedagens extends React.Component {
            handleSubmit = e => {
                e.preventDefault();
                this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
                });
            };

            normFile = e => {
                console.log('Upload event:', e);
                if (Array.isArray(e)) {
                return e;
                }
                return e && e.fileList;
            };

  render() {
            const {getFieldDecorator} = this.props.form;
            const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
            };
    return (              
        <Layout style={{ background: '#fff', 
        padding: 0 }}>
            <Header style={{ background: '#fff', 
        padding: 0 }}>

                <Title className="titulo">Hospedagens</Title>
            </Header>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        
                    <Form.Item label="Select" hasFeedback>
                    {getFieldDecorator('select', {
                        rules: [{ required: true, message: 'Please select your country!' }],
                    })(
                        <Select placeholder="Please select a country">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                        </Select>,
                    )}
                    </Form.Item>

                <Form.Item label="Select[multiple]">
                {getFieldDecorator('select-multiple', {
                    rules: [
                    { required: true, message: 'Please select your favourite colors!', type: 'array' },
                    ],
                })(
                    <Select mode="multiple" placeholder="Please select favourite colors">
                    <Option value="red">Red</Option>
                    <Option value="green">Green</Option>
                    <Option value="blue">Blue</Option>
                    </Select>,
                )}
                </Form.Item>

                <Form.Item label="InputNumber">
                {getFieldDecorator('input-number', { initialValue: 3 })(<InputNumber min={1} max={10} />)}
                <span className="ant-form-text"> machines</span>
                </Form.Item>

                <Form.Item label="Radio.Group">
                {getFieldDecorator('radio-group')(
                    <Radio.Group>
                    <Radio value="a">item 1</Radio>
                    <Radio value="b">item 2</Radio>
                    <Radio value="c">item 3</Radio>
                    </Radio.Group>,
                )}
                </Form.Item>

                <Form.Item label="Radio.Button">
                {getFieldDecorator('radio-button')(
                    <Radio.Group>
                    <Radio.Button value="a">item 1</Radio.Button>
                    <Radio.Button value="b">item 2</Radio.Button>
                    <Radio.Button value="c">item 3</Radio.Button>
                    </Radio.Group>,
                )}
                </Form.Item>

                <Form.Item label="Checkbox.Group">
                {getFieldDecorator('checkbox-group', {
                    initialValue: ['A', 'B'],
                })(
                    <Checkbox.Group style={{ width: '100%' }}>
                    <Row>
                        <Col span={8}>
                        <Checkbox value="A">A</Checkbox>
                        </Col>
                        <Col span={8}>
                        <Checkbox disabled value="B">
                            B
                        </Checkbox>
                        </Col>
                        <Col span={8}>
                        <Checkbox value="C">C</Checkbox>
                        </Col>
                        <Col span={8}>
                        <Checkbox value="D">D</Checkbox>
                        </Col>
                        <Col span={8}>
                        <Checkbox value="E">E</Checkbox>
                        </Col>
                    </Row>
                    </Checkbox.Group>,
                )}
                </Form.Item>

                <Form.Item label="Rate">
                {getFieldDecorator('rate', {
                    initialValue: 3.5,
                })(<Rate />)}
                </Form.Item>

                <Form.Item label="Dragger">
                <div className="dropbox">
                    {getFieldDecorator('dragger', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                    })(
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>,
                    )}
                </div>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </Layout>
    );
  }
}
const WrappedHospedagens = Form.create({ name: 'hospedagens' })(Hospedagens);

export default WrappedHospedagens;