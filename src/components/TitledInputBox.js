import React from 'react';
import styled from 'styled-components';


function TitledInputBox({ title, v, setV }) {

    return (
        <Container>
            <div>{title}</div>
            <input value={v} onChange={e => setV(e.target.value)} />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
`;

export default TitledInputBox