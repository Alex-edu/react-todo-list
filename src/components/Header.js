import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './todoInput'

const Header = ({addTodo}) => {

  const handleSave = text => {
    if (text.length !== 0) {
      addTodo(text)
    }
  }

  return (
    <header className="header">
      <h1>Easy todo</h1>
      <TodoTextInput
        newTodo
        onSave={handleSave}
        placeholder="What's next?"
      />
    </header>
  )
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
