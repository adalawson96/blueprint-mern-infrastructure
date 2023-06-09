import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ShopPage from '../ShopPage/ShopPage';
import HomePage from '../HomePage/HomePage';
import CartPage from '../CartPage/CartPage';
import DetailPage from '../DetailPage/DetailPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import AeropressPage from '../AeropressPage/AeropressPage';
import ChemexPage from '../ChemexPage/ChemexPage';
import FellowStaggPage from '../FellowStaggPage/FellowStaggPage';
import FrenchPressPage from '../FrenchPressPage/FrenchPressPage';
import EditReview from '../../components/EditReview/EditReview';
import Footer from "../../components/Footer/Footer";


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
              <Routes>
                {/* Route components in here */}
                <Route path="/orders/cart" element={<CartPage user={user} setUser={setUser}/>} />
                <Route path="/orders" element={<OrderHistoryPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/aeropress" element={<AeropressPage />} />
                <Route path="/chemex" element={<ChemexPage />} />
                <Route path="/fellowstagg" element={<FellowStaggPage />} />
                <Route path="/frenchpress" element={<FrenchPressPage />} />

                <Route path="/items/:itemsId" element={<DetailPage user={user} />} />
                <Route path="/items/reviews/:id" element={<EditReview user={user} />} />
                <Route path="/*" element={<Navigate to="/shop" />} />
              </Routes>
            <Footer />
          </>
          :
          <AuthPage setUser={setUser} />
        }
    </main>
  );
}
