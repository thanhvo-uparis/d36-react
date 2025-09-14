import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Header from "../../layouts/components/Header";
import DefaultLayout from "../../layouts/DefaultLayout";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <DefaultLayout /> }>
                    <Route index element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/posts" element={ <Posts /> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;