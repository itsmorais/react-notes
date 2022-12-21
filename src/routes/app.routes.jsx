import { Routes, Route } from "react-router-dom";

import { New } from "../Pages/New/index.jsx";
import { Home } from "../Pages/Home";
import { Detail } from "../Pages/Detail";
import { Profile } from "../Pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/profile' element={<Profile />} />

    </Routes>
  )
}


