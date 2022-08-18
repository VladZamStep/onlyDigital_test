import styled from 'styled-components';

export const GreetingsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 2.5rem;

        span {
            font-weight: bold;
            font-size: 2.5rem;
        }
    }

    button {
        margin-top: 3.125rem;
        height: 60px;
        width: 200px;
        font-weight: 700;
        font-size: 1.125rem;
        border-radius: .5rem;
        cursor: pointer; 
    }
`