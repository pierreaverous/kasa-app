import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./Page/Home/Home";
import AccomadationPage from "./Page/Accomodation/AccomadationPage";
import Apropos from "./Page/APropos/Apropos";






const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<AccomadationPage/>}/>
                <Route path="/apropos" element={<Apropos/>}/>
            </Routes>

        </BrowserRouter>)

}

export default Router