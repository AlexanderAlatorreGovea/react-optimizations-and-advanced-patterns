import React, { useState } from "react";

export const RenderProps = () => {
  return (
    <div> 
        Hello world
      <GetPropsFromRenderPropsParent
        render={(prop) => <GetPropsFromRenderPropsChild prop={prop} />}
      />
    </div> 
  );
};

function GetPropsFromRenderPropsParent({ render }) {
  const [color, useColor] = useState("blue");
  return <div>parent: {render(color)}</div>;
}

function GetPropsFromRenderPropsChild({ prop }) {
  return <div style={{ background: `${prop}` }}>child: {prop}</div>;
}
