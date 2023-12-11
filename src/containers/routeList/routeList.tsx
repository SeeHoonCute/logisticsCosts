import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { getRouteSuccess } from "../../reducers/routeReducer";
import { Grid, Pagination } from "@mui/material";
import { Button, Typography, makeStyles } from "@material-ui/core";
import RouteTable from "./components/routeTable";

const RouteList = () => {
    const route = useAppSelector((routeReducer) => routeReducer.route);
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const handleIn = () => {
        console.log("handle");
        dispatch(getRouteSuccess(7));
    }

    return (
        <Grid container className={classes.routeListWrapper}>
            <Typography className={classes.routeListHeader}>DANH SÁCH TUYẾN</Typography>
            <Grid item container xs={10}>
                <RouteTable />
                <div className={classes.buttonWrapper}>
                    <Button className={classes.buttonConfig}>Gợi ý đơn vị vận chuyển</Button>
                </div>
                <div className={classes.paginationWrapper}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </div>
            </Grid>
            <Grid item container xs={2} >
                <div className={classes.filterWrapper}>
                    <Typography className={classes.filterHeader}>BỘ LỌC</Typography>
                    <div>
                        <Typography className={classes.filterSubHeader}>Thời gian</Typography>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default RouteList;

const useStyles = makeStyles(() => ({
    routeListWrapper: {
        padding: "10px",
    },
    routeListHeader: {
        fontSize: "24px",
        fontWeight: "bold",
    },
    buttonWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    buttonConfig: {
        height: "50px",
        backgroundColor: "#6D31ED",
        textTransform: "none",
        color: "#FFFFFF",
        padding: "0px 15px",
    },
    paginationWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "50px"
    },
    filterWrapper: {
        padding: "5px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    filterHeader: {
        fontSize: "20px",
        marginBottom: "10px",
    },
    filterSubHeader: {
        fontSize: "16px"
    }
}));