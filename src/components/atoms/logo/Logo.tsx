interface LogoProp {
  width?: string;
  height?: string;
}

const Logo = ({ width = '70px', height = 'auto' }: LogoProp) => (
  <img alt="logo" width={width} height={height} src="/images/logo.svg" />
);

export default Logo;
