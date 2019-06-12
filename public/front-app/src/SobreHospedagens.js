import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; 
import { Layout,Button, Typography, Table,  Divider, Tag, Card, Rate} from 'antd';
import axios from 'axios';
import ReactEcharts from 'echarts-for-react';
import ButtonGroup from 'antd/lib/button/button-group';

const {Column, ColumnGroup} = Table;
const {Title} = Typography;
const {Header, Content} = Layout;

class Linhas extends React.Component{
    constructor(props){
        super(props);

    };     
    render(){
        return(
        this.props.lista.map((a) => {
            return (
            <tr key={a.id}>
                <td>{a.nome}</td>     
                <td>{a.estrela}</td>     
                <td>{a.uf}</td>                                  
            </tr>
                );
                })
            );
            };
    }

export default class SobreHosp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        lista: [],
        dataA: [60, 352, 300, 34, 90, 130, 520,800],
        dataB: [20, 100, 30, 50, 90, 130, 600,200],
        dataPizza: [{value:535, name: 'MA'},
        {value:535, name: 'PB'},
        {value:510, name: 'PE'},
        {value:634, name: 'RN'},
        {value:735, name: 'CE'},
        {value:900, name: 'MA'}],
        nome:''
        };
    }    
    componentWillMount(){

    }

    componentDidMount(){
        axios.get('http://localhost:8080/hoteis')
        .then(res => {
            const p = res.data._embedded.hotelList;
            console.log(p);
            this.setState({lista: p});
        });
    }

    setNome = (evento) => {
        this.setState({nome: evento.target.value})
        console.log('evento' + evento);
    };    

    getOptionBar = () => {
        var option = {
    
            title: {
                text: 'Hoteis',
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
                text: 'Hoteis',
                subtext: 'Ocupacao',
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
                data: ['PB', 'PE','RN','MA','CE']
            },
            series : [
                {
                    name:'Vendas',
                    type: 'pie',
                    radius : '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data: this.state.dataPizza
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
                        {value:1000, name: 'ES'}
        ]});
    };

    render(){
        const columns = [
            {
                title: 'Nome',
                dataIndex: 'nome',
                key: 'nome'
            },
            {
                title: 'Estado',
                dataIndex: 'uf',
                key: 'uf',
            },
            {
                title: 'Estrelas',
                dataIndex: 'estrela',
                key: 'estrela',
                render: estrela => <Rate value={estrela}/>,
            }
            ];

        return(                      
        <Layout style={{ background: '#fff', padding: 50 }}>
            <Header style={{ background: '#fff', padding: 0 }}>
                <Title style={{textAlign: 'center'}}> Estatísticas </Title>
            </Header>
            
            <Content style={{padding: 50}}>
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
                <Layout style={{background: '#fff', width: '100%', textAlign: 'center'}}>     
                        <Table columns={columns} dataSource={this.state.lista} />
                </Layout>
            </Content>
        </Layout>           
        );
    };

}


