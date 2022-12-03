import { Navbar } from './components/Navbar/Navbar'
import { Trending } from './components/Trending/Trending'
import { Home } from './pages/Home/Home'

export const App = () => {
  return (
    <div className='max-w-7xl m-auto flex justify-center gap-8'>
      <Navbar />
      <Home />
      <Trending />
    </div>
  )
}
