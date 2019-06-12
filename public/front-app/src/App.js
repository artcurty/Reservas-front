import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css'; 
import { Layout, Menu, Icon} from 'antd';
import Hospedagens from './Hospedagens';
import Passagens from './Passagens';
import Pacotes from './Pacotes';
import Home from './Home';
import SobreHosp from './SobreHospedagens'
import SobrePass from './SobrePassagens'
import SobreComp from './SobreComp'


const {Sider, Content} = Layout;
const {SubMenu} = Menu;

export default class App extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render(){
        return (
      <Router>
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Link to="/">
           <div className="logo" />
          </Link>
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <Link to="/"/>
              <Icon type="home"/>
              <span>Home</span>                           
            </Menu.Item>      
            
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Hospedagens</span>
                </span>
              }>

              <Menu.Item key="2">
                <Link to="/hospedagens"/>
                <Icon type="shopping-cart" />Reservar hotel
              </Menu.Item>
                
              <Menu.Item key="3">
                <Link to="/sobreh"/>
                  <Icon type="pie-chart"/>Sobre
              </Menu.Item>            
            </SubMenu>
  
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user"/>
                  <span>Passagens aéreas</span>
                </span>
              }>

              <Menu.Item key="4">
                <Link to="/passagens"/>
                <Icon type="shopping-cart" />Comprar Passagem
              </Menu.Item>
                
              <Menu.Item key="5">
                <Link to="/sobrepass"/>
                  <Icon type="pie-chart"/>Voos
              </Menu.Item>        
              <Menu.Item key="6">
                <Link to="/sobrecomp"/>
                  <Icon type="pie-chart"/>Companhias
              </Menu.Item>      
            </SubMenu>            

            <Menu.Item key="7">
              <Link to="/pacotes"/>
              <Icon type="pie-chart" />
              <span>Pacotes de viagens</span>
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
            <Route path="/sobreh/" component={SobreHosp} />

            <Route path="/passagens/" component={Passagens} />
            <Route path="/sobrepass/" component={SobrePass} />
            <Route path="/sobrecomp/" component={SobreComp} />

            <Route path="/pacotes/" component={Pacotes} />           

          </Content>
        </Layout>
      </Layout>           
    </Router>           
      );
    };
}
