import styled from 'styled-components';
import tw from 'twin.macro';

// Header container styling
export const HeaderContainer = styled.div`
  ${tw`w-full flex justify-center sm:justify-between items-center overflow-hidden`}
`;

// Jet Image Container (left side, hidden on small screens)
export const JetImageContainer = styled.div`
  ${tw`w-1/3 max-sm:hidden`}
`;

// Empty Container (right side, hidden on small screens)
export const EmptyContainer = styled.div`
  ${tw`w-1/3 sm:block hidden`}
`;
