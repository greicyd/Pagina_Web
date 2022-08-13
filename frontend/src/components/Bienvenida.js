import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'

export default class Bienvenida extends Component {
  render() {
    return (
      <div class="container">
        <h1 align="center"> Información General </h1>

        <table class="table table-dark table-striped" id="top10Visitadas">
          <thead>
            <tr>
              <th scope="col">Tienda ID</th>
              <th scope="col">Area</th>
              <th scope="col">Productos Disponibles</th>
              <th scope="col">Visitas promedio</th>
              <th scope="col">Ventas </th>
            </tr>
          </thead>
          <tbody>

            {
              this.state.users.map(user => (
                <tr>
                  <th scope="row"> {user.Store_ID}</th>
                  <td> {user.Store_Area}</td>
                  <td width="250">{user.Items_Available}</td>
                  <td>{user.Daily_Customer_Count}</td>
                  <td>{user.Store_Sales}</td>
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
    Store_Area: '',
    Items_Available: '',
    Daily_Customer_Count: '',
    Store_Sales: '',

  }
  async getTiendas() {
    const res = await axios.get(backend.host + ':' + backend.port + '/tiendas');
    this.setState({ users: res.data });
  }
  async componentDidMount() {
    await this.getTiendas();
    console.log(this.state.users);
  }
}