import React from "react";
import { Tab } from "react-bootstrap";
const NavigationTab = (props) => {
  if (props.isActiveTab) {
    return props.children;
  }
  return null;
};

export default NavigationTab;
