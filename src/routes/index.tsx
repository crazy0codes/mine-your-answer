import { createBrowserRouter } from "react-router-dom";
import { StartPage } from "../pages/startPage";
import { MainLayout } from "../layouts/mainLayout";
import { GamePage } from "../pages/gamePage";
import { ResultPage } from "../pages/resultPage/index.tsx"

export const Routes = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                index: true,
                element: <StartPage />,
            },
            {
                path: "/startgame",
                element: <StartPage />,
            },
            {
                path: "/game",
                element: <GamePage/>,
            },
            {
                path: "/result",
                element: <ResultPage/>,
            },
            {
                path: "*",
                element: (
                    <h1>Seems you discovered a page that we didn't even created 🤣</h1>
                ),
            },
        ]
    }
]);
