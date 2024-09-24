import { Grid, Typography, Paper } from "@mui/material";
import React from "react";

function Dashboard(){
    return (
        <div style={{padding: '20px'}}>
            <Typography variant="h4" gutterBottom>Dashboard</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper style={{padding: '20px'}}>
                        <Typography variant="h6">Portfolio Value</Typography>
                        {/* Add portfolio value chart here */}
                    </Paper>
                </Grid>
                <Grid item xs={16} md={6}>
                    <Paper style={{padding: '20px'}}>
                        <Typography variant="h6">Watchlist</Typography>
                        {/* Add watchlist items here */}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}


export default Dashboard;