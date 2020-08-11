import React, { Component } from "react";
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"
import ImgCard from "./components/ImgCard"
import img from "./images.json"




class App extends Component {

  state = {
    imageToClick: img
  };


  render() {
    return (
      <div>
        <Wrapper>
          <nav class="navbar">
            <ul>
              <li class="brand">
                <a href="/">Clicky Game</a>
              </li>
              <li class="">Click an image to begin!</li>
              <li>Score: 0 | Top Score: 0</li>
            </ul>
          </nav>

          {this.state.imageToClick.map(images => (
            <ImgCard
              id={images.id}
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
