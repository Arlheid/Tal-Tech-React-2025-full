import Home from './pages/Home';
import Login from './pages/Login';
import CartPage from './pages/ShopPage';
import Adquirido from './pages/Comprado';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import Contact from './pages/Contact';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/shop', element: <PrivateRoute><CartPage /></PrivateRoute> },
  { path: '/Comprado', element: <Adquirido /> },
  { path: '/producto/:id', element: <ProductDetail /> },
  { path: '/login', element: <Login /> },
  { path: '/contact', element: <Contact /> }, 
  { path: '*', element: <NotFound /> },
];

export default routes;
