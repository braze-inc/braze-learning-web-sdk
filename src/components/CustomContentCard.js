import React from 'react';
import styled from 'styled-components';

function CustomContentCard({ imageUrl, title, description }) {
    return (
        <CustomContentCardContainer>
            <Image src={imageUrl} />
            <Title>{title}</Title>
            <Description>{description}</Description>
        </CustomContentCardContainer>
    )
}

const CustomContentCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
    padding: 20px;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
    background-color: #eee;
    margin-bottom: 10px;
`;

const Image = styled.img`
    max-height: 176px;
    max-width: 358px;
`;

const Title = styled.div`
    margin-top: 15px;
    font-weight: bold;
    font-size: 16px;
`;

const Description = styled.div`
    margin-top: 10px;
    font-size: 13px;
`;

export default CustomContentCard