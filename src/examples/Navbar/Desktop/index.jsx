import { AppBar, Avatar, Box, Divider, Drawer, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useReducer, useState } from "react";
import { AppbarContainer, AvatarContainer, MenuContainer, ToolBarContainer } from "./style";
import avatarImage from "../../../assets/images/image-avatar.png";
import { Close, Menu, ShoppingCartOutlined } from "@mui/icons-material";

const initialState = {
	Collections: true,
	Men: false,
	Women: false,
	About: false,
	Contact: false,
};

const reducer = (state, action) => {
	state = {
		Collections: false,
		Men: false,
		Women: false,
		About: false,
		Contact: false,
	};
	switch (action.type) {
		case "Collections":
			return (state = { ...state, Collections: true });
		case "Men":
			return (state = { ...state, Men: true });
		case "Women":
			return (state = { ...state, Women: true });
		case "About":
			return (state = { ...state, About: true });
		case "Contact":
			return (state = { ...state, Contact: true });
	}
};

const NavbarDesktop = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	const matchesDown = useMediaQuery(theme.breakpoints.down("md"));
	const [border, setBorder] = useState(false);
	const [state, dispatch] = useReducer(reducer, initialState);
	const [open, setOpen] = useState(false);
	const menuArray = ["Collections", "Men", "Women", "About", "Contact"];
	return (
		<AppbarContainer>
			<ToolBarContainer disableGutters={true}>
				<MenuContainer>
					{matchesDown && (
						<>
							<Menu
								sx={{ mx: 3, fontSize: 25 }}
								onClick={() => {
									setOpen(true);
								}}
							/>
						</>
					)}

					<Typography sx={{ fontWeight: 900, mr: 5, pb: 1, ...(matchesDown && { pb: 1 }) }} variant="h4">
						sneakers
					</Typography>

					{matches && (
						<>
							{menuArray.map((element, index) => (
								<Typography
									key={index}
									sx={{ cursor: "pointer", ...(state[element] === true && { borderBottom: `2px solid ${theme.palette.orange.main}`, fontWeight: "600" }), boxSizing: "border-box", py: 3 }}
									onClick={() => {
										dispatch({ type: element });
									}}
								>
									{element}
								</Typography>
							))}
						</>
					)}
				</MenuContainer>
				<AvatarContainer>
					<ShoppingCartOutlined />
					<Avatar alt="Remy Sharp" src={avatarImage} sx={{ ml: 4 }} />
				</AvatarContainer>
			</ToolBarContainer>
			{matches && <Divider variant="middle" light sx={{ width: "100%", p: 0, m: 0 }} />}
			<Drawer sx={{ "& .MuiDrawer-paper": { width: "40%", p: "40px 0px 0px 20px" } }} open={open}>
				<List>
					{menuArray.map((element, index) => (
						<ListItem disablePadding key={index}>
							<ListItemText
								primaryTypographyProps={{
									fontWeight: "700",
								}}
								primary={`${element}`}
							/>
						</ListItem>
					))}
				</List>
				{open && (
					<Close
						sx={{ position: "absolute", top: 5, left: 10, zIndex: 100, color: "gray" }}
						onClick={() => {
							setOpen(false);
						}}
					/>
				)}
			</Drawer>
		</AppbarContainer>
	);
};

export default NavbarDesktop;
