import styled from 'styled-components';
import tw from 'twin.macro';
import { Table } from 'flowbite-react';

// Card container styling
export const CardContainer = styled.div`
  ${tw`w-auto md:max-w-[1200px] min-h-[400px] md:min-h-[548px] h-auto bg-[#091123] rounded-[16px] md:rounded-[24px] p-4 md:p-12 lg:p-24 mx-auto`}
  box-shadow: 0px 4px 31px 0px rgba(255, 255, 255, 0.25);
`;

// Title styling
export const CardTitle = styled.div`
  ${tw`w-full text-center font-orbitron mb-6 md:mb-12 font-semibold text-[14px] sm:text-[16px] md:text-[24px] lg:text-[32px] leading-[22px] md:leading-[40.13px]`}
`;

// Table container styling
export const TableContainer = styled(Table)`
  ${tw`w-full`}
`;

// Table HeadCell styling
export const TableHeadCell = styled(Table.HeadCell)`
  ${tw`font-orbitron font-bold text-center text-[8px] xsm:text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] leading-[12px] md:leading-[24px] pb-2 md:pb-4 border-b border-gray-700`}
`;

// Table Row styling
export const TableRow = styled(Table.Row)`
  ${tw`hover:bg-gray-800 transition-all`}
`;

// Table Cell styling
export const TableCell = styled(Table.Cell)`
  ${tw`font-montserrat text-[#FFF7F7] text-center font-medium text-[8px] sm:text-[10px] md:text-[14px] lg:text-[16px] leading-[12px] sm:leading-[18px] md:leading-[22px]`}
`;
