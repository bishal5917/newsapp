import React from 'react'
import './CardGrid.css'

function CardGrid() {
    return (
        <>

            <div class="cards">
                <div class="card card1">
                    <div class="container">
                        <img className="himage" src="las vegas.jpg" alt="" />
                    </div>
                    <div class="details">
                        <h3>Attack on Titan</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    </div>
                </div>
                <div class="card card1">
                    <div class="container">
                        <img className="himage" src="newyork.jpg" alt="" />
                    </div>
                    <div class="details">
                        <h3>Naruto</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    </div>
                </div>
                <div class="card card1">
                    <div class="container">
                        <img className="himage" src="singapore.jpg" alt="" />
                    </div>
                    <div class="details">
                        <h3>One Piece</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardGrid