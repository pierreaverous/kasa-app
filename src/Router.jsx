import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./Page/Home/Home";
import AccomadationPage from "./Page/Accomodation/AccomadationPage";
import Apropos from "./Page/APropos/Apropos";
import ErrorPage from "./Page/ErrorPage404/PageErorr404";






const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<AccomadationPage/>}/>
                <Route path="/apropos" element={<Apropos/>}/>
                <Route path="/error" element={<ErrorPage/>}/>
            </Routes>

        </BrowserRouter>)

}

export default Router