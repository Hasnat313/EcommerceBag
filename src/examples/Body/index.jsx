import { Box, Grid } from "@mui/material";
import React from "react";
import Left from "./Left";
import Right from "./Right";

const Body = () => {
	return (
		<Box sx={{ p: { md: "50px 50px 0px 50px", xs: "20px 0px 0px 0px" } }}>
			<Grid container spacing={2}>
				<Grid item md={6} xs={12}>
					<Left />
				</Grid>
				<Grid item md={6} xs={12}>
					<Right />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Body;
