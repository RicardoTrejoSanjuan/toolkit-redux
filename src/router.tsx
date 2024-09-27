import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";

const Home = lazy(() => import('./pages/Home'));
const Pokemon = lazy(() => import('./pages/Pokemon'));

export default function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />} >
          <Route path="/" element={
            <Suspense fallback="Loading...">
              <Home />
            </Suspense>
          } index />
          <Route path="/pokemon" element={
            <Suspense fallback="Loading...">
              <Pokemon />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}