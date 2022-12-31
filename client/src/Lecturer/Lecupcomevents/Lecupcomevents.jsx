import React from 'react';
import './Lecupcomevents.css';
import assg1 from './assg1.jpg';
import prj1 from './prj1.jpg';
import ev2 from './ev2.jpg';






import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={assg1} />
        <Card.Body>
          <Card.Title><p className='ucec1'> Assignments</p></Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={prj1} />
        <Card.Body>
          <Card.Title><p className='ucec1'>Projects</p></Card.Title>
          <Card.Text>
            {' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={ev2}/>
        <Card.Body>
          <Card.Title><p className='ucec1'>Evaluations</p></Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;