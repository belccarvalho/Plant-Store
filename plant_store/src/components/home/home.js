import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage:
              "url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/buy-house-plants-online-2-1586275789.jpg?resize=768:*)", backgroundRepeat:"no-repeat", width: "100%", height: "100vh", backgroundSize:"cover"}}
        >
            <h1>Welcome to my online Shop!</h1>
            <h2>Take a look at our products →</h2>
        </div>
      </div>
    );
  }
}
