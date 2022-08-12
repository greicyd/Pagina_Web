import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'

export default class Top20Ventas extends Component {
    render() {
      return (
        <p>Hola</p>
  
      )
    }
    
    async getTOP20Ventas() {
      const res = await axios.get(backend.host + ':' + backend.port + '/tiendas/top20Ventas');
      //this.setState({ users: res.data });
    }
    async componentDidMount() {
      await this.getTOP20Ventas();
      //console.log(this.state.users);
    }
}