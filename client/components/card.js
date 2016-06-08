import React from 'react';

class Card extends React.Component{
  constructor() {
      super();
      //set the state here in the constructor
  }//constructor

  componentWillMount() {
      console.log("Card : Component WILL mount");
  }

  componentDidMount() {
          console.log("Card : Component DID mount");
  }

  render(){
    console.log("Card render")
    return(
      <div>
        <div>{this.props.title}</div>
      </div>
    );

  }
}

export default Card;
