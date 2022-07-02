interface MessageProps {
  color: string;
  children: React.ReactNode;
}

const StyledMessage = ({ color, children }: MessageProps) => {
  const contentStyle = {
    color,
    fontSize: '20px',
  };

  return <p style={contentStyle}>{children}</p>;
};

export default StyledMessage;
