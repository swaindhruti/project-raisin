import styled from 'styled-components';
import tw from 'twin.macro';

export const StatisticsMainContainer = styled.div`
  ${tw`flex flex-col w-full h-auto min-h-screen overflow-x-auto overflow-hidden`}
  background: url('https://res.cloudinary.com/dpmlrxlzr/image/upload/v1728916828/Random_static_7_tdouie.png'),
    conic-gradient(from 180deg, #1a1a1a 0%, #1c4953 23%, #1a1a1a 50%, #8e1e78 70%, #1a1a1a 98%);
  min-width: 100vw;
`;

export const StatisticsBodyContainer = styled.div`
  ${tw`flex flex-col justify-center items-center gap-10 p-20 bg-black bg-opacity-50`}
`;
