
import React, { Component,PureComponent } from 'react'

export default class Child extends PureComponent {
    constructor(){
        super()
        this.state={
            prods:{}
        }
    }
    componentDidMount(){
        this.fetchProduct();
    }
    componentDidUpdate(prev){
        if(prev.prop!==this.props.prop){
            this.fetchProduct();
            // {console.log("hii this child")}
        }
    }
    
    fetchProduct(){
        fetch(`https://fakestoreapi.com/products/${this.props.prop}`)
        .then(res=>res.json())
        .then(data=>{this.setState({prods:data})})
    }
    render() {
        const {prods}=this.state;
    return (
      <div>
        This is Product {this.props.prop}
        {console.log("hii this child")}
        <div style={{border:"5px groove blue"}}>
        <h1>{prods.id}</h1>
        <img src={prods.image} style={{width:"200px",height:"200px"}} alt="" /> <br />
        <b>{prods.price} ₹ </b>
        <p>{prods.title}</p>
        </div>
      </div>
    )
  }
}



