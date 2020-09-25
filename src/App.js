import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navb from "./component/Navb"
import Qrread from "./component/Qrread"
import Stopwatch from "./component/Stopwatch"
import Backdrop from "./component/Backdropmodal"
function App() {
    return (
        <div className="App">
            <Navb />
            <br />
            <br />
            <br />
            <div>
                <Backdrop />
                {/* <Qrread /> */}
                <Stopwatch />
            </div>
        </div>
    )
}

export default App
