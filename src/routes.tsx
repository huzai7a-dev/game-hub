import {
    createBrowserRouter,
} from "react-router-dom";
  
import Layout from "./pages/Layout";
import GamesPage from './pages/Games';
import GamesDetails from './pages/GameDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            { index: true, element: <GamesPage /> },
            { path:'/games/:id', element: <GamesDetails />}
        ]
    }
]);


export default router