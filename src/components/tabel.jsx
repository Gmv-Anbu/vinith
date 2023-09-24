import React from 'react';
const Table = (props) => {
  console.log(props.data);
  const generathead = (obj) => {
    const keys = Object.keys(obj);
    console.log(keys);
    return keys.map((e) => <th>{e}</th>);
  };
  const generatdata = (obj) => {
    const keys = Object.keys(obj);
    console.log(keys);
    return keys.map((e) => <td>{obj[e]}</td>);
  };
  const generatrow = (data) => {
   
    return data.map((e) => <tr>{generatdata(props.data[0])}</tr>);
  };
  return (
    <div>
      <table>
        <tr>{generathead(props.data[0])}</tr>
        {generatrow(props.data)}
       
      </table>
    </div>
  );
};
export default Table;
