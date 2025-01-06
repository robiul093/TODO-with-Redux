import App from '@/App';
import Tasks from '@/pages/task';
import Users from '@/pages/users';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                index: true,
                element: <Tasks></Tasks>
            },
            {
                path: "/users",
                element: <Users></Users>
            }
        ],
    }
]);

export default routes