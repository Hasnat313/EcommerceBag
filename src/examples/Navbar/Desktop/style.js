import { AppBar, Box, styled, Toolbar } from "@mui/material";

export const AppbarContainer = styled(AppBar)(({ theme }) => ({
    color: theme.palette.text.primary,
    width: "100%",
    position: "sticky",
    background: "transparent",
    boxShadow: "none",
    boxSizing: "border-box",



}))

export const ToolBarContainer = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,

    border: "none",
    "&.MuiToolbar-root": {
        minHeight: 0
    },
    [theme.breakpoints.down("md")]: {

        alignItems: "center",
        justifyContent: "center",

        padding: "0px 20px 0px 20px"
    }


}))

// export const LogoContainer = styled(Box)(({ theme }) => ({

//     marginRight: "30px"


// }))
export const MenuContainer = styled(Box)(({ theme }) => ({

    display: "flex",
    width: "40%",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    padding: 0,
    margin: 0,
    [theme.breakpoints.down("md")]: {

        alignItems: "center",
        justifyContent: "center",
        margin: "10px 0px 0px 20px"
    }


}))
export const AvatarContainer = styled(Box)(({ theme }) => ({


    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 0,
    margin: 0

}))