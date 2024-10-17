import { BodyTitle } from '@/components/AboutUs/AboutUs.styles';
import Image from 'next/image';
import { HeaderContainer, JetImageContainer, EmptyContainer } from './Header.styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <JetImageContainer>
        <Image
          height={198}
          width={171}
          src='https://res.cloudinary.com/dfe8sdlkc/image/upload/v1728814755/jet_ji9kty.png'
          alt='jetImage'
        />
      </JetImageContainer>
      <BodyTitle>STATISTICS</BodyTitle>
      <EmptyContainer />
    </HeaderContainer>
  );
};
