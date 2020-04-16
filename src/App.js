import React, {useState} from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import Analytics from "./components/Analyticts";
import Button from "@material-ui/core/Button";
const App = () => {
  const [showAnalytics, setAnalytics] = useState(false);
  return (
    <div className="App">
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setAnalytics(!showAnalytics)}
      >
        Show Analytics
      </Button>

      {showAnalytics ? <Analytics /> : <UsersList />}
    </div>
  );
};

export default App;
