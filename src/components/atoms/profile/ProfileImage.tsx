import styled from '@emotion/styled';

const StyledImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  margin-left:16px;
  cursor: pointer;
`;

interface ProfileImageProps {
  src: string;
  onClick?: VoidFunction;
}

///images/logo.svg
const ProfileImage = ({ 
  src = '/images/profile_default.svg',
  onClick
  }: ProfileImageProps) => {
  return <StyledImage alt="profile" src={src} onClick={onClick}/>;
};

export default ProfileImage;