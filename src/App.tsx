import './App.css'
import { Routes, Route } from 'react-router'
import TopAppBar from './components/TopAppBar'
import UsersList from './components/UsersList'

function App() {
  return (
    <>
      <header>
        <TopAppBar />
      </header>
      <main>
        <Routes>
          <Route path="/:category?" element={<UsersList />} />
        </Routes>
      </main>
    </>
  )
}

export default App
