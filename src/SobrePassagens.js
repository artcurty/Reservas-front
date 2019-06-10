import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; 
import { Layout,Button, Typography, Table} from 'antd';
import axios from 'axios';
import ReactEcharts from 'echarts-for-react';
import ButtonGroup from 'antd/lib/button/button-group';

const {Title} = Typography;
const {Header, Content} = Layout;

class Voos extends React.Component{
    constructor(props){
      super(props);
    };     
    render(){
      return(
        this.props.lista.map((a) => {
          return (
            <tr key={a.id}>
              <td>{a.nome}</td>     
              <td>{a.origem}</td>
              <td>{a.destino}</td>     
              <td>{a.valor}</td>                                  
            </tr>
                );
              })
            );
          };
    }
export default class SobrePass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        lista: [],
        listaCompanhias: [],
        dataA: [60, 352, 300, 34, 90, 130, 520,800],
        dataB: [20, 100, 30, 50, 90, 130, 600,200],
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

    componentDidMount(){
        axios.all([
            axios.get('http://localhost:8080/voos').then(res => {
                const p = res.data._embedded.vooList;
                console.log('Voos',p);
                this.setState({lista: p});
            }),
            axios.get('http://localhost:8080/companhias').then(CompanhiasRes=> {
                const Companhias = CompanhiasRes.data._embedded.companhiaList;
               console.log('Companhias',Companhias);
               this.setState({listaCompanhias: Companhias})
            })
        ]);
    }
    

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
              text: 'Voos',
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
    
    getOtionMap = () => {
    // echarts.registerMap('HK', '/geoJson/brazil_geo,j');
     var option = {
            title: {
                text: 'Fluxo de passagens',
                subtext: 'Passagens',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (p / km2)'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            visualMap: {
                min: 800,
                max: 50000,
                text:['Alto','Baixo'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue','yellow', 'orangered']
                }
            },
            series: [
                {
                    name: 'Grafico',
                    type: 'map',
                    mapType: 'HK', // 自定义扩展图表类型
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    data:[
                        {name: '中西区', value: 20057.34},
                        {name: '湾仔', value: 15477.48},
                        {name: '东区', value: 31686.1},
                        {name: '南区', value: 6992.6},
                        {name: '油尖旺', value: 44045.49},
                        {name: '深水埗', value: 40689.64},
                        {name: '九龙城', value: 37659.78},
                        {name: '黄大仙', value: 45180.97},
                        {name: '观塘', value: 55204.26},
                        {name: '葵青', value: 21900.9},
                        {name: '荃湾', value: 4918.26},
                        {name: '屯门', value: 5881.84},
                        {name: '元朗', value: 4178.01},
                        {name: '北区', value: 2227.92},
                        {name: '大埔', value: 2180.98},
                        {name: '沙田', value: 9172.94},
                        {name: '西贡', value: 3368},
                        {name: '离岛', value: 806.98}
                    ],
                    // 自定义名称映射
                    nameMap: {
                        'Central and Western': '中西区',
                        'Eastern': '东区',
                        'Islands': '离岛',
                        'Kowloon City': '九龙城',
                        'Kwai Tsing': '葵青',
                        'Kwun Tong': '观塘',
                        'North': '北区',
                        'Sai Kung': '西贡',
                        'Sha Tin': '沙田',
                        'Sham Shui Po': '深水埗',
                        'Southern': '南区',
                        'Tai Po': '大埔',
                        'Tsuen Wan': '荃湾',
                        'Tuen Mun': '屯门',
                        'Wan Chai': '湾仔',
                        'Wong Tai Sin': '黄大仙',
                        'Yau Tsim Mong': '油尖旺',
                        'Yuen Long': '元朗'
                    }
                }
            ]
        };

        return option;
    }  

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
              title: 'Origem',
              dataIndex: 'origem',
              key: 'origem',
            },
            {
                title: 'Destino',
                dataIndex: 'destino',
                key: 'destino',
            },
            {
              title: 'Valor',
              dataIndex:'valor',
              key:'valor',
            }
          ];
        return(                      
        <Layout style={{ background: '#fff', padding: 50 }}>
            <Header style={{ background: '#fff', padding: 0 }}>
                <Title style={{textAlign: 'center'}}>Informações</Title>
            </Header>
           
            <Content style={{padding: 50 }}>
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

