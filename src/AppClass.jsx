import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){

    let image_array = this.imageData();

    return (
      <>
      <h1 className='Kalvium'>Kalvium Gallery</h1>
      <div className='parent_div'>
       { image_array.map((e)=>{
        return (
          <img src={e.img} className='image' alt="" />
        )
        })}
        {/* <img src={image_array[0].img} className='image' alt="" />
        <img src={image_array[1].img} className='image' alt="" /> */}
      </div>
      </>
    )
  }
  }
