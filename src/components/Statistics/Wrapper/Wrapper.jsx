import { Header } from '../Header/Header';
import { Card } from '../Card/Card';
import { Chart } from '../Chart/Chart';
import { StatisticsMainContainer, StatisticsBodyContainer } from './Wrapper.styles';

export const StatisticsMain = () => {
  return (
    <>
      <StatisticsMainContainer>
        <Header />
        <StatisticsBodyContainer>
          <div className='flex justify-center items-center'>
            <Card />
          </div>
          <Chart />
        </StatisticsBodyContainer>
      </StatisticsMainContainer>
    </>
  );
};
