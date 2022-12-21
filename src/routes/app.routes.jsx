import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Detail } from '../pages/Detail';
import { Profile } from '../pages/Profile';

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


