import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {

        return(
            this.state.isLoggedIn ?
            (<div>Welcome Shikhar</div>):
            (<div>Welcome Guest</div>)

        )
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Shikhar</div>
        // }

        // else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        // if(this.state.isLoggedIn)
        // {
        //     return (
        //         <div>
        //             Welcome Shikhar
        //         </div>
        //     )
        // }
        // else
        // {
        //     return(
        //         <div>
        //             Welcome guest
        //         </div>
        //     )
        // }
        
    }
}

export default UserGreeting
