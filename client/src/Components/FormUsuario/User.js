import React from 'react'
import {connect} from 'react-redux'

function user ({user}) {
    console.log(user)
    
    return (
    <div>
        hola
    </div>
    )
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(user)