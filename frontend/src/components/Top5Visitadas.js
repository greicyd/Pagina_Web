/*import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'

export default class top5Visitadas extends Component {
    render() {
      return (
        <div className="row mx-3">
          <div className="col-md-4">
          </div>
          <div className="col-md-8">
            <ul className="list-group">
              {
                this.state.users.map(user => (
                  <li className="list-group-item list-group-item-action" key={stor.id} id={user.id} >
                    {user.nombre + " " + user.apellido}
                  </li>)
                )
              }
            </ul>
          </div>
        </div>
  
      )
    }
    state = {
        users: [],
        store_ID: '',
        store_Area: '',
        items_Avaliable: '',
        daily_Customer_Count:'',
        stores_Sales:''
    
      }
      async getTOP5Customers() {
        const res = await axios.get(backend.host + ':' + backend.port + '/tiendas');
        this.setState({ users: res.data });
      }
      async componentDidMount() {
        await this.getTOP5Customers();
        console.log(this.state.users);
      }
}
*/