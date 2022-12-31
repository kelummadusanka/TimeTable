import React from 'react'
import { CSSProperties } from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Student Details</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Button</button>
                
            </div>
            
        </header>
    )
}

export default Header