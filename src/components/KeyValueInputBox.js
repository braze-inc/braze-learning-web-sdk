import React from 'react';
import styled from 'styled-components';


function KeyValueInputBox({ k, setK, v, setV }) {

    return (
        <Container>
            <SectionContainer>
                <div>Name</div>
                <input value={k} onChange={e => setK(e.target.value)} />
            </SectionContainer>
            <SectionContainer>
                <div>Value</div>
                <input value={v} onChange={e => setV(e.target.value)} />
            </SectionContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 330px;
`;

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default KeyValueInputBox