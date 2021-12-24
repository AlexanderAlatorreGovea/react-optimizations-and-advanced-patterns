import { customerA, customerB, customerC } from "./customerTypes";
import "../App.css";
import { useState } from "react";

function Composition() {
  const OrderReportWithComposition = withComposition(OrderReport);
  
  return (
    <div className="App">
      <OrderReport customer={customerA}>I am your child</OrderReport>
      <OrderReportWithComposition
        customer={customerB}
      ></OrderReportWithComposition>
    </div>
  );
}

function OrderReport({ customer, children }) {
  const { name, address, total } = customer;

  return (
    <div>
      <b>{name}</b>
      <hr />
      <span>{address}</span>
      <br />
      <span>Orders: {total}</span>
      {children}
    </div>
  );
}

const withComposition = (BaseComponent) => (props) => {
  const [fastTracker, setFastTracker] = useState(props.isFastTracked);

  const toggleFastTracker = () => {
    setFastTracker(!fastTracker);
  };

  const isFastrackerEnabled = fastTracker ? (
    <div>Fast Tracked Enabled</div>
  ) : (
    <div>Not Fast Tracked</div>
  );

  const ChildrenOfBaseComponent = (
    <BaseComponent customer={props.customer}>
      <br />
      <button onClick={toggleFastTracker}>Toggle Tracker</button>
      {isFastrackerEnabled}
    </BaseComponent>
  );

  return ChildrenOfBaseComponent;
};

export default Composition;
