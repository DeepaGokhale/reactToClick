// import React from "react";
// import images from "./images.json";

function Shuffle(images){
    let arr = [];
    let imgArr = [];
    //pick1 random number from the array for 50 times and try building the shuffled array
    var randomArr = [];
  
    //create a random array with 50 nos
    for (let m = 0; m < images.length; m++)
    {
        arr.push(m);
        for (let x = 0; x < images.length; x++)
        {
            arr.push(x);
            for (let y = 0; y < images.length; y++)
            {
                arr.push(y);
            }
        }
    }

    //console.log(arr);

    for (let counter = 0; counter < arr.length; counter++)
    {
        let r = Math.floor(Math.random() * (arr.length-1)); //any number for array index fr arr
        // console.log(r);
        let c = arr[r]; // new random number between 1-(imahes.length)
        //console.log(randomArr);
        if (!randomArr.includes(c) && randomArr.length < (images.length + 1))
        {
          randomArr.push(c); //arr that keeps the ids for images
          imgArr.push(images[c]);
        }
        else if(randomArr.length >= images.length)
        {
          return imgArr;
        }      
    }
    //console.log(imgArr);
    return imgArr;
  }

  export default Shuffle;