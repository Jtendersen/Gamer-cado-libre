import { Menu, MenuItem, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router';

const UserButton = ({user}) => {
const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const sendTo = (string) => {
    navigate(`/${string}`);
  };
  return (
    <div>
        <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
      >
        {`${user.firstName} ${user.lastName}`}
      </Button>
        <Menu
        id="demo-customized-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        >
            <MenuItem value={"History"} onClick={()=>{sendTo("user/history")}}>
                History
            </MenuItem>
            <MenuItem value={"Settings"} onClick={()=>{sendTo("user/settings")}}>
                Settings
            </MenuItem>
        </Menu>
    </div>
  )
}

export default UserButton