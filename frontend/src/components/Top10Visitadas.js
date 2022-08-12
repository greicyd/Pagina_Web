import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'

export default class Top10Visitadas extends Component {
  render() {
    return (
<div className="row mx-3">
        <div className="col-md-8">
          <ul className="list-group">
            {
              this.state.users.map(user => (
                <li className="list-group-item list-group-item-action"  >
                  {user.Store_ID + " " + user.Daily_Customer_Count}
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
    Store_ID: '',
    Daily_Customer_Count:'',

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