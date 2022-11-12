import { Box, Button, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import theme from "./assets/theme";
import Navbar from "./examples/Navbar";
import Home from "./layouts/Home";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		</>
	);
}

export default App;
