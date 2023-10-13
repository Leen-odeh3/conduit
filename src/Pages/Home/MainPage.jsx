import "./Home.css";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Content from "./Content";

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

export default function MainPage() {
  const [value, setValue] = React.useState(0);
  const [tabTextColor, setTabTextColor] = React.useState(
    "rgba(122, 122, 122, 0.6)"
  );
  const [TextColor, setTextColor] = React.useState("rgba(122, 122, 122, 0.6)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Your Feed"
            {...a11yProps(0)}
            style={{
              color: tabTextColor,
              textTransform: "capitalize",
              fontSize: "16px",
            }}
            onClick={() => setTabTextColor("green")}
          />
          <Tab
            label="Global Feed"
            {...a11yProps(1)}
            style={{
              color: TextColor,
              textTransform: "capitalize",
              fontSize: "16px",
            }}
            onClick={() => setTextColor("green")}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="feedback" style={{height:"400px"}}> 
        No articles are here... yet.
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Content />
      </CustomTabPanel>
    </Box>
  );
}
