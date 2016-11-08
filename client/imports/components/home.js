import React from "react";
import { Table, Tr, Thead, Th, Td } from "reactable";

import appUtils from "../app-utils";
import SideBar from "./controls/side-bar";
import SideBarPanel from "./controls/side-bar-panel";
import AppMenu from "./controls/app-menu";

class Home extends React.Component {
    render() {
        const styles = {
            root: {
                position: "absolute",
                top: 50,
                bottom: 0,
                left: this.props.wideViewMode && this.props.dockedSideBarOpen ? appUtils.constants.ui.dockedNavWidth : 0,
                right: 0
            },
            content: {
                margin: 10,
                display: "flex",
                flexWrap: "wrap"
            },
            table: {
                flexBasis: "50%"
            },
            secondary: {
                flexBasis: "50%"
            }
        }
        
        const rows = _.map(this.props.data, (row) => {
            const columns = _.map(row, (column, key) => {
                return (<Td key={key} column={key}>{column.toString()}</Td>);
            });
            return (
                <Tr key={row._d}>
                    {columns}
                </Tr>
            );
        });

        return (
            <div style={styles.root}>
                <SideBar  active={this.props.activeSideBar || "menu"}
                        docked={this.props.dockedSideBarOpen} 
                        floatingOpen={this.props.floatingSideBarOpen} 
                        onFloatingOpen={this.props.onToggleNav}>            
                    <SideBarPanel title="menu" value="menu" icon="apps">
                        <AppMenu />
                    </SideBarPanel>
                </SideBar>
                <div style={styles.content}>
                    <Table style={styles.table} className="table" id="table" sortable={true}>
                        <Thead>
                            <Th key="area_id" column="area_id">Area ID</Th>
                            <Th key="gender" column="gender">Gender</Th>
                            <Th key="age_band" column="age_band">Age Band</Th>
                            <Th key="persons" column="persons">Population</Th>
                            <Th key="year" column="year">Year</Th>
                        </Thead>
                        {rows}
                    </Table>
                    <div style={styles.secondary}>
                        <h1>Secondary Content</h1>
                        <p>This is some secondary content that can be displayed to the right of the table on wide screens but should be pushed below the table on small ones</p>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    data: React.PropTypes.array.isRequired
};

export default Home;