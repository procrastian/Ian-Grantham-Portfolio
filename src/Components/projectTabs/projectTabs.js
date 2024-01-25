import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MyCV from "../CV/CV";
import ContactInfo from "../Contact/Contact";
import ResponsiveGrid from "../Project/Project";

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="allTabs" sx={{ width: "80%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Project One" {...a11yProps(0)} />
          <Tab label="Project Two" {...a11yProps(1)} />
          <Tab label="Project Three" {...a11yProps(2)} />
          <Tab label="About Me" {...a11yProps(3)} />
          <Tab label="Contact" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ResponsiveGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ResponsiveGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ResponsiveGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <MyCV />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <ContactInfo />
      </CustomTabPanel>
    </Box>
  );
}
