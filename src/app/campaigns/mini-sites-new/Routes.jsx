import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import LandingPage from './pages/landing-page';
import RestaurantTemplateLandingPage from './pages/restaurant-template-landing-page';
import CafeTemplateLandingPage from './pages/cafe-template-landing-page';
import BeautySalonTemplateLandingPage from './pages/beauty-salon-template-landing-page';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/restaurant-template-landing-page" element={<RestaurantTemplateLandingPage />} />
        <Route path="/cafe-template-landing-page" element={<CafeTemplateLandingPage />} />
        <Route path="/beauty-salon-template-landing-page" element={<BeautySalonTemplateLandingPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;