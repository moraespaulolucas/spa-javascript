const router = async () => {
	const routes = [
		{ path: "/", view: () => console.log("viewing home") },
		{ path: "/posts", view: () => console.log("viewing posts") },
		{ path: "/settings", view: () => console.log("viewing settings") },
	];

	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			isMatch: location.pathname === route.path,
		};
	});

	console.log(potentialMatches);
};

export default router;
