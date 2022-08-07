import Home from '~/pages/Home';
import Following from '~/pages/Following';

//Can see until don't login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];

//Must be login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
