import CanvasJSReact from '../canvasjs.react';
import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Top20Ventas extends Component {
  options;

  render() {
    return (
      <div className="container">
      <div>
        <CanvasJSChart options={this.options}
        /* onRef = {ref => this.chart = ref} */
        />
      </div>
      </div>
    );
  }

  state;
  async getTOP20Ventas() {
    const res = await axios.get(backend.host + ':' + backend.port + '/tiendas/top20Ventas');
    this.setState({ users: res.data });
    this.options.data[0].dataPoints = this.state.users.map(user => ({
      label: `${user.Store_ID}`
      , y: user.Store_Sales
    }))

  }
  async componentDidMount() {
    await this.getTOP20Ventas();
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
        text: "Ranking 20 tiendas con mayores ventas"
      },
      axisX: {
				title: "Tienda ID",
				reversed: true,
			},
			axisY: {
				title: "Ventas [US $]",

			},
      data: [{
        type: "bar",
        dataPoints: [
  
        ]
      }]
    }
  }
}