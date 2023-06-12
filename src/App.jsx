import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import Header from "./components/Header";
const items = [
  { title: "Members", path: "/" },
  { title: "Teams", path: "/teams" },
  { title: "Todo list", path: "/todo" },
];
function App() {
  return (
    <div className="App">
      <Header items={items} />
      <div className="container">
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
