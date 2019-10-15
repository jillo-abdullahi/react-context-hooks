import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import SongList from './components/SongList';

function App() {
  return (
    <div className="App">
        <AuthContextProvider>
          <ThemeContextProvider>
            <Navbar />
            <BookContextProvider>
              <BookList />
            </BookContextProvider>
            <ThemeToggle />
            <SongList/>
          </ThemeContextProvider>
        </AuthContextProvider>
    </div>
  );
}

export default App;
