import React from "react";
import PaletteIcon from '@mui/icons-material/Palette';
import AppToolbar from "../app-toolbar/app-toolbar";
import AppDrawer from "../app-drawer/app-drawer";
import HocDbsLogo from "../hoc-dbs-logo/hoc-dbs-logo";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import SvgIcon from "@mui/material/SvgIcon";
import Toolbar from "@mui/material/Toolbar";

import {StyledFab} from "./app.styled";

const App = () => {
    const [active, updateDrawer] = React.useState<boolean>(false);

    return (
        <Container>
            <AppBar position="fixed">
                <AppToolbar
                    brandLabel="Dachboden Session"
                    onOpen={() => updateDrawer(true)}
                />
            </AppBar>
            <Toolbar/>
            <AppDrawer open={active} onClose={() => updateDrawer(false)}/>
            <br/>
            <Paper elevation={3}><HocDbsLogo randomPlay={false}/></Paper>

            <StyledFab
                color="secondary"
                arial-label="Edit"
                onClick={() => updateDrawer(true)}
            >
                <SvgIcon>
                    <PaletteIcon/>
                </SvgIcon>
            </StyledFab>
        </Container>
    );
};

export default App;
