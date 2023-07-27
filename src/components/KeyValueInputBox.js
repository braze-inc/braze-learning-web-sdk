import React from 'react';
import styled from 'styled-components';


function KeyValueInputBox({ k, setKey, value, setValue }) {

    return (
        <Container>
            <SectionContainer>
                <div>Name</div>
                <input value={k} onChange={e => setKey(e.target.value)} />
            </SectionContainer>
            <SectionContainer>
                <div>Value</div>
                <input value={value} onChange={e => setValue(e.target.value)} />
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