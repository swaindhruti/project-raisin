import Image from 'next/image';
import {
  SponsorCategoryContainer,
  SponsorTitle,
  SponsorGrid,
  SponsorItem,
} from './Sponsors.styles';

export const SponsorCategory = ({ title, sponsors }) => (
  <SponsorCategoryContainer>
    <SponsorTitle>{title}</SponsorTitle>
    <SponsorGrid>
      {sponsors.map((sponsor, index) => (
        <SponsorItem key={index}>
          <Image
            src={sponsor.src}
            alt={sponsor.name}
            width={sponsor.width}
            height={sponsor.height}
            className='object-contain w-full h-full'
          />
        </SponsorItem>
      ))}
    </SponsorGrid>
  </SponsorCategoryContainer>
);
