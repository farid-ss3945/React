import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

import Home from "./Home";
import Courses from "./Courses";
import Progress from "./Progress";
import Tasks from "./Tasks";
import Profile from "./Profile";

export default function App() {
    return (
        <BrowserRouter>
        <div>
            <nav>

                <Link to="/">Главная</Link>
                <Link to="/courses">Курсы</Link>
                <Link to="/tasks">Задания</Link>
                <Link to="/progress">Прогресс</Link>
                <Link to="/profile">Профиль</Link>

            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}


