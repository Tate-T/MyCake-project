import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import App from './App'

import GlobalStyle from './components/GlobalStyle/GlobalStyle.styled'
// import "./index.css";
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<App />

				<GlobalStyle />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
)
