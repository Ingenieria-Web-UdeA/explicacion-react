import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'layouts/Layout';
import PrivateLayout from 'layouts/PrivateLayout';
import { IndexPage } from 'pages';
import IndexAdmin from 'pages/admin';
import { Page2 } from 'pages/page2';
import { Page3 } from 'pages/page3';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/pagina2' element={<Page2 />} />
        <Route path='/pagina3' element={<Page3 />} />
      </Route>
      <Route path='/admin' element={<PrivateLayout />}>
        <Route path='/admin' element={<IndexAdmin />} />
      </Route>
    </Routes>
    <ToastContainer />
  </BrowserRouter>
);

export default App;
