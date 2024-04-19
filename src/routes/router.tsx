import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Categories from '../components/Header/Categories/Categories';
import Home from '../components/Home/Home';
import Movieinder from '../components/Movieinder/Movieinder';
import SameFilm from '../components/SameFilm/SameFilm';
import MyMovie from '../components/MyMovie/MyMovie';
import Navbar from '../components/Navbar/Navbar';
import NotFound from '../components/NotFound/NotFound';
import Layout from '../layouts';
import GenrePage from '../components/Header/GenrePage/GenrePage';
import CardDetails from '../components/Films/CardDetails/CardDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/home',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/categories',
    element: (
      <Layout>
        <Categories />
      </Layout>
    ),
  },
  {
    path: '/categories/:categoryId',
    element: (
      <Layout>
        <GenrePage />
      </Layout>
    ),
  },
  {
    path: '/categories/:categoryId/:id',
    element: (
      <Layout>
        <CardDetails />
      </Layout>
    ),
  },
  {
    path: '/movieinder',
    element: (
      <Layout>
        <Movieinder />
      </Layout>
    ),
  },
  {
    path: '/navbar',
    element: (
      <Layout>
        <Navbar />
      </Layout>
    ),
  },
  {
    path: '/sameFilm',
    element: (
      <Layout>
        <SameFilm />
      </Layout>
    ),
  },
  {
    path: '/myMovie',
    element: (
      <Layout>
        <MyMovie />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);

export default router;
