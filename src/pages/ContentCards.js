import React, { useEffect } from 'react';
import styled from 'styled-components';
import CustomContentCard from '../components/CustomContentCard';
import * as braze from "@braze/web-sdk";


function ContentCards({ cards }) {

    useEffect(() => {
        braze.showContentCards(document.getElementById('standard-feed'));
    }, [])

    return (
        <ContentCardsContainer>
            <Feed>
                <div>Custom Feed</div>
                <Cards>
                </Cards>
            </Feed>
            <Feed>
                <div>Standard Feed</div>
                <Cards>
                    <div id={'standard-feed'} />
                </Cards>
            </Feed>
        </ContentCardsContainer>
    )
}

const ContentCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Cards = styled.div`
    margin-top: 20px;
`;

const Feed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    margin-top: 60px;
    padding-top: 60px;
    min-width: 400px;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 3px;
`;

export default ContentCards