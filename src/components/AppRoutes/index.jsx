import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Header from "../../layouts/components/Header";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/posts" element={ <Posts /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;