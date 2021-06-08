import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const styles = {
button: {
  outline: 'none',
  borderStyle: 'solid',
  borderWidth: 'thin',
  borderColor: 'white',
  backgroundColor: 'transparent',
},
divvy: {
  height: '100px',
  justifyContent: 'center',
  display: 'flex'
}
,
text:{
  backgroundColour: 'black'
},
imga: {
  Width: 'width',
  height: '100%'
}
}

function Nav() { 
return(
  <>
  <div style={styles.divvy}>
    <Button style={styles.button}>  
    <Link to="/Homepage">
    <img alt="logo" style={styles.imga} src="images/logo.png"/>
    </Link>
      </Button>
  </div>
  </>
  )
}

export default Nav;