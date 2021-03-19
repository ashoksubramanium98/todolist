import styled from 'styled-components';

const styledButton = styled.button`
    padding: 10px;
    min-width: 100px;
    background: #2d4ef5;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    :hover{
        opacity: 0.9;
    }
    :active{
        border: none;
    }
`;

export const PrimaryButton = styled(styledButton)`

`;