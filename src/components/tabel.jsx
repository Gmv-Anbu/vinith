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
    return data.map((e) => <tr>{generatdata(e)}</tr>);
  };
  return (
    <div>
      <div>
        <button> &lt;&lt; </button>
        <button> &lt; </button>
        <button> 1 </button>
        <button> 2 </button>
        <button> 3 </button>
        <button> 4 </button>
        <button> 5 </button>
        <button> &gt; </button>
        <button> &gt;&gt; </button>
      </div>
      <table>
        <tr>{generathead(props.data[0])}</tr>
        {generatrow(props.data)}
      </table>
    </div>
  );
};
export default Table;
