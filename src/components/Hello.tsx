import React from 'react'

interface IHelloProps {
    msg?: string
}

// const Hello: React.FunctionComponent<IHelloProps> = (props) => {
//     return <h2> {props.msg} </h2>
// }
const Hello: React.FC<IHelloProps> = (props) => {
    return <h2> {props.msg} </h2>
}

Hello.defaultProps = {
    msg: '默认值'
}

export default Hello
