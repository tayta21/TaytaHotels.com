import React from 'react';

import { Card,ListGroup } from 'react-bootstrap';



const WorkersCard = (props) => {
    return (
        <div  className="listworker">
            {props.workers.map(el =>
            <div style={{margin:'10px'}}>
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>name : {el.name}</ListGroup.Item>
                        <ListGroup.Item>id : {el.idcard}</ListGroup.Item>
                        <ListGroup.Item>post : {el.post}</ListGroup.Item>
                        <ListGroup.Item>
                            <button onClick={() => props.getInput(el)} className='bac'>click to edit</button>                            
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <button onClick={() => props.remove(el)} className='bac'>click to delete</button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
                )}
            
        </div>
    );
}

export default WorkersCard;