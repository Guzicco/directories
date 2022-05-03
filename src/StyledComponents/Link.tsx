import styled from "styled-components";

const Link = styled.a`
  color: white;
  text-decoration: none;
  padding-inline: 5px;
  padding-bottom: 5px;
  font-size: 1.5rem;
  position: relative;

  :after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    border-bottom: 1px solid white;
    transform: scaleX(0);
    transition: transform 0.1s linear;
  }
  :hover:after {
    transform: scaleX(1);
  }
  span {
    padding-left: 10px;
  }
`;

export default Link;
