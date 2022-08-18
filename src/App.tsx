import LoginPage from "./pages/loginPage/LoginPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

interface Props {
  children: any
}

const App: React.FC = () => {

  const ProtectedRoute = ({ children }: Props) => {
    const isLogin = JSON.parse(localStorage.getItem('login') || '')
    if (!isLogin) {
      return <Navigate to="login" />
    }
    return children;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path="/login" element={<LoginPage />} />
            <Route path='profile'>
              <Route index element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
