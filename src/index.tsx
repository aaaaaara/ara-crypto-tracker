import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import App from "./App";
import {ReactQueryDevtools} from 'react-query/devtools';



const rootElement = document.getElementById("root");
const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
			
				<App />
			
			<ReactQueryDevtools initialIsOpen={true}/> 
			</RecoilRoot>
		</QueryClientProvider>
	</React.StrictMode>,
	rootElement
);
