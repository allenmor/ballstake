import React from 'react'
import { useNavigate } from 'react-router-dom'
function Navbar() {

    const navigate = useNavigate();

    function handleHomeClick() {
        navigate('/')
    }
    function handleOddsClick() {
        navigate('/odds')
    }

    function handleStatsClick() {
        navigate('/stats')
    }

    function handlePredictionsClick() {
        navigate('/predictions')
    }

  return (
    <div className='navbar-container'>
        <p onClick={handleHomeClick}>Home</p>
        <p onClick={handleOddsClick}>Odds</p>
        <p onClick={handleStatsClick}>Stats</p>
        <p onClick={handlePredictionsClick}>Predictions</p>
    </div>
  )
}

export default Navbar
