import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css'; 
import { Layout, Menu, Icon} from 'antd';
import Hospedagens from './Hospedagens';
import Passagens from './Passagens';
import Pacotes from './Pacotes';
import Home from './Home';


const {Sider, Content} = Layout;

export default class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render(){
        return (
      <Router>
        <Layout>
        <Sider>
          <Link to="/">
          <div className="logo" />
          </Link>
          <Menu  theme="dark" mode="inline" >       
            <Menu.Item key="1">              
            <Link to="/hospedagens" >
              <Icon type="plus-square" />             
                 <sapn>Hospedagens</sapn>
              </Link>              
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/passagens" >
              <Icon type="plus-square" />
                  <span>Passagens</span>
              </Link>
           </Menu.Item>
            <Menu.Item key="3">
            <Link to="/pacotes">
              <Icon type="plus-square" />
                  <span>Pacotes</span>
                </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          
          <Content style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 900}}
          >
            <Route path="/" exact component={Home} />
            <Route path="/hospedagens/" component={Hospedagens} />
            <Route path="/passagens/" component={Passagens} />
            <Route path="/pacotes/" component={Pacotes} />           

          </Content>
        </Layout>
      </Layout>           
    </Router>           
      );
    };
}
