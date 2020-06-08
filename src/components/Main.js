import React from 'react';
 import {Row, Col, Button } from "reactstrap";

const Main = props => {
    return(
        <div>
             <Row noGutters className="text-center align-items-center pizza-cta">
                <Col>
                 <p className="look-pizza">If you're looking for great pizza. it's right place
                 <i className="fas fa-pizza-slice pizza-slice"></i></p>
                <Button
                color="none"
                className="book-table-btn"
                onClick={()=>{props.setPage(1)}}>Book a table</Button>
                </Col>
            </Row> 
            <Row noGutters className="text-center big-img-container">
                <Col><img 
                src={require("../images/cafe.jpg")} 
                alt="cafe"
                className="big-img"/></Col>
            </Row>
        </div>

    );
    
};
 
export default Main;