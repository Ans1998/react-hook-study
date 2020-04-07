import React, { useState, useEffect, useRef, useContext } from 'react'
import useMousePosition from "../hook/useMousePositions";

import { TheContext } from '../App';

const LikeButton: React.FC = (props) => {
    // 变量名    修改变量方法
    const [like, setLike] = useState(0)

    const [obj, setObj] = useState({like: 0, open: false})
    // ref保持着唯一的状态（所以对ref取值赋值都是最后的状态也是最终的数据）
    const likeRef = useRef(0)
    const didMountRef = useRef(false)
    const domRef = useRef<HTMLInputElement>(null)

    const handleClick = (n: number) => {
        setLike( n + 1 )
        likeRef.current++
    }
    const positions = useMousePosition()

    function handleAlertClick() {
        setTimeout(() => {
            alert("you cliked on ---" + likeRef.current)
        }, 3000)
    }


    const Theme = useContext(TheContext)
    console.log(Theme)

    const style = {...Theme}

    useEffect(() => {
        console.log('document title effect is running')
        // 页面加载、页面dom更新会触发
        document.title = '点击了' + like + '次'
    }, [like])

    useEffect(() => {
        if (didMountRef.current) {
            console.log('this is updated')
        } else {
            didMountRef.current = true
        }
    })
    useEffect(() => {
        if (domRef && domRef.current) {
            console.log(domRef.current.focus())
        }
    })

    return (
        <div style={style}>
            <div>
                <input type="text" ref={domRef} />
            </div>
            <button onClick={() => {
                handleAlertClick()
            }}>
                Alert！
            </button>
            <p>
                显示 LikeButton-useMousePosition X:{positions.y}，Y:{positions.y}
            </p>
            <button onClick={() => {
                handleClick(like)
            }}>
                {like}
            </button>

            <button onClick={() => {
               setObj({like: obj.like+1, open: obj.open})
            }}>
                {obj.like}
            </button>

            <button onClick={() => {
                setObj({like: obj.like+1, open: !obj.open})
            }}>
                {
                    obj.open? 'ON': 'OFF'
                }
            </button>

        </div>

    )
}
export default LikeButton
