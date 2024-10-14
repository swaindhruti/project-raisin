import tw from 'twin.macro';
import styled from 'styled-components';
import { Heading1 } from '@/components/shared/Typography/Headings';
import { SmallParagraph } from '@/components/shared/Typography/Paragraphs';

export const DescriptionCardContainer = styled.div`
  ${tw`flex md:flex-row flex-col-reverse justify-between items-start bg-transparent `}
`;

export const DescriptionCardHeading = styled(Heading1)`
  ${tw`text-[#e0e5ed] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-orbitron pt-0 pb-4 items-center text-center ml-0`}
`;

export const DescriptionCardInner = styled.div`
  ${tw`flex flex-col items-center justify-between w-full`}

  @media (min-width: 700px) {
    ${tw`flex justify-between items-start`}
  }
`;

export const DescriptionCardContent = styled(SmallParagraph)`
  ${tw` text-white text-base sm:text-lg md:text-base lg:text-lg font-normal font-montserrat [word-wrap: break-word] leading-normal lg:leading-10 pr-0 mb-4 w-[350px] text-left`}

  @media (min-width: 700px) {
    ${tw`w-[350px] pr-5 mb-0`}
  }

  @media (min-width: 1024px) {
    ${tw`w-[512px] h-[332px]`}
  }

  @media (min-width: 1280px) {
    ${tw`w-[612px]`}
  }
`;

export const DescriptionCardImage = styled.div`
  background-image: url(${(props) => props.image});
  ${tw`w-[280px] h-[200px] sm:h-[250px] md:h-[300px] rounded-[17.82px] shadow items-center justify-start inline-flex bg-cover bg-center bg-no-repeat relative left-0 right-0 bottom-0`}
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.4);

  @media (min-width: 700px) {
    ${tw`w-[300px]`}
  }

  @media (min-width: 1024px) {
    ${tw`w-[412px] h-[400px]`}
  }

  @media (min-width: 1280px) {
    ${tw`w-[516px] h-[458px]`}
  }
`;
