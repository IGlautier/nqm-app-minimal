import composeWithTracker from "../composers/compose-with-tracker";
import checkAuthenticated from "../composers/authenticated";
import Layout from "../components/layout";

// Use the checkAuthenticated composer to populate the "authenticated" property of the Layout component.
export default composeWithTracker(checkAuthenticated)(Layout);