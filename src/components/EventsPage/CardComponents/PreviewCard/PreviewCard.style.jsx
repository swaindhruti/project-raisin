import tw from 'twin.macro';
import styled from 'styled-components';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';

export const PreviewCardContainer = styled.div`
  ${tw`w-[280px] h-[420px] xsm:w-[350px] xsm:h-[500px] xl:w-[456.74px] xl:h-[605.44px]  bg-gradient-to-b from-[#002929] to-[#22002b] rounded-[5px] shadow border border-[#074870] flex flex-col justify-between items-center pt-6 pb-6 mb-16 gap-y-4`}
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.4);
`;

export const PreviewCardImage = styled.div`
  background-image: url(${(props) => props.image});
  ${tw`w-[250px] h-[260px] xsm:w-[300px] xsm:h-[280px] xl:w-[338px] xl:h-[300px] rounded-[17.82px] shadow-inner flex-col justify-start items-start inline-flex bg-cover bg-center bg-no-repeat relative top-0 left-0 right-0 bottom-0`}
`;

export const PreviewCardContent = styled.div`
  ${tw`xsm:w-[300px] xl:w-[380px] text-center text-[#e0e5ed]/75 text-xs lg:text-sm font-normal font-montserrat leading-[21px] tracking-wider`}
`;

export const PreviewMoreInfoButton = styled(PrimaryButton)`
  ${tw`text-black xl:text-lg font-normal font-share_tech h-[40px] w-[190px] xl:h-[60px] xl:w-[220px]`}

  box-shadow:
    0 0 5px #ff3d7f,
    0 0 3px #ff3d7f,
    0 0 5px #ff3d7f;

  &:hover {
    box-shadow:
      0 0 3px #ff3d7f,
      0 0 6px #ff3d7f,
      0 0 9px #ff3d7f,
      0 0 12px #ff3d7f,
      0 0 15px #ff3d7f;
  }
`;
