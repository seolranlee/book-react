import React, { Component } from 'react';

const UserContext = React.createContext({
  username: 'unknown',
  helloCount: 0,
  onHello: () => {}
})

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'mike',
      helloCount: 0,
      onHello: this.onHello
    }
  }

  onHello = () => {
    const { helloCount } = this.state
    this.setState({
      helloCount: helloCount + 1
    })
  }
  
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div>
        </UserContext.Provider>
      </div>
    );
  }
}

function Profile() {
  return <Greeting/>
}
// class Profile extends Component {
//   shouldComponentUpdate(){
//     return false
//   }
//   render() {
//     console.log('profile reRendering')
//     return <div>
//       <Greeting/>
//     </div>
//   }
// }

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
      {value => (
        <>
          <p>{value.username}님 안녕하세요</p>
          <p>인사 횟수: {value.helloCount}</p>
          <button onClick={value.onHello}>인사하기</button>
        </>
      )}
    </UserContext.Consumer>
  )
    
}
export default App;