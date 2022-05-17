import { customerA, customerB } from "./customerTypes";
import "../App.css";
import { useState } from "react";

function Composition() {
  const OrderReportWithComposition = withComposition(OrderReport);

  return (
    <div className="App">
      <OrderReport customer={customerA}>I am your child</OrderReport>
      <OrderReportWithComposition
        customer={customerB}
        isFastTracked={false}
      >
        This is fast tracked
      </OrderReportWithComposition>
    </div>
  );
}

function OrderReport({ customer, children }) {
  const { name, address, total } = customer;

  return (
    <div style={{ marginTop: "4rem" }}>
      <b>{name}</b>
      <hr />
      <span>{address}</span>
      <br />
      <span>Orders: {total}</span>
      {children}
    </div>
  );
}

const withComposition =
  (BaseComponent) =>
  ({ isFastTracked, customer, children }) => {
    const [fastTracker, setFastTracker] = useState(isFastTracked);
    const [text, setText] = useState("");

    const toggleFastTracker = () => {
      setFastTracker(!fastTracker);
    };

    const isFastrackerEnabled = fastTracker ? (
      <div>Fast Tracked Enabled</div>
    ) : (
      <div>Not Fast Tracked</div>
    );

    const ChildrenOfBaseComponent = (
      <BaseComponent customer={customer}>
        <br />
        <button onClick={toggleFastTracker}>Toggle Tracker</button>
        {isFastrackerEnabled}
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <h2>{text}</h2>
      </BaseComponent>
    );

    return ChildrenOfBaseComponent;
  };

export default Composition;
