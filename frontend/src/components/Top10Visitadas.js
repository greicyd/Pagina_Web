import CanvasJSReact from '../canvasjs.react';
import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'
import './Ventanas.css';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Top10Visitadas extends Component {
  render() {
    return (
      <div className="container" id='tablas'>
        <h1 align="center"> Ranking 10 </h1>

        <table className="table table-dark table-striped" id="top10Visitadas">
          <thead>
            <tr>
              <th scope="col">Puesto</th>
              <th scope="col">Tienda ID</th>
              <th scope="col">Promedio de visitas al mes</th>
            </tr>
          </thead>
          <tbody>

            {
              this.state.users.map((user,index) => (
                <tr>
                  <th scope="row"> {index+1}</th>
                  <td> {user.Store_ID}</td>
                  <td>{user.Daily_Customer_Count}</td>
                </tr>
              )
              )

            }

          </tbody>
        </table>
      </div>

    )


  }
  state = {
    users: [],
    Store_ID: '',
    Daily_Customer_Count: '',

  }
  async getTOP10Visitadas() {
    const res = await axios.get(backend.host + ':' + backend.port + '/tiendas/top10Visitadas');
    this.setState({ users: res.data });
  }
  async componentDidMount() {
    await this.getTOP10Visitadas();
    console.log(this.state.users);
  }
}