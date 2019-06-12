import React from 'react';
import {Form, Select, InputNumber,Button, 
      Layout, Typography, Input} from 'antd';
import './App.css';

     const { Option } = Select;
     const {Header} = Layout;
     const { Title } = Typography;


class Passagens extends React.Component {
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
        <Layout style={{ background: '#fff', padding: 100 }}>
                <Header style={{ background: '#fff', padding: 0 }}>
                  <Title style={{textAlign: 'center' }}>Passagens aéreas</Title>
                </Header>
            <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{ padding: 50 }}>                   
                <Form.Item label={<span> Nome&nbsp; </span> }>                                
                        {getFieldDecorator('nome', {
                            rules: [{ required: true, message: 'Insira o seu nome!', whitespace: true }],})
                        (<Input />)}
                </Form.Item>

                <Form.Item label={<span> Sobrenome&nbsp; </span> }>                                
                        {getFieldDecorator('nome', {
                            rules: [{ required: true, message: 'Insira o seu sobrenome!', whitespace: true }],})
                        (<Input />)}
                </Form.Item>
                
                <Form.Item label="Origem" hasFeedback>
                        {getFieldDecorator('origem', {
                            rules: [{ required: true, message: 'Please select your country!' }],
                        })(
                            <Select placeholder="Please select a country">
                            <Option value="china">China</Option>
                            <Option value="usa">U.S.A</Option>
                            </Select>,
                        )}
                </Form.Item>
                
                <Form.Item label="Destino" hasFeedback>
                        {getFieldDecorator('destino', {
                            rules: [{ required: true, message: 'Please select your country!' }],
                        })(
                            <Select placeholder="Please select a country">
                            <Option value="china">China</Option>
                            <Option value="usa">U.S.A</Option>
                            </Select>,
                        )}
                </Form.Item>

                <Form.Item label="Passageiros">
                        {getFieldDecorator('passageiros', { initialValue: 1 })(<InputNumber min={1} max={10} />)}
                        <span className="ant-form-text"> passageiros </span>
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
const WrappedPassagens = Form.create({ name: 'passagens' })(Passagens);

export default WrappedPassagens;