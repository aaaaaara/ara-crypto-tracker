import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";
import App from "./App";

const rootElement = document.getElementById("root");

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<ThemeProvider theme={theme}>
					<App />
					<GlobalStyle />
				</ThemeProvider>
			</RecoilRoot>
		</QueryClientProvider>
	</React.StrictMode>,
	rootElement
);
