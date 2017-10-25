import React, { Component } from 'react';

class WinLossIndicator extends Component {

  constructor(props){
    super(props);
  }

  render() {

    let statusMessage = null;
    if (this.props.gameStatus === -1){
      statusMessage =  <div className="alert alert-danger"> YOU LOST! </div>;
    }
    else if (this.props.gameStatus === 1){
      statusMessage = <div className="alert alert-success">  YOU WIN! </div>;
    }

    return (
      <div className="WinLossIndicator">
        {statusMessage}
        Games Won : {this.props.won}
        <br />
        Games Lost : {this.props.lost}
      </div>
    );
  }
}

export default WinLossIndicator;
