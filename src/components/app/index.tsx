// Libraries
import * as React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { ROUTE_HOME, ROUTE_SETTINGS } from "data/constants/routes";
import Homepage from "pages/homepage";
import Settings from "pages/settings";
import Theme from "components/theme";
import Window from "../window/index";

/**
 * @description AppComponent
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent}
 */
const App: React.FunctionComponent = () => {
	return (
		<Theme>
			<Router basename="/">
				<Switch>
					<Window exact path={ROUTE_HOME} component={Homepage} />
					<Window exact path={ROUTE_SETTINGS} component={Settings} />
				</Switch>
			</Router>
		</Theme>
	);
};

export default React.memo(App);
