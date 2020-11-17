import React, { Component } from 'react';

const UserContext = React.createContext('unknown')

class App extends Component {
  state = {
    username: '',
  }
  onChangeName = (e) => {
    const username = e.target.value
    this.setState({ username })

  }
  render() {
    const { username } = this.state
    return (
      <div>
        <UserContext.Provider value={username}>
          <Profile />
        </UserContext.Provider>
        <input type="text" value={username} onChange={this.onChangeName}/>
      </div>
    );
  }
}

class Profile extends Component {
  shouldComponentUpdate(){
    return false
  }
  render() {
    console.log('profile reRendering')
    return <div>
      <Greeting />
    </div>
  }
}

// class Profile extends React.PureComponent {
  
//   render() {
//     console.log('profile reRendering')
//     return <div>
//       <Greeting />
//     </div>
//   }
// }

function Greeting() {
  return (
    <UserContext.Consumer>
      {(username) => `${username}님 안녕하세요`}
    </UserContext.Consumer>
  )
    
}
export default App;