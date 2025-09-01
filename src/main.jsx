import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Jobs from './pages/Jobs.jsx';
import Contact from './pages/Contact.jsx';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<ScrollToTop />
				<AppLayout />
			</>
		),
		children: [
			{ index: true, element: <Home /> },
			{ path: 'about', element: <About /> },
			{ path: 'services', element: <Services /> },
			{ path: 'jobs', element: <Jobs /> },
			{ path: 'contact', element: <Contact /> },
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
) 