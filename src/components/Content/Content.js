import React from "react";
import "./Content.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Content() {
  return (
    <content>
            <div class="row">
              <div class="col col-lg-2 left"></div>
              <div class="col col-lg-8 p-3 p-md-5">
                  <h2>What is this game for?</h2>
                  <p>
                      Test your memory by clicking the images only once or if you want to kill time and be "Click Happy!"
                  </p>
                  <h2>How to play?</h2>
                  <p>
                      <li>
                          Click each imaage only once and only once.
                      </li>
                  </p>
                  <h2>The rules</h2>
                  <p>
                     Click each imaage only once and only once..to gain a point. If you clicked it twice you lost! <b>Now go figure!</b>
                  </p>
                  <p id="copyright">
                      © 2019 Copyright: Deepa Gokhale-Bhujle
                  </p>
              </div>
              <div class="col col-lg-2 right"></div>
          </div>
    </content>
  );
}

export default Content;
