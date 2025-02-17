
import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor(){
        super()
        this.state={
          name:"tirumala",
            count:1,
        }
    }
  render() {
    return (
      <div>
        <h1>hello {this.state.name},{this.state.count}</h1>
        {console.log("hii this parent")}
        <button onClick={()=>{this.setState({name:"tej"})}} onDoubleClick={()=>{this.setState({name:"React"})}}>names</button>
        <button disabled={this.state.count>=20} onClick={()=>{this.setState({count:this.state.count+1})}}>INC</button>
        <button disabled={this.state.count<=1} onClick={()=>{this.setState({count:this.state.count-1})}}>DEC</button>
        <Child prop={this.state.count} />
      </div>
    )
  }
}
