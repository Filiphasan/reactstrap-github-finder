import React from 'react'
import loading from '../giphy.gif'

export const Loading = () => {
    return (
        <>
            <img src={loading} alt="Loading" style={{ width: '200px', display: 'block', margin: 'auto' }} />
        </>
    )
}
export default Loading;
