import React, { Component } from "react";
import "./style.css";
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"
import ImgCard from "./components/ImgCard"
import img from "./images.json"

function randomNumber(){
  let min = Math.ceil(1);
  let max = Math.floor(18);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomImgObj () {
  var newImgObj = {};

  for(var i=0; i < 18; i++){
   let  number = randomNumber();
    newImgObj[i] = img[number];
  }
  return newImgObj;

}
var RanNewObj ={};

RanNewObj = randomImgObj();



class App extends Component {

  
  
  state = {
    imageToClick: img,
    score:0
  };



  incremenScore() {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return { count: state.score + 1 }
    });
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
              <li>Score: {this.score} | Top Score: 0</li>
            </ul>
          </nav>
          {this.state.imageToClick.map(images => (
            <ImgCard
            id={images.id}
            key = {images.id}
            image={images.image}
          />
          ))}
          <Footer />
        </Wrapper>


      </div>

    );

  }

}

export default App;
