// ESM문법을 이용해 필요한 모듈을 가져온다
import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button.js'

// 렌더 함수만 필요한 경우에는 함수형 컴포넌트로 작성하는게 좋다
function Container() {
    return React.createElement(
        'div',
        null,
        React.createElement('p', null, '버튼을 클릭해 주세요.'),
        React.createElement(Button, {label: '좋아요'}),
        React.createElement(Button, {label: '싫어요'}),
    )
}
const domContainer = document.querySelector('#react-root')
ReactDOM.render(React.createElement(Container), domContainer)