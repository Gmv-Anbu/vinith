import React from 'react';
const Table = (props) => {
  console.log(props.data);

  const [filterdata, setfilterdata] = React.useState([]);

  const [page, setpage] = React.useState(1);
  const [lastpage, setlastpage] = React.useState(1);
  const [pagelimit, setpagelimit] = React.useState(10);

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
  const displaypage = (page) => {
    // let page = 1;
    let start = (page - 1) * pagelimit;
    let end = start + pagelimit;
    let newdata = props.data.slice(start, end);
    setpage(page);
    setfilterdata(newdata);
  };
  const generatebuttons = () => {
    let start = page - 2 > 1 ? page - 2 : 1;
    let end = page + 2 < lastpage ? page + 2 : lastpage;
    let buttons = [];
    for (let i = start; i <= end; i++) {
      buttons.push(i);
    }
    return buttons.map((eachbutton) => (
      <button
        className={page === eachbutton ? 'activepage' : ''}
        onClick={() => displaypage(eachbutton)}
      >
        {' '}
        {eachbutton}{' '}
      </button>
    ));
  };
  React.useEffect(() => {
    setlastpage(Math.ceil(props.data.length / pagelimit));
    displaypage(1);
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => displaypage(1)}> &lt;&lt; </button>
        <button onClick={() => displaypage(page - 1)} disabled={page === 1}>
          {' '}
          &lt;{' '}
        </button>
        {/* <button onClick={() => displaypage(1)}> 1 </button>
        <button onClick={() => displaypage(2)}> 2 </button>
        <button onClick={() => displaypage(3)}> 3 </button>
        <button onClick={() => displaypage(4)}> 4 </button>
        <button onClick={() => displaypage(5)}> 5 </button> */}
        {generatebuttons()}
        <button
          onClick={() => displaypage(page + 1)}
          disabled={page === lastpage}
        >
          {' '}
          &gt;{' '}
        </button>
        <button onClick={() => displaypage(lastpage)}> &gt;&gt; </button>
      </div>
      <table>
        <tr>{generathead(props.data[0])}</tr>
        {generatrow(filterdata)}
      </table>
    </div>
  );
};
export default Table;
