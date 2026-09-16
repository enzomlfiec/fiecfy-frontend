import React from 'react'

const ProgressTipPopUp = ({ progressValue, show}) => {
    let [mousePosition, setMousePosition] = React.useState({
        x: 0,
        y: 0
    })

    React.useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    return (
        <div
            className={`bg-bg_02 absolute p-2 rounded-lg ${show ? "visible" : "hidden"}`}
            style={{
                left: mousePosition.x - 20,
                top: "93%"
            }}
        >
            <p>{progressValue}</p>
        </div>
    )
}
export default ProgressTipPopUp