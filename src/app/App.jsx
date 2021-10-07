import { Routes, Route } from 'react-router-dom';
import { Home, PickBanPro, Teams } from './pages';
import { Footer, Navigation } from './components';
import './styles/main.scss';

const App = () => {
	return (
		<>
            <Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/teams' element={<Teams />} />
				<Route path='/pickbanpro' element={<PickBanPro />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
