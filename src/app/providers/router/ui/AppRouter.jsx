import {Route, Routes} from "react-router-dom";
import {MainPage} from "../../../../pages/MainPage/index.js";
import {ProductPage} from "../../../../pages/ProductPage/index.js";
import {memo} from "react";

export const AppRouter = memo(() => {
    return (
        <>
            <Routes>
                <Route key={'/'} path={'/'} element={<MainPage />} />
                <Route key={'/product'} path={'/product/:id'} element={<ProductPage />} />
                <Route key={'*'} path={'*'} element={<div>Такой страницы нет</div>} />
            </Routes>
        </>
    )
})