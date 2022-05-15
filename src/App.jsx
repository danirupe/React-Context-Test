import './App.css'
import PhotosState from './context/photos/PhotosState'
import PhotosList from './components/PhotosList'
import ThemeState from './context/theme/ThemeState'
import Switcher from './components/Switcher'

function App() {
  return (
    <ThemeState>
      <PhotosState>
        <main className='main'>
          <div className='container'>
            <div className='main__top'>
              <h2 className='main__title'>The Breaking Bad</h2>
              <Switcher />
            </div>
            <PhotosList />
          </div>
        </main>
      </PhotosState>
    </ThemeState>
  )
}

export default App
