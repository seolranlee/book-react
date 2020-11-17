// import React from 'react';

// class Title extends React.PureComponent {
//     render() {
//         console.log('rendering')
//         const { title } = this.props
//         return <h3>{title}</h3>
//     }
// }

// export default Title;

import React from 'react';

function Title(props) {
    console.log('rendering')
    const onClick = () => {
        props.title = 'abc'
    }
    return (
        <div>
            <button onClick={onClick}>자식이 부모로부터 받은 속성값을 직접 변경하려고 하면?</button>
            <button onClick={props.onEditTitle}>부모가 변경하는 메서드를 내려받아서 실행</button>
            <h3>{props.title}</h3>
        </div>
    )
}

export default React.memo(Title);