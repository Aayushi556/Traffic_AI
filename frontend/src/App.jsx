
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Prediction from "./pages/Prediction";
import Result from "./pages/Result";
import Loading from "./pages/Loading";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./pages/ProtectedRoute";
import History from "./pages/History";
import PrivateRoute from "./components/PrivateRoute";
import VerifyOTP from "./pages/VerifyOTP";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/prediction"
          element={
            <ProtectedRoute>
              <Prediction />
            </ProtectedRoute>
          }
        />

        <Route
          path="/loading"
          element={
            <ProtectedRoute>
              <Loading />
            </ProtectedRoute>
          }
        />

        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <Result />
            </ProtectedRoute>
          }
          />
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />
            <Route
            path="/prediction"
            element={
              <PrivateRoute>
                <Prediction />
              </PrivateRoute>
            }
          />

            <Route
              path="/loading"
              element={
                <PrivateRoute>
                  <Loading />
                </PrivateRoute>
              }
            />

              <Route
                path="/result"
                element={
                  <PrivateRoute>
                    <Result />
                  </PrivateRoute>
                }
              />

              <Route
                path="/history"
                element={
                  <PrivateRoute>
                    <History />
                  </PrivateRoute>
                }
              />
              <Route
                  path="/verify-otp"
                  element={<VerifyOTP />}
              />
      </Routes>

    </BrowserRouter>
  );
}

export default App;