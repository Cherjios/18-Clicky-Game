import React, { Component } from "react";
import "./style.css";
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"
import ImgCard from "./components/ImgCard"
import Jumbotron from "./components/jumbotron"
import img from "./images.json"

function randomNumber() {
  // let min = Math.ceil(1);
  // let max = Math.floor(18);
  return Math.floor(Math.random() * 18); // (max - min + 1)) + min;
}

function randomImgObj() {
  var newImgObj = [];

  for (var i = 0; i < 12; i++) {
    let number = randomNumber();
    const image = { ...img[number], uuid: i }
    newImgObj.push(image);
  }
  return newImgObj;

}
var RanNewObj = [];

RanNewObj = randomImgObj();
console.log(RanNewObj);


class App extends Component {

  state = {
    imageToClick: RanNewObj,
    score: 0,
    MaxScore: 10,
    text: "Click an image to begin!"
  };

  // Increment score  by 1
  IncrementScore = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  setScoreToZero = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: 0 });
  }

  setText = () => {
    // We always use the setState method to update a component's state
    this.setState({ text: "You guessed Correctly!" });
  }

  setTextLost = () => {
    // We always use the setState method to update a component's state
    this.setState({ text: "You guessed incorrectly!" });
  }

  setMaxScore = () => {
    // We always use the setState method to update a component's state
    if (this.state.MaxScore < this.state.score) {
      this.setState({ MaxScore: this.state.score })
    } else {
      this.setState({ MaxScore: 10 });
    }

  }

  //Tracking image clicked
  clickTracker = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0 };

  imageCardClick = e => {
    e.preventDefault();
    const num = e.target.alt;
    console.log(num);
    if (this.clickTracker[num] === 1) {
      this.setTextLost();
      this.setScoreToZero();
      console.log("You Lost");
      this.clickTracker = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0 };
      this.setMaxScore();
    } else {
      this.setText();
      this.clickTracker[num] = 1;
      this.setState({
        imageToClick: randomImgObj()
      });
      this.IncrementScore();
    }
    console.log(this.clickTracker);

  }

  render() {
    return (
      <div>

<Jumbotron />
        <div className="container">
        
        <nav className="navbar">
          <ul>
            <li className="brand"> Clicky Game!</li>
            <li>{this.state.text}</li>
            <li>Score: {this.state.score} | Top Score: {this.state.MaxScore}</li>
          </ul>
        </nav>  
        </div>
        <br />
        <Wrapper>
          <div className="container">
            {this.state.imageToClick.map(images => (
              <ImgCard
                id={images.id}
                key={images.uuid}
                image={images.image}
                imageCardClick={this.imageCardClick}
              />
            ))}
          </div>
          <Footer />
        </Wrapper>
      </div>

    );

  }

}

export default App;
