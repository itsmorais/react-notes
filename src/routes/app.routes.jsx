import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { New } from "../Pages/New";
import { Profile } from "../Pages/Profile";
import { Detail } from "../Pages/Detail";

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


