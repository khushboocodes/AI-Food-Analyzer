import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import WhatActuallyMatters from './pages/what-actually-matters';
import AIThinkingState from './pages/ai-thinking-state';
import EntryLanding from './pages/entry-landing';
import WhatsUncertain from './pages/what-s-uncertain';
import FollowUpActions from './pages/follow-up-actions';
import QuickVerdict from './pages/quick-verdict';
import FoodAnalyzer from "./pages/FoodAnalyzer";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<EntryLanding />} />
        <Route path="/" element={<FoodAnalyzer />} />
        <Route path="/what-actually-matters" element={<WhatActuallyMatters />} />
        <Route path="/food-analyzer" element={<FoodAnalyzer />} />
        <Route path="/ai-thinking-state" element={<AIThinkingState />} />
        <Route path="/entry-landing" element={<EntryLanding />} />
        <Route path="/what-s-uncertain" element={<WhatsUncertain />} />
        <Route path="/follow-up-actions" element={<FollowUpActions />} />
        <Route path="/quick-verdict" element={<QuickVerdict />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
