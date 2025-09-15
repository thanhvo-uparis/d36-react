import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import PostDetail from "../../pages/PostDetail";
import Header from "../../layouts/components/Header";
import DefaultLayout from "../../layouts/DefaultLayout";
import AuthLayout from "../../layouts/AuthLayout";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Contact from "../../pages/Contact";
import Privacy from "../../pages/Privacy";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <DefaultLayout /> }>
                    <Route index element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/posts" element={ <Posts /> }/>
                    <Route path="/post/:id" element={ <PostDetail /> }/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/privacy" element={<Privacy />}/>
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;