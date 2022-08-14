import config from '~/config';

//Layouts
import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Live from '~/pages/Live/Live';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
// import Search from '~/pages/Search/Search';

//Can see until don't login
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    // { path: config.routes.search, component: Search, layout: null },
];

//Must be login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
