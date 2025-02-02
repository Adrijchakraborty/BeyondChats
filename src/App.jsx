import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { LazyLogin, LazyMainScreen, LazyRegister, LazySetupOrg, LazyTestIntegration } from './pages'

import Loading from './components/Loading'

const LazyPublicLayout = lazy(() => import('./layout/PublicLayout'));
const LazyPrivateLayout = lazy(() => import('./layout/PrivateLayout'));

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<LazyPublicLayout />}>
          <Route path="/login" element={<LazyLogin />} />
          <Route path="/register" element={<LazyRegister />} />
        </Route>
          <Route path="/setup-org" element={<LazySetupOrg />} />
        <Route element={<LazyPrivateLayout />}>
          <Route path='/' element={<LazyMainScreen />} />
          <Route path="/test-integration" element={<LazyTestIntegration />} />
        </Route>
      </Routes>
    </React.Suspense>
  )
}

export default App