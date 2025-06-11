import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movies";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies">
                        <Route index element={<Movies />} />
                        <Route path=":id" element={<SinglePage />} />
                        <Route path="*" element={<NotFound />} /> 
                    </Route>
                    <Route path="*" element={<NotFound />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
