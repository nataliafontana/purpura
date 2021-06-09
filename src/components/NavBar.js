import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link';



const NavBar = () => {
    return(
        <div>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                <Typography variant="h6">
                  Púrpura
                </Typography>
                <Typography>
                <Link href="#" color="Black">
       Sucus
      </Link>
              </Typography>
              <Typography>
              <Link href="#" color="Black">
      Cactus
      </Link>
              </Typography>
              </Toolbar>
              </AppBar>
        </div>
    )
}

export default NavBar
