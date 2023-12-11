import {RouteObject} from 'react-router-dom';
import { Frame } from './frame';
import Home from './pages/home/Home';
import LogInForm from './pages/logIn/LogInForm';

export const routers:RouteObject[] = [
    {
        path:"home",
        element: <Frame/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
        ]
    },
    {
        path:"",
        element: <LogInForm/>,
    },
];