import { AddShoppingCartOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Chip, Typography, useTheme } from "@mui/material";

import React, { useState } from "react";

const Right = () => {
	const theme = useTheme();
	const [count, setCount] = useState(0);
	return (
		<Box sx={{ p: { md: "30px 40px 30px 0px", xs: "20px" } }} m={0}>
			<Typography sx={{ fontWeight: "600", color: `${theme.palette.orange.main}` }}>SNEAKER COMPANY</Typography>
			<Typography variant="h4" sx={{ my: 2, fontWeight: "700" }}>
				{" "}
				Fall Limited Edition Sneakers
			</Typography>
			<Typography sx={{ my: 3, color: "grey" }}>
				{" "}
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit sit distinctio necessitatibus magni, illo molestias! Similique exercitationem, minima officiis, fugit in molestias quam libero nisi
			</Typography>
			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "30%" }}>
				<Typography variant="h6" sx={{ fontWeight: "700" }}>
					{" "}
					$125.00
				</Typography>
				<Chip label="50%" size="small" sx={{ borderRadius: "5px", background: `${theme.palette.paleOrange.main}`, color: `${theme.palette.orange.main}`, fontWeight: "600" }} />
			</Box>
			<Typography sx={{ textDecoration: "line-through", my: 1, color: "grey" }}>$250.00</Typography>

			<Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }} justifyContent={"space-between"}>
				<Box display={"flex"} alignItems={"center"} sx={{ width: { md: "40%", xs: "100%" } }} justifyContent={"space-around"} bgcolor="#f8f3ed">
					<Button
						disableRipple
						sx={{ color: `${theme.palette.orange.main}`, fontWeight: "700" }}
						onClick={() => {
							count > 0 && setCount((prev) => prev - 1);
						}}
					>
						-
					</Button>
					<Typography variant="body2" sx={{ fontWeight: "700" }}>
						{count}
					</Typography>
					<Button
						disableRipple
						sx={{ color: `${theme.palette.orange.main}`, fontWeight: "700" }}
						onClick={() => {
							setCount((prev) => prev + 1);
						}}
					>
						+
					</Button>
				</Box>
				<Button startIcon={<ShoppingCartOutlined />} variant="contained" color="orange" sx={{ color: "#fff", textTransform: "none", fontWeight: "700", width: { md: "50%", xs: "100%" }, mt: { xs: 2, md: 0 } }}>
					Add to cart
				</Button>
			</Box>
		</Box>
	);
};

export default Right;
