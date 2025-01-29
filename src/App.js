import './App.css';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './layouts/PageNotFound';
import Gallery from './components/Gallery';
import Layout from './layouts/Layout';
import Products from './components/Products';
import Inputs from './components/Inputs';
import Header from './layouts/Header';
import Contact from './components/Contact';
import Services from './components/Service';
import Signup from './components/Signup';
import Search from './components/Search';
import Images from './components/Images';
import UserNew from './components/UserNew';
import Register from './components/Register';
import DataStore from './components/DataStore';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout><Header /></Layout>} />
        <Route path='/gallery' element={<Layout> <Gallery /> </Layout>} />
        <Route path='/cards' element={<Layout> <Products /> </Layout>} />
        <Route path='/signup' element={<Layout><Signup /> </Layout>} />
        <Route path='/inputs' element={<Layout><Inputs /> </Layout>} />
        <Route path='/contact' element={<Layout><Contact /> </Layout>} />
        <Route path='/services' element={<Layout><Services /> </Layout>} />
        <Route path='/usernew' element={<Layout><UserNew /> </Layout>} />
        <Route path='/search' element={<Layout><Search /> </Layout>} />
        <Route path='*' element={<Layout> <PageNotFound /> </Layout>} />
        <Route path='/images' element={<Layout> <Images /> </Layout>} />
        <Route path='/register' element={<Layout> <Register /> </Layout>} />
        <Route path='/datastore' element={<Layout> <DataStore /> </Layout>} />





      </Routes>






    </>
  );
}

export default App;
