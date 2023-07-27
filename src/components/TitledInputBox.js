import React from 'react';
import styled from 'styled-components';


function TitledInputBox({ title, value, setValue }) {

    return (
        <Container>
            <div>{title}</div>
            <input value={value} onChange={e => setValue(e.target.value)} />
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