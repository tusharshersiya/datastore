import React from 'react'
import data from './data.json'
import Product from './Product'

function Products(props) {
    return (
        <>


            <div className="d-flex justify-content-between flex-wrap">
                {
                    data.map(
                        (element, index) => <Product imgurl={element.imgurl} title={element.title} />
                    )
                }

            </div>


        </>
    )
}

export default Products