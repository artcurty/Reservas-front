import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css'; 
import { Layout, Menu, Breadcrumb ,Button, Radio, Icon, Row, Col } from 'antd';
import Hospedagens from './Hospedagens';
import Passagens from './Passagens';
import Pacotes from './Pacotes';

const {  Header, Sider, Content  } = Layout;
const logo = require('./imagens/viagem.svg');


export default class Home extends React.Component{

    render(){
        return(
            <div className="bk" >           
           <div className="travel">                               
            </div>
            </div>
        );
    };

}