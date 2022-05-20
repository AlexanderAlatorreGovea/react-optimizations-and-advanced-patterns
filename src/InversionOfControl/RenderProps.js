import React, { useState } from "react";

export const RenderProps = () => {
  return (
    <div>
      Hello world
      <GetPropsFromRenderPropsParent
        render={(prop) => <GetPropsFromRenderPropsChild prop={prop} />}
        getProps={(prop) => getPropsThroughFunction(prop)}
      />
    </div>
  );
};

function GetPropsFromRenderPropsParent({ render, getProps }) {
  const [color, useColor] = useState("blue");
  getProps({ color, useColor });

  useMyFunc(color)

  return (
    <>
      <div style={{ color: `${color}` }}>parent</div>
      <div>{render(useColor)}</div>
    </>
  );
}

function GetPropsFromRenderPropsChild({ prop }) {
  const changeColor = () => {
    prop("red");
  };

  return (
    <div>
      child:
      <button onClick={changeColor}>change color</button>
    </div>
  );
}

function getPropsThroughFunction(props) {
  return props;
}

const useMyFunc = (func) => {
  console.log(func)
};
