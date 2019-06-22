import React from 'react';
import ImageStock from "./components/ImageStock";
import Wrapper from "./components/Wrapper";
import Panel from "./components/Panel";
import images from "./images.json";
import shuffle from "./Shuffle"
// import Shake from "react-shake-effect"

// import Content from "./components/Content";
import './App.css';

class App extends React.Component{
  state = {
    imagesList: images
  }

  componentDidMount() {
    this.score = 0;
    this.bestscore = 0;
  }

  shuffleImages = () => {
    let imgArr = shuffle(this.state.imagesList);
    //console.log(imgArr);
    this.setState({imagesList: imgArr});
  }

  handleIncrement = () => {
    // console.log( this.state.score);
    this.setState({ count: this.state.score + 1 });
  };

  resetArray()
  {
    let imgArr = this.state.imagesList;
    let resetArr = [] ;
    //set all the items in array to Clicked=  false
    imgArr.forEach(img => {
      let item = {id: img.id, image: img.image, clicked: false};
      resetArr.push(item);      
    });
    imgArr = shuffle(resetArr);
    this.setState({imagesList: imgArr});   
    //console.log(imgArr);
  }

  //Click handler decides the score and also shuffles the cards on click event
  clickHandler = (e, img) => {
    //if true means already clicked
    //console.log(img);
    if(img.clicked)
    {
      // Wrapper.  animation: shake 0.5s; 
      //set the score to 0 and set all the images clicked to false(in other workds load the original images list)
      this.setState({bestscore:( (this.state.score > this.state.bestscore) ? this.state.score : this.state.bestscore) });
      this.setState({score: 0});   
      this.resetArray();
    }
    else  // false so increse the score by 1
    {
      let newList = this.state.imagesList;
      //console.log("new List:");
      let updList = newList.filter(image => image.id !== img.id);
      //console.log("Updt List:" , updList);
      //set the new item with clicked = true
      let imageClicked = { id: img.id, image: img.image, clicked: true };
      console.log(imageClicked.id);
      // //add the item to the array
      updList.push(imageClicked);      
      //set the new array
      console.log(updList);
      this.setState({imagesList: updList});          
      //console.log(imgArr);
      this.handleIncrement();
    }
      //regardless images are shuffled
  }

  render() {
    //console.log(this.state.imagesList);
    return (      
      <div>
      <Wrapper>
        { this.state.imagesList.map((image, i) => (
            <ImageStock
              key = {image.id}   
              id = {image.id}          
              image = {image.image}
              clicked = {image.clicked}
              clickHandler = {this.clickHandler}
              // shuffleImages = {this.shuffleImages}
              // handleIncrement = {this.handleIncrement}
              />
            )
          )
        }
      </Wrapper>
      <Panel bestscore={this.state.bestscore}  score={this.state.score} /> 
      </div>
    );
  }
}

export default App;

