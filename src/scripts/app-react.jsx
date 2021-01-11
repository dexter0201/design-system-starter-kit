import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="slds-p-around--large slds-container--center slds-container--small landing">
          <h1 className="slds-text-heading--large">
            Welcome to the Design System Starter Kit (with React)
          </h1>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
