import React from 'react';
import { Link } from 'react-router-dom';

function Section() {
    return (
        <>
            <h1 className='heading2'>What we offer</h1>
            <div className="flashcard-container">
                <div className="flashcard">
                    <div className='circle1'>
                    </div>
                    <p>Show your Skills</p>
                    <button className='btn1'><Link className='link-btn' to="/create">Create Projects</Link></button>
                </div>
                <div className="flashcard">
                <div className='circle2'>
               
                </div>
                <p>Interective Social Hub</p>
                <button className='btn1'><Link className='link-btn' to="/community">Community</Link></button>
                </div>
                <div className="flashcard">
                <div className='circle3'>
                </div>
                <p>Crafting Marketplace</p>
                <button className='btn1'>Coming Soon</button>
                </div>
            </div>
        </>
    )
}

export default Section;
