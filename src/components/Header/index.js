import React from "react";
import "./Header.css";

function Header(props) {
    // <div className = "header"> {props.children} </div>
    return (
        <div className="jumbotron text-center">
          <h1>React Recipes</h1>
          {/* <a target="_blank" rel="noopener noreferrer" href="http://www.recipepuppy.com/about/api/">
            Powered by Recipe Puppy
          </a> */}
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

export default Header;


