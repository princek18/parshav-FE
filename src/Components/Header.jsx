import { Button } from "antd";

// eslint-disable-next-line react/prop-types
export const Header = ({ handleOpen }) => {
  const headerStyle = {
    display: "flex",
    height: "8vh",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={headerStyle}>
      <Button onClick={handleOpen} type="primary">
        Add Entry
      </Button>
    </div>
  );
};
