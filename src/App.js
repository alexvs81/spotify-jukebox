import React, { Component } from 'react';
import './App.css';


let defaultStyle = {
  color: 'white'
};
let fakeData = {
  user: {
    username: 'Alex',
    playlists: [
      {
        name: 'My favorites',
        songs: ['Beat if', 'Cannelloni Makaroni', 'Rosa helikopter']
      },
      {
        name: 'Discover Weekly 1',
        songs: ['Le song', 'The song', 'Sangen']
      },
      {
        name: 'Discover Weekly 2',
        songs: ['Le song', 'The song', 'Sangen']
      },
      {
        name: 'Discover Weekly 3',
        songs: ['Le song', 'The song', 'Sangen']
      }
    ]
  }
}

class Aggregate extends Component {
  render() {
    return (
      <div style={{display: 'inline-block'}}>
        <h2 style={defaultStyle}>
        {this.probs.playlists && this.probs.playlists.length} Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img src="" alt="" />
        <input type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '20%', display: 'inline-block'}}>
        <img src="" alt="" />
        <h3>Playlist Name</h3>
        <ul>
        <li>Song 1</li>
        <li>Song 2</li>
        <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {serverData: {}}
  }
  componentDidMount() {
    this.setState({serverData: fakeData})
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.serverData.user && this.state.serverData.user.username}'s Playlist</h1>
        <Aggregate playlists={this.state.serverData.user && this.state.serverData.user.playlists} />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
