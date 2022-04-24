import styled from '@emotion/styled';

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

interface ProfileImageProps {
  src: string;
}

///images/logo.svg
const ProfileImage = ({ src = '/images/profile_default.svg' }: ProfileImageProps) => {
  return <StyledImage alt="profile" src={src} />;
};

export default ProfileImage;