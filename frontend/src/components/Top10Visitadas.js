import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'

export default class Top10Visitadas extends Component {
    render() {
      return (
        <div className="row mx-3">
          <div className="col-md-4">
          </div>
          <div className="col-md-8">
            <ul className="list-group">
              {
                this.state.users.map(user => (
                  <li className="list-group-item list-group-item-action" key={user.id} id={user.id} >
                    {user.store_ID + " holaaa" + user.store_Area}
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
      async getTOP10Visitadas() {
        const res = await axios.get(backend.host + ':' + backend.port + '/tiendas');
        this.setState({ users: res.data });
      }
      async componentDidMount() {
        await this.getTOP10Visitadas();
        console.log(this.state.users);
      }
    

}