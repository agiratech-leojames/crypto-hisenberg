import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const drawerWidth = 300;

function Sidebar() {

  const navigate = useNavigate();
  const {pathname} = useLocation();
  
  return (
    <Box sx={{ display: 'flex'}} className="sidebar">
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'rgb(110, 212, 253)'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div style={{ textAlign: 'center', marginTop:'10%'}}>
          <img src={require('../../asset/token_new.png') }  width={'180px'} />
        </div>
        <div className="side">
        <List component="nav" aria-labelledby="nested-list-subheader" style={{ backgroundColor: "#A3EEFF", marginTop: '30%'}}>
                    <ListItemButton onClick={()=> navigate('/dashboard')} style={{paddingTop: '16px', paddingBottom: '16px'}} className={pathname == "/dashboard" ? "active" : "" }>
                      <ListItemText
                          disableTypography
                          primary={<Typography variant="body5" style={{ fontWeight: 700, fontSize: '18px'}}> Dashboard </Typography>}>
                      </ListItemText>
                    </ListItemButton>
                   {<ListItemButton onClick={()=> navigate('/student_upload_1')} style={{paddingTop: '16px', paddingBottom: '16px'}} className={pathname == "/student_upload_1" ? "active" : ""}>
                      <ListItemText
                          disableTypography
                          primary={<Typography variant="body5" style={{ fontWeight: 700, fontSize: '18px'}}> Student upload to L1 </Typography>}>
                      </ListItemText>
                    </ListItemButton>}
                    <ListItemButton onClick={()=> navigate('/student_upload_2')} style={{paddingTop: '16px', paddingBottom: '16px'}} className={pathname == "/student_upload_2" ? "active" : ""}>
                      <ListItemText
                        disableTypography
                        primary={<Typography variant="body5" style={{ fontWeight: 700, fontSize: '18px'}}> Student upload to L2 </Typography>}>
                      </ListItemText>
                    </ListItemButton >
                    <ListItemButton onClick={()=> navigate('/reward_docs_upload')} style={{paddingTop: '16px', paddingBottom: '16px'}} className={pathname == "/reward_docs_upload" ? "active" : ""}>
                      <ListItemText
                        disableTypography
                        primary={<Typography variant="body5" style={{ fontWeight: 700, fontSize: '18px'}}> Reward Document upload </Typography>}>
                          Reward Document upload
                      </ListItemText>
                    </ListItemButton>
                    <ListItemButton onClick={()=> navigate('/loan_details')} style={{paddingTop: '16px', paddingBottom: '16px'}} className={pathname == "/loan_details" ? "active" : ""}>
                      <ListItemText
                        disableTypography
                        primary={<Typography variant="body5" style={{ fontWeight: 700, fontSize: '18px'}}> Repay Loan </Typography>}>
                      </ListItemText>
                    </ListItemButton>
              </List>
            </div>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Sidebar;