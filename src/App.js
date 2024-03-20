import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

// +++++++++++ pages +++++++++++
import Home from './pages/home';
import NotFound from './pages/notfound/NotFound';

// +++++++++++ layout +++++++++++

import RootLayout from './common/Layout/RootLayout';

// +++++++++++ Routes +++++++++++

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Home */}
      <Route index element={<Home />} />
      {/* not found */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// used to scroll to top whenever a page is changed

function App() {
  return <RouterProvider router={router} />;
}

export default App;
