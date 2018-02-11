import React, { Component } from 'react'
import Recipe from './Recipe'
import './RecipeApp.css'

export default class RecipeApp extends Component {
  render () {
    return (
      <div className='App'>
        <Recipe
          title='Spaghetti'
          ingredients={['flour', 'water']}
          instructions='Mix ingredients'
          img='spaghetti.jpg'
          />
      </div>
    )
  }
}
