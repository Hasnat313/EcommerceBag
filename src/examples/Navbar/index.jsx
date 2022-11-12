import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import NavbarDesktop from "./Desktop";
import NavbarMobile from "./Mobile";

const Navbar = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<>
			{" "}
			<NavbarDesktop />
		</>
	);
};

export default Navbar;
