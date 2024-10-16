import {
  PreviewCardContainer,
  PreviewCardContent,
  PreviewCardImage,
  PreviewMoreInfoButton,
} from './PreviewCard.style';

function PreviewCard({ ImageURL, PreviewDescription = '' }) {
  const words = PreviewDescription?.split(' ') || [];
  const truncatedDescription =
    words.length > 20 ? words.slice(0, 38).join(' ') + '...' : PreviewDescription;

  return (
    <PreviewCardContainer>
      <PreviewCardImage image={ImageURL} />
      <PreviewCardContent>{truncatedDescription}</PreviewCardContent>
      <PreviewMoreInfoButton>MORE INFORMATION</PreviewMoreInfoButton>
    </PreviewCardContainer>
  );
}

export default PreviewCard;
