import React from 'react'
import { Navigate } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h2>Home (Protected: authenticated user required)</h2>;
    </div>
  )
}

export default Home