import Block from "../block/block";

import "./main.css";

const Main = ({ data }) => {
  const elements = data.map((item) => {
    return <Block title={item.title}></Block>;
  });

  return <div className="main d-flex align-items-start ">{elements}</div>;
};

export default Main;
