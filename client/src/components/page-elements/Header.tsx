import React, {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Header: FC = () => {
    return <div style={{paddingTop: 80}}>
        <AppBar>
            <Toolbar>
                <h2>My store</h2>
            </Toolbar>
        </AppBar>
    </div>
}
export default Header