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
        songs: [
          {
            name: 'Beat if',
            duration: 1345
          }, 
          {
            name: 'Cannelloni Makaroni',
            duration: 1236
          }, 
          {
            name: 'Rosa helikopter',
            duration: 70000
          }
        ]
      },
      {
        name: 'Discover Weekly 1',
        songs: [
          {
            name: 'Le song',
            duration: 1345
          }, 
          {
            name: 'The song',
            duration: 1236
          }, 
          {
            name: 'Sangen',
            duration: 70000
          }
        ]
      },
      {
        name: 'Discover Weekly 2',
        songs: [
          {
            name: 'Le song',
            duration: 1345
          }, 
          {
            name: 'The song',
            duration: 1236
          }, 
          {
            name: 'Sangen',
            duration: 70000
          }
        ]
      },
      {
        name: 'Discover Weekly 3',
        songs: [
          {
            name: 'Le song',
            duration: 1345
          }, 
          {
            name: 'The song',
            duration: 1236
          }, 
          {
            name: 'Sangen',
            duration: 70000
          }
        ]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{display: 'inline-block'}}>
        <h2 style={defaultStyle}>        
        {this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum += eachSong.duration
    }, 0);
    return (
      <div style={{display: 'inline-block'}}>
        <h2 style={defaultStyle}>        
        {Math.round(totalDuration/60)} hours</h2>
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
    let playlist = this.props.playlist
    return (
      <div style={{...defaultStyle, width: '20%', display: 'inline-block'}}>
        <img src="" alt="" />
        <h3>{playlist.name}</h3>
        <ul>
        {playlist.songs.map(song =>
          <li>{song.name}</li>
        )}
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
    setTimeout(() => {
      this.setState({serverData: fakeData})
    }, 1000);    
  }
  render() {
    return (
      <div className="App">
      {this.state.serverData.user ? 
      <div>
        <h1>{this.state.serverData.user.username}'s Playlist</h1>
        <PlaylistCounter playlists={this.state.serverData.user.playlists} />
        <HoursCounter playlists={this.state.serverData.user.playlists} />
        <Filter />
        {
          this.state.serverData.user.playlists.map(playlist =>
            <Playlist playlist={playlist} />
          )
        }
      </div> : 'Loading...'
      }
      </div>
    );
  }
}

export default App;
