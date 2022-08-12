import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'

export default class Top5Area extends Component {
    render() {
      return (
        <p>Hola</p>
  
      )
    }
    async getTOP5Area() {
      const res = await axios.get(backend.host + ':' + backend.port + '/tiendas/top5Area');
      //this.setState({ users: res.data });
    }
    async componentDidMount() {
      await this.getTOP5Area();
      //console.log(this.state.users);
    }
}