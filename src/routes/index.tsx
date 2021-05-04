import { Route, Switch } from "react-router";
import KPIsHistoric from "../pages/KPIsHistoric";
import NoteDetails from "../pages/NoteDetails";
import NoteGeneral from "../pages/NoteGeneral";
import Telemetry from "../pages/Telemetry";

const Routes: React.FC = () => {

  return (
      <Switch>
          <Route path="/" exact component={Telemetry} />
          <Route path="/kpihistoric" component={KPIsHistoric} />
          <Route path="/nota_general" component={NoteGeneral} />
          <Route path="/nota_detallada" component={NoteDetails} />

          <Route>
             <h1>Page not found!</h1>
          </Route>
      </Switch>
  );
}

export default Routes;
