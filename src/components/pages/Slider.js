import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import '../Css/_Slider.css';

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color:coral;
    position:relative;
    overflow:hidden;
`

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    cursor:pointer;
    margin:auto;
    opacity:0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height:100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw)
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items:center;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex:1;
`
const Image = styled.img`
    height:100%;
`

const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleclick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleclick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>
                                <button class="cta">
                                    <span class="hover-underline-animation"> <Link to='/category/hombre' className="text-decoration-none text-black">Comprar Ahora</Link> </span>
                                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                        <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                                    </svg>
                                </button>
                            </Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleclick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
};

export default Slider;
