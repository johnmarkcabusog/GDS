import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header =()=>{
    return(
        <AppBar style={{backgroundColor: "#046789"}}>
            <Toolbar style={{minHeight:36}}>
              Header Menuss
            </Toolbar>
        </AppBar>
    )
}

export default Header