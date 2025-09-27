// import { useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout';
// import Blogs from './components/Blogs';
// import AstroShopProduct from './components/AstroShopProduct';

// function App() {

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         <Route path="/articles"
//           element={<Blogs />} />
//         <Route path="/astro-shop"
//           element={<AstroShopProduct />} />

//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Blogs from './components/Blogs';
import AstroShopProduct from './components/AstroShopProduct';
import ProductShopDetails from './components/ProductShopDetails';
import ProductCheckout from './components/ProductCheckout';
import ServicesDetails from './components/Common/ServicesDetails';
import DetailsBlogs from './components/DetailsBlogs';
import ContactUs from './components/ContactUs';
import TermsCondition from './components/TermsCondition';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs';

import { SUBFOLDER_NAME } from './components/Common/https';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/Admin/DashboardLayout';
import DashboardPage from './components/Admin/DashboardPage';
import Login from './components/Admin/Login';
import AddCategory from './components/Admin/AddCategory';
import ListCategory from './components/Admin/ListCategory';
import AddSubCategory from './components/Admin/AddSubCategory';
import AddProduct from './components/Admin/AddProduct';
import ListProduct from './components/Admin/ListProduct';
import PopularServiceDetail from './components/Common/PopularServiceDetail';
import ConsultDetails from './components/Common/ConsultDetails';
import Faq from './components/Faq';
import Disclaimer from './components/Disclaimer';
;
function App() {
  return (
    <BrowserRouter basename={SUBFOLDER_NAME}>
      <Routes >
        {/* admin panel routes */}

        <Route
          path="/add-category"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AddCategory></AddCategory>
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/list-category"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ListCategory></ListCategory>
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        <Route
          path="/add-subcategory"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AddSubCategory></AddSubCategory>
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/list-subcategory"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ListCategory></ListCategory>
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        <Route
          path="/add-product"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AddProduct></AddProduct>
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/list-product"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ListProduct></ListProduct>
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        {/* Protected Routes */}
        <Route
          path="/list"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                {/* <List /> */}
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Public Route */}
        <Route path="login" element={<Login />} />

        {/* admin panel routes end */}


        {/* website route */}
        <Route path="/" element={<Layout />} />
        <Route path="/service-details/:category" element={<PopularServiceDetail />} />

        <Route path="service-details/:category/:subcategory" element={<ServicesDetails />} />
        <Route path="consult/:category/:subcategory" element={<ConsultDetails />} />
        <Route path="/product-details" element={<ProductShopDetails />} />
        <Route path="/product-checkout" element={<ProductCheckout />} />
        <Route path="/articles" element={<Blogs />} />
        <Route path="/astro-shop" element={<AstroShopProduct />} />
        <Route path="/astro-shop/:category" element={<AstroShopProduct />} /> {/* Category-based route */}

        <Route path="/blog/:slug" element={<DetailsBlogs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
