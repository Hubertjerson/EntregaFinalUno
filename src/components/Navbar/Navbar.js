import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import styled from 'styled-components';

const Container = styled.div`
    height : 80px;
`
const Wrapper = styled.div`
    padding: 0px 20px ;
    display:flex;
    align-items: center;
    justify-content:space-between;
`

const Left = styled.div`
    flex:1;
    display:flex;
    align-items: center;
`
const Languaje = styled.span`
    font-size: 14px;
    cursor:pointer;
`

const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight : bold;
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`
const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left:25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Languaje>ES</Languaje>
                </Left>
                <Center><Logo>STILOSMIKA</Logo></Center>
                <Right>
                        <MenuItem>
                            <Link to="/" className='btn btn-outline-primary'>Home</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/producto" className='btn btn-outline-primary'>Productos</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/about" className='btn btn-outline-primary'>About</Link>
                        </MenuItem>
                        <MenuItem>
                            <Cart />
                        </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
