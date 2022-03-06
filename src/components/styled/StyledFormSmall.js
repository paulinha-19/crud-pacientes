import styled from "styled-components";

const Small = styled.small`
    display: block;
    color: red;
    .text-danger::before {
    content: "⚠ ";
    }
`
export default Small