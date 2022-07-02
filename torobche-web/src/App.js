import "./App.css";
import SearchPage from "./Component/SearchPage/SearchPage";
import SignUpandLogin from "./Component/signUpandLogin/signUpandLogin";
import ShowProductPage from "./Component/MainPage/ShowProductPage";
import DetailPage from "./Component/DetailPage/DetailPage";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function App() {
    const [cookies] = useCookies(["token"]);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            // cookies.token ? (
                                <Navigate  to={"/search"} />
                            // ) : (
                            //     <Navigate  to={"/signup-or-login"} />
                            // )
                        }
                    />
                    <Route
                        path="/signup-or-login"
                        element={<SignUpandLogin />}
                    />
                    <Route
                        path="/search"
                        element={
                            // cookies.token ? (
                                <SearchPage />
                            // ) : (
                            //     <Navigate  to={"/signup-or-login"} />
                            // )
                        }
                    />
                    <Route
                        path="/products"
                        element={
                            cookies.token ? (
                                <ShowProductPage />
                            ) : (
                                <Navigate  to={"/signup-or-login"} />
                            )
                        }
                    />
                    <Route
                        path="/products/detail"
                        element={
                            cookies.token ? (
                                <DetailPage />
                            ) : (
                                <Navigate  to={"/signup-or-login"} />
                            )
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
