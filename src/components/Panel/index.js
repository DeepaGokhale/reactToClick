import React from "react";
import "./Panel.css";

// componentDidMount() {
//   this.score = 0;
//   this.bestscore = 0;
// }

// handleIncrement increments this.state.count by 1
// handleIncrement = () => {
//   // We always use the setState method to update a component's state
//   this.setState({ count: this.state.count + 1 });
// };

function Panel(props) {

    // <div className = "header"> {props.children} </div>
    return (
        <div className="panel panel-default">
          <div className="panel-heading"><h1 className="left">Best Score: {props.bestScore}</h1><h1 className="right">Score: {props.score}</h1></div>
          {/* <div className="panel-body"><h1 className="left">{props.bestScore}</h1><h1 className="right">{props.score}</h1></div> */}
        </div>
      );
    }

//     <div class="jumbotron-fluid d-flex justify-content-center text-white rounded bg-dark">
//           <div class="col col-lg-2">
//               <h3 class="left">
//                   <ul>
//                       <u>Best</u>
//                   </ul>
//                   <ul id="maxScore"></ul>
//               </h3>
//           </div>            
//           <div class="col col-lg-8">
//               <h2 id="mainMenu" class="display-4">Memory Game</h2>
//               <p></p>
//               <p class="main"> 
//                 <!-- this is where the code go for all the images being displayed -->
//                 <!--  root is where stugg gets filled from App.js -->
//                 <!--  images are placed from App.js-->
                
//                 <div id="root"></div>
//               </p>
//           </div>
//           <div class="col col-lg-2">
//               <h3 class="right">
//                   <ul><u>Score</u></ul>
//                   <ul id="score"></ul>
//               </h3>
//           </div>
          
//       </div>
// }

export default Panel;


