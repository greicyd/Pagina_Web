import CanvasJSReact from '../canvasjs.react';
import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Top5Area extends Component {
  options;

  render() {
    return (
      <div className='container' width='500'>
      <div>
        <CanvasJSChart options={this.options}
        /* onRef = {ref => this.chart = ref} */
        />
      </div>
      </div>
    );
  }

  state;
  async getTOP5Area() {
    const res = await axios.get(backend.host + ':' + backend.port + '/tiendas/top5Area');
    this.setState({ users: res.data });
    this.options.data[0].dataPoints = this.state.users.map(user => ({
      label: `${user.Store_ID}`
      , y: user.Store_Area
    }))
  }
  async componentDidMount() {
    await this.getTOP5Area();
    console.log(this.state.users);
  }

  constructor(){
    super();
    this.state={
      users: [],
      Store_ID: '',
      Store_Area: '',
    }
  
    this.options={
      title: {
        text: "Ranking 5 tiendas con mayor área"
      },
      axisY: {
        title: "Area [yd^2]"
      },
      axisX: {
        title: "ID Tienda "
      },
      data: [{
        type: "column",
        dataPoints: [
  
        ]
      }]
    }
  }
}