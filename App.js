import * as React from "react";
import {Provider} from "react-redux";
import NavigationScreens from "./navigation";
import store from "./redux/store";

export default function App() {
	return (
		<Provider store={store}>
			<NavigationScreens />
		</Provider>
	);
}
