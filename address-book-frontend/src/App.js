import * as React from "react";
import UserSearchBar from "./components/UserSearchBar";
import SearchResults from "./components/SearchResults";

const App = () => {
	return (
		<div>
			<UserSearchBar />
			<SearchResults />
		</div>
	);
};

export default App;
