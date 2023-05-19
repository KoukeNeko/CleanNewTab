import './App.css';

import FavoritePanel from './components/FavoritePanel/FavoritePanel';

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-lg">
      {/* set max width */}
      <div className='w-full max-w-[1200px] mx-auto'>
        <FavoritePanel />
      </div>
    </div>
  );
}

export default App;
