import styled from 'styled-components';
import tw from 'twin.macro';
import { GreenPrimaryButton, PrimaryButton } from '../shared/Typography/Buttons';

export const HeroLogoText = styled.h1`
  ${tw`text-[55px] 2xs:text-[70px] sm:text-[100px] md:text-[130px] lg:text-[170px] not-italic font-normal font-techno text-[#FFFFFFE6] tracking-wider`}
`;

export const HeroSubLogoText = styled.h1`
  ${tw`text-[50px] 2xs:text-[55px] sm:text-[80px] md:text-[110px] lg:text-[150px] not-italic font-normal font-techno text-transparent`}
  -webkit-text-stroke: 1px #ffffffe6;
  text-shadow: none;
`;
export const HeroPrimaryButton = styled(PrimaryButton)`
  ${tw`px-[30px] ssm:px-[55px] py-[17px]`}
`;

export const HeroGreenPrimaryButton = styled(GreenPrimaryButton)`
  ${tw`px-[30px] ssm:px-[55px] py-[17px]`}
`;

export const HeroContainer = styled.div`
  ${tw`relative h-screen overflow-hidden md:h-[105vh] flex-col justify-center items-center`}
`;

export const HeroImageContainer = styled.div`
  ${tw`relative aspect-square md:w-[90%] max-h-[90%] -translate-x-8 transition-all duration-200 md:-translate-x-0 h-[87dvh] xxxs:h-[85dvh]`}
`;

export const HeroContent = styled.div`
  ${tw`flex flex-col items-end leading-none`}
`;

export const HeroDescription = styled.div`
  ${tw`text-base sm:text-xl md:text-2xl font-thin text-center font-prompt pb-[20px]`}
`;

export const HeroFooterText = styled.div`
  ${tw`font-bulgatti absolute bottom-0 right-20 lg:right-10 translate-x-[20%] md:translate-x-1/2 scale-[70%] md:scale-80 lg:scale-100 translate-y-1/2 md:translate-y-[20%]`}
`;
