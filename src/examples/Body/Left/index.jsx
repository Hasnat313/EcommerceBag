import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import image1 from "../../../assets/images/image-product-1.jpg";
import image2 from "../../../assets/images/image-product-2.jpg";
import image3 from "../../../assets/images/image-product-3.jpg";
import image4 from "../../../assets/images/image-product-4.jpg";
import image5 from "../../../assets/images/image4.gif";
import image6 from "../../../assets/images/image6.jpg";
const Left = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	const matches1 = useMediaQuery(theme.breakpoints.down("md"));
	const imagesArray = [image1, image2, image3, image4];
	const [image, setImage] = useState(image1);
	const [activeStep, setActiveStep] = useState(0);
	const maxSteps = imagesArray.length;
	const handleNext = () => {
		{
			activeStep + 1 !== maxSteps && setActiveStep((prevActiveStep) => prevActiveStep + 1);
		}
	};

	const handleBack = () => {
		{
			activeStep > 0 && setActiveStep((prevActiveStep) => prevActiveStep - 1);
		}
	};
	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	const styles = {
		slide: {
			padding: 15,
			minHeight: 100,
			color: "#fff",
		},
		slide1: {
			background: "#FEA900",
		},
		slide2: {
			background: "#B3DC4A",
		},
		slide3: {
			background: "#6AC0FF",
		},
	};

	return (
		<Box textAlign={"center"} p={"0"}>
			{matches && (
				<Card
					sx={{
						maxWidth: { md: 345, xs: "100%" },
						boxShadow: "0",
						textAlign: "center",
						m: { md: "auto", xs: "0" },
						borderRadius: "0",
					}}
				>
					<CardMedia component="img" sx={{ borderRadius: { md: 4, xs: 0 }, border: "none", objectFit: "contain" }} alt="green iguana" height="350" image={image} />
					<CardActions sx={{ width: "100%", p: "30px 0px", m: 0, display: "flex", justifyContent: "space-between", alignItems: "cneter" }}>
						{imagesArray.map((element, index) => (
							<Button
								disableRipple={true}
								disableElevation={true}
								key={index}
								color="orange"
								onClick={() => {
									setImage(element);
								}}
								size="small"
								sx={{
									...(imagesArray[index] === image
										? { background: `linear-gradient(to top, rgba(255, 237, 224,0.8),rgba(255, 237, 224,0.7)), url(${element}) no-repeat center`, border: `2px solid ${theme.palette.orange.main}` }
										: {
												background: `url(${element})`,
										  }),
									backgroundSize: "cover",
									borderRadius: "10px",
									height: "70px",
									width: "70px",
								}}
							/>
						))}
					</CardActions>
				</Card>
			)}

			{matches1 && (
				<>
					<SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
						{imagesArray.map((step, index) => (
							<div key={index} style={{ background: `#d0d9d2` }}>
								<Box
									component="img"
									sx={{
										height: 300,
										display: "block",

										overflow: "hidden",
										width: "100%",
										objectFit: "scale-down",
									}}
									src={step}
									alt={"hasnat"}
								/>
							</div>
						))}
					</SwipeableViews>
					<IconButton sx={{ position: "absolute", top: "200px", left: "15px", color: "black", backgroundColor: "#fff !important" }} aria-label="delete" onClick={handleBack}>
						<ArrowBackIosNew sx={{ fontSize: "16px", fontWeight: 900 }} />
					</IconButton>
					<IconButton sx={{ position: "absolute", top: "200px", right: "15px", color: "black", backgroundColor: "#fff !important" }} aria-label="delete" onClick={handleNext}>
						<ArrowForwardIos sx={{ fontSize: "16px", fontWeight: 900 }} />
					</IconButton>
				</>
			)}
		</Box>
	);
};

export default Left;
