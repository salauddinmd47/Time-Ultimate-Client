import * as React from "react"; 
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline"; 
import Drawer from "@mui/material/Drawer"; 
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar"; 
import { Link,useRouteMatch,Route, Switch } from "react-router-dom";
import MyOrder from "../MyOrder/MyOrder"; 
import Payments from "../Payment/Payments";
import MyReview from "../Review/MyReview";
import useAuth from "../../../hooks/useAuth"; 
import { IconButton, Typography } from "@mui/material";
import ManageOrders from "../ManageOrders/ManageOrders";
import AddProducts from "./AddProducts/AddProducts";
import ManageProducts from "../ManageProducts/ManageProducts";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../../../hooks/AdminRoute/AdminRoute";
 

const drawerWidth = 240;

function Dashboard(props) {
  const {user ,logOut,admin} = useAuth()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {path, url} = useRouteMatch()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="bg-dark h-100 d-flex align-items-stretch me-0">
      <div className='ms-5 mt-5'>
        
        {user.email && <button className='bg-danger border-0' onClick={logOut} >Logout</button>}
        {
          !admin&& <div>
            <Link className="d-block text-decoration-none text-white" to="/">
          Home
        </Link>
            <Link className="d-block text-decoration-none text-white" to={`${url}/myOrder`}>
          My Order
        </Link>
        <Link className="d-block text-decoration-none text-white" to={`${url}/payment`}>
           Payment
        </Link>
        <Link className="d-block text-decoration-none text-white" to={`${url}/myReview`}>
          Review
        </Link>
          </div>
        }
        {
          admin && <div>
            <Link className="d-block text-decoration-none text-white" to={`${url}/manageOrders`}>
          Manage All Orders
        </Link>
        <Link className="d-block text-decoration-none text-white" to={`${url}/addProduct`}>
          Add Product
        </Link>
        <Link className="d-block text-decoration-none text-white" to={`${url}/manageProducts`}>
          Manage Products
        </Link>
        <Link className="d-block text-decoration-none text-white" to={`${url}/makeAdmin`}>
          Make an Admin
        </Link>
          </div>
        }
         
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="bg-dark ms-0">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
         <Box className='min-vh-100'>
           <div className="text-center mb-3">
           {
             admin? <h2 className='text-warning'>Welcome to <span className='text-info'>ADMIN</span> Dashboard</h2>:<h2 className='text-warning'>Welcome to <span className='text-info'>USER</span> Dashboard</h2>
           }
           <hr className="w-25 mx-auto" />
           </div>
           <Switch>
             <Route exact path={`${path}/myOrder`} >
             <MyOrder></MyOrder>
             </Route>
             <Route exact path={`${path}/payment`} >
             <Payments></Payments>
             </Route>
             <Route exact path={`${path}/myReview`} >
             <MyReview></MyReview>
             </Route>
             <AdminRoute exact path={`${path}/manageOrders`} >
              <ManageOrders></ManageOrders>
             </AdminRoute>
             <AdminRoute exact path={`${path}/addProduct`} >
              <AddProducts></AddProducts>
             </AdminRoute>
             <AdminRoute exact path={`${path}/manageProducts`} >
              <ManageProducts></ManageProducts>
             </AdminRoute>
             <AdminRoute exact path={`${path}/makeAdmin`} >
              <MakeAdmin></MakeAdmin>
             </AdminRoute>

           </Switch>
          
         </Box>
      </Box>
    </Box>
  );
}

// Dashboard.propTypes = {
//   window: PropTypes.func,
// };

export default Dashboard;
