import React, { useEffect, useState } from 'react';

import config from '../../config';
import { fetchJson } from '../../services';

const Home = (): React.ReactElement => {
	const [users, setUsers] = useState([]);

	const fetchUserData = () => {
		fetchJson(config.api.home.basic);
	};

	useEffect(() => {
		// fetchUserData();
		(async (): Promise<void> => {
			const res = await fetchJson(config.api.home.basic);
			console.log('Res: ', res);
		})();
	}, []);

	console.log('Users: ', users);

	return (
		<div className="max-w-screen-xl flex flex-wrap items-center justify-between ml-20 p-4">
			{'Home Page'}
		</div>
	);
};

export default Home;
