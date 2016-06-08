import React from 'react';
import Card from './card.js';
import Tweet from './tweets.js';

class App extends React.Component {

        constructor() {
            super();
            //set the state here in the constructor
            this.state = {
                    tweets: [
                      {
                        "userName": "Angad",
                        "body": "What is up"
                      },
                      {
                        "userName": "Angad",
                        "body": "What is up"
                      }
                    ],
                    startedEditing: false,
                    valid: true,
                    inputUsername: '',
                    inputBody: ''
                } //state
        }//constructor

        componentWillMount() {
            console.log("Component WILL mount");
        }

        componentDidMount() {
                console.log("Component DID mount");
        }

        // controlled components
        changeUsername(e) {
          this.setState({ inputUsername: e.target.value, valid: e.target.value !== '', startedEditing: true });
        }

        // controlled components
        changeBody(e) {
          this.setState({ inputBody: e.target.value });
        }
        // add to the tweets state, and clear out the values
        tweet(){
          const newTweets = this.state.tweets;
          newTweets.push({ userName: this.state.inputUsername, body: this.state.inputBody });
          this.setState({ inputUsername: '', inputBody: '' , tweets: newTweets });
        }

      /*
       * This function is used to render html elements on the
       * DOM
       */
        render() {
            var tweets=this.state.tweets.map((tweet,index)=>{
                return <Tweet key={index} userName={tweet.userName} body={tweet.body} />
              })
            return (
                    <div>
                      {/* first part of tutorial */}
                      <Card title="React tutorial from the D team"/>
                      {tweets}

                      {/* second part of tutorial */}
                      <div>
                        <div>
                          <input className={this.state.startedEditing ? (this.state.valid ? 'valid':'invalid') : ''} value={this.state.inputUsername} onChange={this.changeUsername.bind(this)} />
                          <input value={this.state.inputBody} onChange={this.changeBody.bind(this)} />
                        </div>
                        <div>
                          <button onClick={this.tweet.bind(this)}>Tweet</button>
                        </div>
                      </div>
                    </div>
            );

        }
    }
    // one file has only one default export, good convention
export default App;
