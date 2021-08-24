import React from 'react';
import BackgroundVideo from '../../assets/VideoBackground.mp4';
import CustomButton from '../../components/customButton/customButton.component';

import { VideoContainer, LandingContainer, Overlay, Text, Title, Description, EnterButton } from './landingpage.styles';

const LandingPage = () => {
    return (
        <LandingContainer>
            <VideoContainer autoPlay muted loop >
                <source src={BackgroundVideo} type="video/mp4" />
            </VideoContainer>
            <Overlay>
                <Text>
                    <Title>Welcome Home</Title>
                    <Description>Find the clothes that work with your authentic self</Description>
                    <EnterButton to="/home">
                        <CustomButton>
                            Enter Store
                        </CustomButton>
                    </EnterButton>
                </Text>
            </Overlay>
        </LandingContainer>
    );
};

export default LandingPage;