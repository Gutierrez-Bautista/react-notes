import { lazy, Suspense } from 'react'

import HomePage from './pages/Home' // import estatico
import Page404 from './pages/404'
import SearchPage from './pages/Search'

import { Router } from './Router'
import { Route } from './Route'

const lazyAboutPage = lazy(() => import('./pages/About.jsx')) // import dinamico

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

export default function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={lazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}
