import React from 'react'


function Product(props) {
    return (
        <>

            <div className="card" style={{ width: "22rem" }}>
                <img src={props.imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{props.title}</p>
                </div>

            </div>

        </>
    )
}
export default Product