import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import User from "./Components/User";
import AdminLayout from "./Components/AdminLayout";
import Dashboard from "./Components/Dashboard";
import AddQuiz from "./Components/AddQuiz";
import QuizList from "./Components/QuizList";

// Layout du site public : NavBar + la page
function PublicLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Site public (avec NavBar) */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Route>

      {/* Admin (avec la barre latérale, sans NavBar) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="quiz" element={<QuizList />} />
        <Route path="quiz/ajouter" element={<AddQuiz />} />
      </Route>
    </Routes>
  );
}

export default App;