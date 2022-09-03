import styled from 'styled-components';

export const StyleImage = styled.div<{ $inline?: boolean }>`
  display: ${({ $inline }) => ($inline ? 'inline-block' : 'initial')};
`;
