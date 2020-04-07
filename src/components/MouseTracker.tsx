import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = (props) => {
    const [positions, setPositions] = useState({x:0, y:0})
    useEffect(() => {
        console.log('--- add  useEffect --- ', positions.x)

        const updateMouse = (e: MouseEvent) => {
            console.log('--- updateMouse ----', positions.x)
            setPositions({x: e.clientX, y: e.clientY})
        }
        document.addEventListener('click', updateMouse)

        return () => {
            console.log('--- remove  useEffect --- ', positions.x)
            document.removeEventListener("click", updateMouse)
        }
    }, [])

    console.log('---before render---', positions.x)

    return (
        <div>
            <p>X: {positions.x},  Y: {positions.y}</p>
        </div>
    )
}

export default MouseTracker
