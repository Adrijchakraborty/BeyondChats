import React from 'react'
import { LazyLogin, LazyMainScreen, LazyRegister, LazyTestIntegration } from './pages'
import { Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
import PrivateLayout from './layout/PrivateLayout'
import PublicLayout from './layout/PublicLayout'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<React.Suspense fallback={<Loading />}><LazyLogin /></React.Suspense>} />
          <Route path="/register" element={<React.Suspense fallback={<Loading />}><LazyRegister /></React.Suspense>} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<React.Suspense fallback={<Loading />}><LazyMainScreen /></React.Suspense>} />
          <Route path="/test-integration" element={<LazyTestIntegration />} />
        </Route>
      </Routes>
    </>
  )
}

export default App