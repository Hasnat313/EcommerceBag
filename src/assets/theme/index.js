import { createTheme } from "@mui/material/styles";
import { Colors } from "./base/colors";
import { Typography } from "./base/typography";

export default createTheme({
    palette: {
        ...Colors
    },
    typography: { ...Typography }
})