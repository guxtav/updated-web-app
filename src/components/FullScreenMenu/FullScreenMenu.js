import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function FullScreenMenu(props) {
  const { classes } = props;
  return (
    <div>
    </div>
  );
}

FullScreenMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenMenu);
