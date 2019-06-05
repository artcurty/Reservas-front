import React from 'react';
import {Form, Select, InputNumber, Switch, Radio, Slider, Button, Upload,   
     Icon, Rate, Checkbox, Row, Col, Layout, Typography, Input} from 'antd';
import './App.css';
import { relative } from 'path';
import axios from 'axios';

     const { Option } = Select;
     const {Header} = Layout;
     const { Title } = Typography;

class Hospedagens extends React.Component {
    constructor(props){
        super(props);
        this.state = {lista: [   
        ],
        listaNova:[],
        nome: ''
                      };
    }    
    
   
    componentDidMount() {   
        axios.get('http://localhost:8080/hoteis')
          .then(res => {
            const p = res.data;
            console.log(p);
            this.setState({lista:p});
          });          
      }
      
      setNome = (evento) => {
        this.setState({nome: evento.target.value})
        console.log('evento' + evento);
      };
        
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
        <Layout style={{ background: '#fff',padding: 100 }}>
            <Header style={{ background: '#fff', padding: 0 }}>
                <Title style={{textAlign: 'center'}}>Hospedagens</Title>
            </Header>
            <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{ padding: 50 }}>
                    
                        <Form.Item label={<span> Nome&nbsp; </span> }>                                
                        {getFieldDecorator('nome', {
                            rules: [{ required: true, message: 'Insira o seu nome!', whitespace: true }],})
                        (<Input />)}
                        </Form.Item>
                        <Form.Item label={<span> Sobrenome&nbsp; </span> }>                                
                        {getFieldDecorator('sobrenome', {
                            rules: [{ required: true, message: 'Insira o seu sobrenome!', whitespace: true }],})
                        (<Input />)}
                        </Form.Item>

                    <Form.Item label="Estado" hasFeedback>
                    {getFieldDecorator('estado', {
                        rules: [{ required: true, message: 'Please select your country!' }],
                    })(
                        <Select placeholder="Please select a country">
                        
                        </Select>,
                    )}
                    </Form.Item>
                    
                    <Form.Item label="Hotel" hasFeedback>
                    {getFieldDecorator('hotel', {
                        rules: [{ required: true, message: 'Please select your country!' }],
                    })(
                        <Select placeholder="Please select a country">
                        
                        </Select>,
                    )}
                    </Form.Item>

                <Form.Item label="Hóspedes">
                {getFieldDecorator('hospedes', { initialValue: 3 })(<InputNumber min={1} max={10} />)}
                <span className="ant-form-text"> hóspedes</span>
                </Form.Item>

                <Form.Item label="Quanto">
                {getFieldDecorator('quarto')(
                    <Radio.Group>
                    <Radio value="a">item 1</Radio>
                    <Radio value="b">item 2</Radio>
                    <Radio value="c">item 3</Radio>
                    </Radio.Group>,
                )}
                </Form.Item> 
                
                <Form.Item label="Estrelas">
                {getFieldDecorator('estrelas', {
                    initialValue: 3.5,
                })(<Rate />)}
                </Form.Item>               

                <Form.Item wrapperCol={{ span: 12, offset: 6 }} style={{textAlign: 'center'}}>
                <Button type="primary" htmlType="submit">
                    Reservar
                </Button>
                </Form.Item>
            </Form>

            <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>                     
                    </tr>
                  </thead>
                  <tbody>
                  <Linhas lista={this.state.lista} />
                  </tbody>
                </table> 

        </Layout>
    );
  }
}

class Linhas extends React.Component{
    constructor(props){
      super(props);

    };     
    render(){
      return(
        this.props.lista.map((a) => {
          return (
            <tr>
              <td>{a.nome}</td>                             
            </tr>
                );
              })
            );
          };
    }
const WrappedHospedagens = Form.create({ name: 'hospedagens' })(Hospedagens);

export default WrappedHospedagens;
