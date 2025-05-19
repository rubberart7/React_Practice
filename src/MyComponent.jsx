import React, {useState, useEffect} from "react";

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added.")

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed")
        }

    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    // window.addEventListener("resize", handleResize);
    // if you use this method you will conintously add event listeners each time your page renders

    return (
        <>
            <p>Window width: {width} px</p>
            <p>Window height: {height} px</p>
        </>
    )
}

export default MyComponent;