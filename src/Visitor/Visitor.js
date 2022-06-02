import React from "react";

const simpleFormSchema = [
  {
    label: "Name",
    required: true,
    fieldType: "Text",
  },
  {
    label: "Birthdate",
    required: true,
    fieldType: "Date",
  },
  {
    label: "Number of Pets",
    required: false,
    fieldType: "Number",
  },
];

const formWithChildrenSchema = [
  {
    label: "Personal Details",
    fieldType: "Section",
    children: [
      {
        label: "Name",
        fieldType: "Text",
      },
      {
        label: "Birthdate",
        fieldType: "Date",
      },
    ],
  },
  {
    label: "Favorites",
    fieldType: "Section",
    children: [
      {
        label: "Favorite Movie",
        fieldType: "Text",
      },
    ],
  },
];

const defaultComponents = {
  Text: ({ label }) => (
    <label>
      {label}
      <input type="text" />
    </label>
  ),
  Date: ({ label }) => (
    <label>
      {label}
      <input type="date" />
    </label>
  ),
  Number: ({ label }) => (
    <label> 
      {label}
      <input type="number" />
    </label>
  ),
  Section: ({ label, children }) => (
    <details>
      <summary>{label}</summary>
      {children}
    </details>
  ),
};

function ViewGenerator({ schema, components }) {
  const mergedComponents = {
    ...defaultComponents,
    ...components,
  };

  return schema.map((field, index) => {
    const children = field.children ? (
      <ViewGenerator schema={field.children} components={mergedComponents} />
    ) : null;

    return ( 
      <React.Fragment key={index}>
        {mergedComponents[field.fieldType]({ ...field, children })}
      </React.Fragment>
    );
  });
}

export default function App() {
  return (
    <>
      <h2>Simple Form</h2>
      <ViewGenerator schema={simpleFormSchema} />

      <h2>Form With Children</h2>
      <ViewGenerator schema={formWithChildrenSchema} />
    </>
  );
}
