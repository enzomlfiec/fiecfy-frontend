import React from 'react'

const ProgressTipPopUp = ({ progressValue, show, fullProgress }) => {
    // function limitedProgressValue(){
    //     if(progressValue > fullProgress){
    //         return fullProgress
    //     }else{
    //         return progressValue
    //     }
    // }

    const [mousePosition, setMousePosition] = React.useState({
        x: 0,
        y: 0
    })

    React.useEffect(() => {
        if (!show) return
        const handleMouseMove = (event) => {
            if (progressValue > fullProgress) {
                console.log(progressValue)
                setMousePosition({
                    x: event.clientX,
                    y: event.clientY
                })
            } else {
                setMousePosition({
                    x: event.clientX,
                    y: event.clientY
                })
            }
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [show,fullProgress,progressValue])
    return (
        <div
            className={`bg-bg_02 absolute p-2 rounded-lg ${show ? "visible" : "hidden"}`}
            style={{
                left: mousePosition.x - 20,
                top: "92%"
            }}
        >
            <p>{progressValue}</p>
        </div>
    )
}
export default ProgressTipPopUp