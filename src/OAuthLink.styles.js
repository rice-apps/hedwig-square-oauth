import styled from "styled-components";

const LoginBox = styled.div`
    width: 50vw;
    height: 50vh;
    display: grid;
    place-items: center;
    background-color: #ffa07a;
`;

const LoginLink = styled.button`
    background-color: #7ad9ff;

    &:hover {
        cursor: pointer;
    }
`;

export { LoginBox, LoginLink };
