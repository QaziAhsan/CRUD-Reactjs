import React from 'react'

export default function Header() {
    return (
        <div style={header_style}>
            <h1>Todo List</h1>
        </div>
    )
}

const header_style = {
    background : '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}