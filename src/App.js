import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Home Page/HomePage';
import PostPage from './Post Page/PostPage';
import Nav from './NavBar/Nav';
import { createContext } from 'react';

export const GlobalContext = createContext();

const App = () => {

  const [allPosts, setAllPosts] = React.useState([]);

  return (
    <GlobalContext.Provider
      value={{
        allPosts,
        setAllPosts
      }} >
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:postId" element={<PostPage />} />
      </Routes>
    </GlobalContext.Provider>
  )
}

export default App;
