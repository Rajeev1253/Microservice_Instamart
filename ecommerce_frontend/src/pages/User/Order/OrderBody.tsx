import { Paper, Stack } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "./Orders.module.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function createData(
  date: string,
  location: string,
  distance: string,
  description: string
) {
  return { date, location, distance, description };
}

const rows = [
  createData(
    "02-12-2002",
    "Ward Road Texas 79901",
    "2134.0mi",
    "Shipment Delayed"
  ),
  createData(
    "02-12-2002",
    "Ward Road Texas 79901",
    "2134.0mi",
    "Shipment Delayed"
  ),
  createData(
    "02-12-2002",
    "Ward Road Texas 79901",
    "2134.0mi",
    "Shipment Delayed"
  ),
  createData(
    "02-12-2002",
    "Ward Road Texas 79901",
    "2134.0mi",
    "Shipment Delayed"
  ),
  createData(
    "02-12-2002",
    "Ward Road Texas 79901",
    "2134.0mi",
    "Shipment Delayed"
  ),
  createData(
    "02-12-2002",
    "Ward Road Texas 79901",
    "2134.0mi",
    "Shipment Delayed"
  ),
  createData(
    "02-12-2002",
    "Ward Road Texas 79901",
    "2134.0mi",
    "Shipment Delayed"
  ),
  createData(
    "02-12-2002",
    "Ward Road Texas 79901",
    "2134.0mi",
    "Shipment Delayed"
  ),
];

const OrderBody = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Stack sx={{ mt: 3 }} direction={"row"} gap={"20px"}>
        <Paper className={styles.t} sx={{ borderRadius: "10px" }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Details" {...a11yProps(0)} />
                <Tab label="Order Item" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Stack sx={{ mt: 0.7 }}>
                <TableContainer component={Paper}>
                  <Table  aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell width={130}>Date</TableCell>
                        <TableCell width={130}>Location</TableCell>
                        <TableCell width={130}>Distance</TableCell>
                        <TableCell width={130}>Description</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.date}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.date}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.location}
                          </TableCell>
                          <TableCell>{row.distance}</TableCell>
                          <TableCell>{row.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}></CustomTabPanel>
          </Box>
        </Paper>
        <Paper
          className={styles.p}
          sx={{ height: "60vh", borderRadius: "10px" }}
        ></Paper>
      </Stack>
    </div>
  );
};

export default OrderBody;
