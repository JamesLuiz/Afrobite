/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Nearby } from './pages/Nearby';
import { Search } from './pages/Search';
import { Restaurant } from './pages/Restaurant';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Track } from './pages/Track';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';

const Layout = () => (
  <div className="bg-background text-on-background font-body-md min-h-screen pb-[80px] md:pb-0 pt-[64px]">
    <Navigation />
    <main className="max-w-[1200px] mx-auto w-full">
      <Outlet />
    </main>
  </div>
);

const NoNavLayout = () => (
  <div className="bg-background text-on-background font-body-md min-h-screen">
    <Outlet />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/nearby" element={<Nearby />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<NoNavLayout />}>
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/track" element={<Track />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
