import React from 'react'

const Hello = () => {
    /* with jsx**/
    
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Shikhar</h1>
    //     </div>
    // )

    /* without jsx**/

    return React.createElement('div', null, React.createElement('h1', null, 'Hello Shikhar'))
}

export default Hello