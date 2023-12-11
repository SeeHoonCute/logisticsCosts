import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routers } from "./router";

const router =  createBrowserRouter(routers);
function App(){
  return <RouterProvider router={router}></RouterProvider>
}
export default App;
// import React from 'react';
// import './App.css';
// import { getRouteSuccess } from './reducers/routeReducer';
// import { useAppDispatch, useAppSelector } from './hooks/hook';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import theme from './theme';
// import { Theme, makeStyles } from '@material-ui/core';
// import { Grid } from '@mui/material';
// import RouteList from './containers/routeList/routeList';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Typography>{children}</Typography>
//       )}
//     </div>
//   );
// }

// function App() {
//   const [value, setValue] = React.useState(0);
//   const classes = useStyles(theme);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Grid container className={classes.root}
//     >
//       <Grid item container xs={1.8}>
//         <Tabs
//           className={classes.tab}
//           orientation="vertical"
//           variant="scrollable"
//           value={value}
//           onChange={handleChange}
//           aria-label="Vertical tabs example"
//         >
//           <Tab className={classes.menuItem1} sx={{textTransform:'none'}} label="Danh sách tuyến" />
//           <Tab sx={{textTransform:'none'}} label="Gợi ý đơn vị vận chuyển" />
//           <Tab sx={{textTransform:'none'}} label="Danh sách chọn đơn vị vận chuyển" />
//           <Tab sx={{textTransform:'none'}} label="Danh sách yêu cầu thuê xe" />
//           <Tab sx={{textTransform:'none'}} label="Cài đặt" />
//         </Tabs>
//       </Grid>
//       <Grid item container xs={10.2}>
//         <TabPanel value={value} index={0}>
//           <RouteList/>
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           Item Two
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//           Item Three
//         </TabPanel>
//         <TabPanel value={value} index={3}>
//           Item Four
//         </TabPanel>
//         <TabPanel value={value} index={4}>
//           Item Five
//         </TabPanel>
//         <TabPanel value={value} index={5}>
//           Item Six
//         </TabPanel>
//         <TabPanel value={value} index={6}>
//           Item Seven
//         </TabPanel>
//       </Grid>
//     </Grid>
//   );
// }

// export default App;

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//   },
//   tab: {
//     width: "100%",  
//   },
//   menuItem1: {
//     fontSize: "14px",
//     fontfamily: 'Manrope',
//   }
// }));