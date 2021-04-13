import React from "react";
import { Switch, Route} from "react-router-dom";


function Routes() {
  return (
    <Switch>
      <Route path="/" component={Page} exact/>
      <Route path="register" component={Register}/>
    </Switch>

  );
}

export default Routes;
