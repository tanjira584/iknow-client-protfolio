import "./App.css";
import HomePage from "./components/page/HomePage";
import { Routes, Route } from "react-router-dom";
import SingleProject from "./components/page/SingleProject";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/:page" element={<HomePage></HomePage>}></Route>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route
                    path="/project/:page"
                    element={<SingleProject></SingleProject>}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
