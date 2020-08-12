import React, { Component } from "react";
import "./style.css";
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"
import ImgCard from "./components/ImgCard"
import img from "./images.json"

function randomNumber(){
  // let min = Math.ceil(1);
  // let max = Math.floor(18);
  return Math.floor(Math.random() * 18); // (max - min + 1)) + min;
}

function randomImgObj () {
  var newImgObj = [];

  for(var i=0; i < 12; i++){
   let  number = randomNumber();
   const image = {...img[number],uuid:i}
    newImgObj.push(image);
  }
  return newImgObj;

}
var RanNewObj =[];

RanNewObj = randomImgObj();
console.log(RanNewObj);


class App extends Component {

  
  state = {
    imageToClick: RanNewObj,
    score:0
  };

  
  imageCardClick (e){
    console.log(e.target.alt)
    const RanNewObj = this.imageToClick;
    this.setState({imageToClick:RanNewObj})
  }

  render() {
    return (
      <div>
        <Wrapper>
          <nav className="navbar">
            <ul>
              <li className="brand">
                <a href="/">Clicky Game</a>
              </li>
              <li className="">Click an image to begin!</li>
              <li>Score: {this.state.score} | Top Score: 0</li>
            </ul>
          </nav>
          {this.state.imageToClick.map((images) => (
            <ImgCard
            id={images.id}
            key = {images.uuid}
            image={images.image}
            imageCardClick = {this.imageCardClick}
            
          />
          ))}
          <Footer />
        </Wrapper>


      </div>

    );

  }

}

export default App;
