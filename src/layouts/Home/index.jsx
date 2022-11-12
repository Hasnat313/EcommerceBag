import { Box } from "@mui/material";
import React from "react";
import Body from "../../examples/Body";
import Navbar from "../../examples/Navbar";

const Home = () => {
	return (
		<Box sx={{ position: "relative", width: { md: "80%", xs: "100%" }, m: { md: "auto", xs: 0 } }}>
			<Navbar />
			<Body />
		</Box>
	);
};

export default Home;
