import React, { Component } from 'react';

class CharSelector extends Component {

  static defaultProps = {
    chars : "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  }

  constructor(props){
    super(props);
    this.onclick = this.onclick.bind(this);
  }

  onclick(e){
    var target = e.target;

    fetch('http://localhost:5000/checkchar?c=' + e.target.id, {credentials : 'include'})
    .then(results => {
      results.json().then(json => {
        console.log(json)
        this.props.onCharSelected(json)
        target.disabled = true; //disable the button
      });
    });
  }

  render() {
    let char_buttons = this.props.chars.map((char, i) => {
      return (<button className = "CharButton btn btn-lg btn-primary" id = {char} key = {char} onClick = {this.onclick}>{char}</button>);
    });

    return (
      <div className="CharSelector">
        {char_buttons}
      </div>
    );
  }
}

export default CharSelector;
