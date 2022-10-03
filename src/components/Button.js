import React from 'react'


const Button = ({name, imageSelect}) =>

      <button className="select" value={name} onClick={imageSelect}>{name}</button>

export default Button