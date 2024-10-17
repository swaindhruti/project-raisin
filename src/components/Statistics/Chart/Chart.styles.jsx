import styled from 'styled-components';
import tw from 'twin.macro';

// Container for the entire chart (Graph + Label)
export const GraphContainer = styled.div`
  ${tw`flex md:flex-row flex-col justify-center items-center w-full`}
`;

// Container for the label section
export const LabelContainer = styled.div`
  ${tw`flex flex-col md:mt-0 mt-10 md:gap-5`}
`;

// Styling for the title text inside the label
export const Title = styled.div`
  ${tw`font-bold font-orbitron text-[14px] sm:text-[20px] md:text-[24px] lg:text-[32px] lg:leading-[40px]`}
`;
