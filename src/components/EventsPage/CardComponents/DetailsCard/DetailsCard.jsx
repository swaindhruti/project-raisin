import {
  DescriptionCardContainer,
  DescriptionCardInner,
  DescriptionCardHeading,
  DescriptionCardContent,
  DescriptionCardImage,
} from './DetailsCard.style';

function DetailsCard({ ImageURL, Heading, Description }) {
  return (
    <DescriptionCardContainer>
      <DescriptionCardInner>
        <DescriptionCardHeading>{Heading}</DescriptionCardHeading>
        <DescriptionCardContent>{Description}</DescriptionCardContent>
      </DescriptionCardInner>
      <DescriptionCardImage image={ImageURL} />
    </DescriptionCardContainer>
  );
}

export default DetailsCard;
