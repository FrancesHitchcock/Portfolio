import {Routes, Route} from "react-router-dom"
import Project from "./pages/Project"

import Overview from "./pages/Overview"

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Overview />} />
            <Route path="/:title" element={<Project />} />
        </Routes>   
    )
}

export default App
