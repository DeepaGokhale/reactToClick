import React from 'react';
import ImageStock from "./components/ImageStock";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import shuffle from "./Shuffle"

// import Content from "./components/Content";
import './App.css';

class App extends React.Component{
  state = {
    imagesList: images
  }


  shuffleImages = () => {
    var imgArr = shuffle(this.state.imagesList);
    console.log(imgArr);
    this.setState({imagesList: imgArr});
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //Click handler decides the score and also shuffles the cards on click event
  clickHandler = clicked => {
    //if true means already clicked
    if(clicked)
      {
        //set the score to 0 and set all the images clicked to false(in other workds load the original images list)

      }
      else  // false so increse the score by 1
      {
        
      }
      //regardless images are shuffled

  }

  render() {
    console.log(this.state.imagesList);
    return (
      <Wrapper>
        { this.state.imagesList.map((image, i) => (
            <ImageStock
              key = {image.id}   
              id = {image.id}          
              image = {image.image}
              clicked = {image.clicked}
              // clickHandler = {this.clickHandler}
              shuffleImages = {this.shuffleImages}
              handleIncrement = {this.handleIncrement}
            />
          )
        )
        }
      </Wrapper>
    );
  }
}

export default App;
