import styled from 'styled-components';
import tw from 'twin.macro';
import { BodyTitle } from '../AboutUs/AboutUs.styles';

export const SponsorsHeading = styled(BodyTitle)`
  ${tw`mb-0`}
`;
2;

export const SponsorWrapper = styled.div`
  ${tw`min-h-screen p-4 sm:p-6 md:p-8 bg-black bg-opacity-50`}
`;

export const SponsorContainer = styled.div`
  ${tw`mx-auto max-w-7xl `}
`;

export const SponsorRow = styled.div`
  ${tw`flex flex-col gap-4 md:flex-row sm:gap-6`}
`;

export const HalfColumn = styled.div`
  ${tw`w-full md:w-1/2`}
`;

export const SponsorCategoryContainer = styled.div`
  ${tw`p-4 mb-4 rounded-lg sm:p-6 sm:mb-6 h-auto`}
  background: linear-gradient(182deg, #464646 -65%, rgba(70, 70, 70, 0.15) 98.55%);
`;

export const SponsorTitle = styled.h2`
  ${tw`mb-3 text-xl font-bold text-white sm:text-2xl sm:mb-4 text-center`}
`;

export const SponsorGrid = styled.div`
  ${tw`flex flex-wrap justify-around items-center gap-4 sm:gap-6 md:gap-8`}
`;

export const SponsorItem = styled.div`
  ${tw`w-1/3 sm:w-1/4 md:w-auto`}
`;
