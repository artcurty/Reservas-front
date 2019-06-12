import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; 
import { Layout,Button, Typography, Table} from 'antd';
import axios from 'axios';
import ReactEcharts from 'echarts-for-react';
import ButtonGroup from 'antd/lib/button/button-group';

const {Title} = Typography;
const {Header, Content} = Layout;


export default class SobreComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        listaCompanhias: [],
        listaVoos: [],
        listVooByComp: [],
        listaCompanhiasID: [],
        listaCompanhiasNome: [],
        dataPizza: [{value:535, name: 'MA'},
        {value:535, name: 'PB'},
        {value:510, name: 'PE'},
        {value:634, name: 'RN'},
        {value:735, name: 'CE'},
        {value:900, name: 'ES'}],
        nome:''
        };
    }    
    componentWillMount(){
    }

    getCompanhias(){
        axios.get('http://localhost:7070/companhias').then(CompanhiasRes=> {
         const Companhias = CompanhiasRes.data._embedded.companhiaList;          
           console.log('Companhias',Companhias);  
           this.setState({listaCompanhias: Companhias});         
        
        });
    };   

    getVoos(){
        axios.get('http://localhost:7070/voos').then(res => {
            const Voos = res.data._embedded.vooList;
            console.log('Voos',Voos);
            this.setState({listaVoos: Voos});
            });  
    };   
    componentDidMount(){             
      this.getCompanhias();
      this.getVoos();  
    };

    setNome = (evento) => {
        this.setState({nome: evento.target.value})
        console.log('evento' + evento);
    };    

    getOptionBar = () => {
        var option = {
            title: {
                text: 'Voos',
                subtext: 'Ocupacao',
                left: 'center'
              },
              color: ['#6524AF','#3398DB'],
              tooltip : {
                  trigger: 'axis',
                  axisPointer : {            
                      type : 'shadow'        
                  }
              },
              legend: {
                top: 10,
                left: 'right',        
                data: ['A','B']
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis : [
                  {
                      type : 'category',
                      data : ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
                      axisTick: {
                          alignWithLabel: true
                      }
                  }
              ],
              yAxis : [
                  {
                      type : 'value'
                  }
              ],
              series : [
                  {
                      name:'A',
                      type: 'bar',
                      barWidth: '50%',
                      data: this.state.dataA //[60, 352, 300, 34, 90, 130, 520,800]
                  },
                  {
                    name:'B',
                    type: 'bar',
                    barWidth: '50%',
                    data: this.state.dataB //[20, 100, 30, 50, 90, 130, 600,200]
                }
              ]
            };    
          return option;
      };

    getOptionPizza = () => {

        var option = {
          title: {
              text: 'Companhias',
              subtext: 'Voos',
              left: 'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              // orient: 'vertical',
              // top: 'middle',
              bottom: 10,
              left: 'center',
              data: []
          },
          series : [
              {
                  name:'Voos',
                  type: 'pie',
                  radius : '65%',
                  center: ['50%', '50%'],
                  selectedMode: 'single',
                  data: []
                  ,
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };    
          return option;
      };
  

    onBotaoA = () => {

        this.setState({dataA:[500, 512, 561, 34, 321, 221, 33,80]});
    };   
    onBotaoB = () => {

        this.setState({dataB:[231, 444, 400, 123, 888, 444, 111, 366]});
    };
    onPizzaRefresh = () => {
        this.setState({dataPizza:[
                      {value:100, name: 'MA'},
                      {value:305, name: 'PB'},
                      {value:222, name: 'PE'},
                      {value:494, name: 'RN'},
                      {value:805, name: 'CE'},
                      {value:1000, name: 'ES'}]});
    
    console.log('Teste',this.state.listaVoos.map((a)=> a.nome));
    
    };

    render(){
        const columns = [
            {
              title: 'Nome',
              dataIndex: 'nome',
              key: 'nome'
            }
          ];
        return(                      
        <Layout style={{ background: '#fff', padding: 50 }}>
            <Header style={{ background: '#fff', padding: 0 }}>
                <Title style={{textAlign: 'center'}}>Informações</Title>
            </Header>
           
            <Content style={{padding: 50 }}>
               <Layout style={{background: '#fff', width: '30%', textAlign: 'center'}}>     
                     <Table columns={columns} dataSource={this.state.listaCompanhias} />
               </Layout>    
               
                <Layout style={{background: '#fff',float: 'left', height: '400px', width: '50%', textAlign: 'center'}} >
                    <ReactEcharts className='gph1' option={this.getOptionBar()} style={{width: '100%'}}/> 
                    <ButtonGroup>
                        <Button onClick={this.onBotaoA} >Data A</Button>
                        <Button onClick={this.onBotaoB}>Data B</Button>
                    </ButtonGroup>
                </Layout> 

                <Layout style={{background: '#fff',float: 'right', height: '400px', width: '50%', textAlign: 'center'}}  >
                    <ReactEcharts 
                    className="gph2"
                    option={this.getOptionPizza()} 
                    style={{width: '100%'}}                    
                     />                           
                     <ButtonGroup>
                        <Button onClick={this.onPizzaRefresh} >Data Pizza</Button>                      
                    </ButtonGroup>   
                </Layout>                              
            </Content>
        </Layout>           
        );
    };

}

