import React from 'react'
import '../styles/Joke.css'

const JokeRender = ({joke}) => {
  return (
    <div className='Joke'>
      <p id='joke'>{joke}</p>
    </div>
  )
}

export default JokeRender
