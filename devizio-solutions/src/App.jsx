import './App.css';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import About from './containers/About/About';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<main>
			<Header />
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
				</Routes>
			</Router>
		</main>
	);
}

export default App;
