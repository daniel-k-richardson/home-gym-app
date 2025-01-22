import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './shared/components/Layout/Layout.tsx';
import SelectUserPage from './features/SelectUser/pages/SelectUserPage.tsx';
import UserProvider, { UserContext } from './shared/contexts/AppContext/UserContext.tsx';
import DashboardPage from './features/Dashboard/pages/DashboardPage.tsx';


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <UserContext.Consumer>
                  {({ user }) => (user.id !== 0 ? <Navigate to="/dashboard" /> : <SelectUserPage />)}
                </UserContext.Consumer>
              }
            />
            <Route
              path="dashboard"
              element={
                <UserContext.Consumer>
                  {({ user }) => (user.id !== 0 ? <DashboardPage /> : <Navigate to="/" />)}
                </UserContext.Consumer>
              }
            />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
