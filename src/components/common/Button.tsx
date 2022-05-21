import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled('div')`
  color: yellow;
`;

export const Button = ({ text }: any) => {
  return <Wrapper>{text}</Wrapper>;
};
