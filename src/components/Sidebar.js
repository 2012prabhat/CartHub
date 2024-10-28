import React,{useState} from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ContentCut from '@mui/icons-material/ContentCut';
import Typography from '@mui/material/Typography';
import { MdDashboard } from "react-icons/md";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { FaProductHunt } from "react-icons/fa";
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';



const Sidebar = ()=>{
    const [open, setOpen] = useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    return(
       <div className="sidebar">
            <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
     
      
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <InventoryRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>


  <Box sx={{ ml: 4, borderLeft: '1px solid #e0e0e0', pl: 2 }}>
    <ListItemButton>
      <ListItemText primary="Product List" />
    </ListItemButton>
    
    <ListItemButton>
      <ListItemText primary="Product View" />
    </ListItemButton>
    
    <ListItemButton>
      <ListItemText primary="Product Upload" />
    </ListItemButton>
  </Box>
</List>
      </Collapse>
    </List>
       </div>
    )
}

export default Sidebar