import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss } from './styles'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
