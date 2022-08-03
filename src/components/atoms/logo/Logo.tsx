interface LogoProp {
  width?: string;
  height?: string;
}

const Logo = ({ width = '80px', height = '24px' }: LogoProp) => (
  <img alt="logo" width={width} height={height} src="/images/logo.svg" />
);

export default Logo;
