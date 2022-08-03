import styled from '@emotion/styled';

const StyledImage = styled.img<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  cursor: pointer;
`;

interface ProfileImageProps {
  src: string;
  width?: string;
  height?: string;
  onClick?: VoidFunction;
}

///images/logo.svg
const ProfileImage = ({
  src = '/images/profile_default.svg',
  onClick,
  width = '32x',
  height = '32x',
}: ProfileImageProps) => {
  return <StyledImage alt="profile" src={src} onClick={onClick} width={width} height={height} />;
};

export default ProfileImage;
