import React from 'react';
import './App.sass';
import Button from './Components/Button';

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      clicked: false,
    }
  }
  
  showUnderline = (e) => {
    e.preventDefault();
    this.setState ({
      clicked: e.target.name
    });
  }

  render () {
    return (
      <div className="btn_wrap">
        <Button 
          className={`${this.state.clicked === "left" ? "clickedBtn" : "unclickedBtn"} `}
          name="left"
          btnClicked={this.showUnderline}
        />
        <Button 
          className={`${this.state.clicked === "right" ? "clickedBtn" : "unclickedBtn"} `}
          name="right"
          btnClicked={this.showUnderline}
        />
      </div>
    )
  }
}


export default App;
