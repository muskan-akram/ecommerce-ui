import React, { useState } from 'react';
import { ViewState } from './types';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  const renderView = () => {
    switch (currentView) {
      case 'HOME':
        return <HomePage onViewChange={setCurrentView} />;
      case 'LIST_GRID':
      case 'LIST_ROW':
        return <ProductListingPage viewType={currentView} onViewChange={setCurrentView} />;
      case 'DETAIL':
        return <ProductDetailPage onViewChange={setCurrentView} />;
      case 'CART':
        return <CartPage onViewChange={setCurrentView} />;
      default:
        return <HomePage onViewChange={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </Layout>
  );
}