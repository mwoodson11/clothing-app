import styled from "styled-components";
import { Link } from "react-router-dom";

export const LandingContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
`;

export const VideoContainer = styled.video`
    object-fit: fill;
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
`;

export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 200;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    text-align: center;
    width: 600px;
    height: 500px;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 60px;
`;

export const Description = styled.p`
    font-size: 36px;
    color: rgba(255,255,255,0.8);
`;

export const EnterButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
`;