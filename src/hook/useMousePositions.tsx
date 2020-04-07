import React, { useState, useEffect } from 'react'
// 复用hook  必须use开头
// useState是完全隔离的
const useMousePosition = () => {
    const [positions, setPositions] = useState({x:0, y:0})
    useEffect(() => {
        console.log('--- add  useEffect --- ', positions.x)

        const updateMouse = (e: MouseEvent) => {
            setPositions({x: e.clientX, y: e.clientY})
        }
        document.addEventListener('mousemove', updateMouse)

        return () => {
            console.log('--- remove  useEffect --- ', positions.x)
            document.removeEventListener("mousemove", updateMouse)
        }
    }, [])
    return positions
}

export default useMousePosition
