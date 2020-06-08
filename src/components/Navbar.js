import React from 'react';
import {Navbar, NavbarBrand } from "reactstrap";


export default props => {
    return(
            <Navbar color="light" light expands="md">
                <NavbarBrand 
                className="nav-brand"
                onClick={() => {props.setPage(0)}}>
                Pizza App
                </NavbarBrand>
            </Navbar>
    );
    
};
