import Router from "./Router";
import { isDarkState } from "atoms";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import {theme, darkTheme} from "styles/theme";

function App() {
	const isDark = useRecoilValue(isDarkState);
	return (
		<>
		<ThemeProvider theme={isDark ? darkTheme : theme}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
		</>
	)
}

export default App;
