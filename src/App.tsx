import React from "react";
import Router from "Router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import {theme, darkTheme} from "styles/theme";


function App() {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<GlobalStyle />
				<Router />
			</ThemeProvider>
		</>
	);
}

export default App;
