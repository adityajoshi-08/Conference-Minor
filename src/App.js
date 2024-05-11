import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import './App.css';
import Speakers from './pages/Speakers/Speakers.jsx';
import Tracks from './pages/Tracks/Tracks.jsx';
import Panel from './pages/Panel/Panel.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/speakers",
      element: <Speakers />
    },
    {
      path: "/tracks",
      element: <Tracks />
    },
    {
      path: "/panel",
      element: <Panel />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
