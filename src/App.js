import './App.scss';
import Route from "./Routes";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Route />
    </UserProvider>
  );
}

export default App;
