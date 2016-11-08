import {composeWithTracker} from "react-komposer";
import loadData from "../composers/load-resource-data"; 
import Home from "../components/home";

export default composeWithTracker(loadData)(Home);