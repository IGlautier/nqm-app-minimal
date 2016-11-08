import React from "react";

import {List, ListItem} from "material-ui/List";
import Divider from "material-ui/Divider";
import HomeIcon from "material-ui/svg-icons/action/home";

class AppMenu extends React.Component {

  home() {
    FlowRouter.go("/");
  }

  render() {

    const content = (
      <List>
        <ListItem key="home" onTouchTap={this.home} primaryText="Home" rightIcon={<HomeIcon />} />
        <Divider />
      </List>        
    );

    return content;
  }
}

export default AppMenu;