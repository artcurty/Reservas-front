import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css'; 
import { Layout,Button, Radio, Icon, Row, Col } from 'antd';
import Hospedagens from './Hospedagens';
import Passagens from './Passagens';
import Pacotes from './Pacotes';

class App extends React.Component {
  
  render(){
        return (
        <div className="container">
              <div id="main">
                   <div className="header">                   
                      <Row type="flex" justify="center"> 
                        <h1>Synchro</h1>                   
                      </Row>
                   </div>                     
                   <div className="menu" >
                   <Row type="flex" justify="center">   
                   <div className="hospedagens">
                            <Button type="primary" href="#" block>                             
                              Hospedagens                             
                            </Button>                       
                      </div>
                        <div className = "passagens" >
                            <Button type="primary" href="#" block>                             
                              Passagens                             
                            </Button>
                        </div>

                        <div className="pacotes">
                            <Button type="primary" href="#" block>                              
                              Pacotes                             
                            </Button>                                  

                        </div>
                    </Row>
                    </div> 
                    <div className="content">         
                    </div>
               </div>                      
        </div>
      );
    };
}

export default App;