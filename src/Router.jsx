import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Page/Home/Home";
import AccomadationPage from "./Page/Accomodation/AccomadationPage";






const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<AccomadationPage/>}/>
            </Routes>

        </BrowserRouter>)

}

export default Router