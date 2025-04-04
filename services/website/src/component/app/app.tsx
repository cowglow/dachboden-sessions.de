import React from "react";
// import { ReactComponent as EditIcon } from "../../assets/EditIcon.svg";
import AppToolbar from "../app-toolbar/app-toolbar";
import AppDrawer from "../app-drawer/app-drawer";
import HocDbsLogo from "../hoc-dbs-logo/hoc-dbs-logo";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import SvgIcon from "@mui/material/SvgIcon";
import Toolbar from "@mui/material/Toolbar";

import {Wrapper, StyledFab} from "./app.styled";

const App = () => {
    const [active, updateDrawer] = React.useState<boolean>(false);

    return (
        <Container>
            <AppBar position="fixed">
                <AppToolbar
                    brandLabel="Dachboden Logo Editor"
                    onOpen={() => updateDrawer(true)}
                />
                <AppDrawer open={active} onClose={() => updateDrawer(false)}/>
            </AppBar>
            <Toolbar/>
            <br/>

            <Paper elevation={3}>
                <Wrapper>
                    <HocDbsLogo randomPlay={false}/>
                </Wrapper>
            </Paper>

            <StyledFab
                color="secondary"
                arial-label="Edit"
                onClick={() => updateDrawer(true)}
            >
                <SvgIcon>
                    {/*<EditIcon/>*/}
                </SvgIcon>
            </StyledFab>
        </Container>
    );
};

export default App;
