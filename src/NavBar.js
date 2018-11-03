import React from "react";
import { Link } from "@reach/router";
import styled, { keyframes } from "react-emotion";
import colours from "./colours";

const Spin = keyframes`
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
`;

const SpyGlass = styled("span")`
  display: inline-block;
  animation: ${props => props.frequency}s ${Spin} linear infinite;
`;
const Container = styled("header")`
  background-color: ${colours.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
  span {
    padding: 10px;
    border: 2px solid white;
  }
`;

export default class NavBar extends React.Component {
  state = {
    frequency: 10
  };

  halfFrequency = () => this.setState({ frequency: this.state.frequency / 2 });
  render() {
    return (
      <Container>
        <NavLink to="/">Adopter</NavLink>
        <NavLink to="/search-params">
          <SpyGlass
            onClick={this.halfFrequency}
            frequency={this.state.frequency}
            aria-label="search"
            role="img"
          >
            🔍
          </SpyGlass>
        </NavLink>
      </Container>
    );
  }
}
