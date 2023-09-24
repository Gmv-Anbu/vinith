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
  return (
    <div>
      <table>
        <tr>{generathead(props.data[0])}</tr>
        <tr>
          {generatdata(props.data[0])}
        </tr>
        <tr>
        {generatdata(props.data[1])}
        </tr>
        <tr>
        {generatdata(props.data[2])}
        </tr>
        <tr>
        {generatdata(props.data[3])}
        </tr>
        <tr>
          <td>5</td>
          <td>5</td>
          <td> swetha</td>
          <td>swetha9@gmail.com</td>
          <td> ntntymtgnthfeneuihberubryvbruijh</td>
        </tr>
        <tr>
          <td>6</td>
          <td>6</td>
          <td> harshikaa</td>
          <td>harshi24@gmail.com</td>
          <td> tntentntnthfwhfeneuihberubryvbruijh</td>
        </tr>
      </table>
    </div>
  );
};
export default Table;
