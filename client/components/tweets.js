import React from 'react';

class Tweets extends React.Component{
  constructor() {
      super();
      //set the state here in the constructor
  }//constructor

  componentWillMount() {
      console.log("Tweets : Component WILL mount");
  }

  componentDidMount() {
          console.log("Tweets : Component DID mount");
  }

  render(){
    console.log("tweets render")
    return(
      <div>
        <div>{this.props.userName}</div>
        <div>{this.props.body}</div>
      </div>
    );

  }
}
export default Tweets;
