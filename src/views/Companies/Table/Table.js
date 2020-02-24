import React from "react";
import MaterialTable from "material-table";

export default function Table() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Company", field: "name" },
      {
        title: "Product",
        field: "product",
        lookup: { 1: "berries", 2: "apples" },
      },
      { title: "Amount per kg", field: "amount", type: "numeric" },
      { title: "Price(AMD)", field: "price", type: "numeric" },
      // {
      //   title: 'Product',
      //   field: 'product',
      //   lookup: { 1: 'berries', 2: 'apples' },
      // },
    ],
    data: [
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Add new products here"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
