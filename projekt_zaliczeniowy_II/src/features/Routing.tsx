import {RouteObject, useRoutes} from "react-router-dom";
import {Layout} from "../components/Layout.tsx";
import {ToDoList} from "./todo/ToDoList.tsx";
import {ToDoForm} from "./todo/ToDoForm.tsx";
import {ErrorPage} from "./error/ErrorPage.tsx";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/todo',
                element: <ToDoList/>
            },
            {
                path: '/todo/new',
                element: <ToDoForm/>
            },
            {
                path: '/todo/:id',
                element: <ToDoForm/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
]

export function Routing() {
    return useRoutes(routes);
}