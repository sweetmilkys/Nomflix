import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: fles;
  justify-content: center;
`;

const Text = styled.span`
  color: ${props => props.color};
`;

const Message = ({ color, text }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.prototype = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Message;