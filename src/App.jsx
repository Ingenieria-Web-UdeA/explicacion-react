import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import PrivateLayout from './layouts/PrivateLayout';
import { IndexPage } from './pages';
import IndexAdminPage from './pages/admin';
import Nomina from './pages/admin/nomina';
import { Page2 } from './pages/page2';
import { Page3 } from './pages/page3';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<PrivateLayout />}>
          <Route path='/admin' element={<IndexAdminPage />} />
          <Route path='/admin/nomina' element={<Nomina />} />
        </Route>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/pagina2' element={<Page2 />} />
          <Route path='/pagina3' element={<Page3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
