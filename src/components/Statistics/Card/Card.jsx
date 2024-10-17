'use client';
import { Info, Topics } from '@/config/content/Statistics/CardData';
import { Table } from 'flowbite-react';
import {
  CardContainer,
  CardTitle,
  TableHeadCell,
  TableRow,
  TableCell,
  TableContainer,
} from './Card.styles';

export const Card = () => {
  return (
    <CardContainer>
      <CardTitle>Top College Students Registered for Innovision</CardTitle>

      <TableContainer>
        <Table.Head>
          {Topics.map((topic, index) => (
            <TableHeadCell key={index}>{topic}</TableHeadCell>
          ))}
        </Table.Head>

        <Table.Body className='divide-y divide-gray-700'>
          {Info.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item.Rank}</TableCell>
              <TableCell>{item.college}</TableCell>
              <TableCell>{item.Students}</TableCell>
            </TableRow>
          ))}
        </Table.Body>
      </TableContainer>
    </CardContainer>
  );
};
