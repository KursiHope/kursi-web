import { Route, Routes } from "react-router-dom";

import App from "../App";
import Blog from "../page/Blog";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
        </Routes>
    );
};

export default AppRoutes;