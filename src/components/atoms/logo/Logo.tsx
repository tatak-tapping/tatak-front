interface LogoProp {
  width?: string;
  height?: string;
}

const Logo = ({ width = 'auto', height = 'auto' }: LogoProp) => (
  <img alt="logo" width={width} height={height} src="/public/images/logo.svg" />
);

export default Logo;