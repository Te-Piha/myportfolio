import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const styles = {
  button: {
    outline: 'none',
    borderStyle: 'solid',
    borderWidth: 'thin',
    borderColor: 'white',
    backgroundColor: 'transparent',
    height: '950px',
    width: '100%',
    textDecoration: 'none'

  },
  col: {
    padding: '0px',
    height: '950px',
    overflow: 'hidden'
  },
  text:{
    color: 'white'
  },
  links: {
    textDecoration: 'none'
  }
}


function HomeTest() { 
const [image, setImageBackground] = useState('/images/1.jpg')

const initialImage = '/images/1.jpg'

function setImage(e){
console.log(e.target.id)


  setImageBackground('/images/' + e.target.id + '.jpg')
}

function resetImage(){
  setImageBackground(initialImage)
}

return(
  <>
<Container style={{
backgroundImage: 'url(' + image + ')', 
maxWidth: '100%', 
height: 'auto', 
margin: '0px',
justifyContent: 'center',
alignItems: 'center'
}} >
  <Row >
      <Col style={styles.col} >
      <button style={styles.button}
        id="2" 
        onMouseEnter={e => setImage(e)} 
        onMouseOut={e => resetImage(e)}>

        <Link to="/codingContent" style={styles.links}>
            <h2 style={styles.text}>
              Entrepreneurship
              </h2>
              <h4 style={styles.text}>
                something here
              </h4>
      </Link>
</button>

      </Col>


      <Col style={styles.col}>
        <button 
            style={styles.button}
            id="3"
            onMouseEnter={e => setImage(e)}
            onMouseOut={e => resetImage(e)}>
<Link 
    to="/codingContent" style={styles.links}    
>

      <h2 style = {styles.text}>

      Coding 

      </h2>
      </Link>
        </button>
      </Col>

      <Col style={styles.col}>

  <button 
      style={styles.button}
      id="4"   
      onMouseEnter={e => setImage(e)}
      onMouseOut={e => resetImage(e)}>
<Link to="/codingContent" style={styles.links}
>

        
        <h2 style = {styles.text}>
        
        Content 

      </h2>

  </Link>
    </button>      


      </Col>


      <Col style={styles.col}>
<button 
    id="5" 
    style={styles.button}
    onMouseEnter={e => setImage(e)}
    onMouseOut={e => resetImage(e)}>
<Link to="/codingContent" style={styles.links}>
 
<h2 style = {styles.text}>
Story 
</h2>
</Link>
</button>
</Col>

      
    </Row>
</Container>
  </>
  )
}

export default HomeTest;