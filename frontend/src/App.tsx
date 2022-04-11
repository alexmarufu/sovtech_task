import { FC, Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import { PageContainer } from './pages/styles';
import store from './store';
import { useQuery } from "react-query";
import Test from './pages/Home/test';

const App: FC = () => {
	return (
		<Suspense fallback={<h2>loading.....</h2>}>
			<Provider store={store}>
			<PageContainer>
				{/*<Test/>*/}
				<Home/>
			</PageContainer>
			</Provider>
		</Suspense>
	);
};

export default App;