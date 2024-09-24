import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";


function Header(){
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{flexGrow:1}}>RobinHood Clone</Typography>
                <Button color="inherit" component={Link} to="/">Dashboard</Button>
                <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
                <Button color="inherit" component={Link} to="/watchlist">Watchlist</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;