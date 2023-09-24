import React from 'react';
import '../css/pagination.css';
import Table from '../components/tabel';
function Pagination() {
  // const data = [];
  const [data, setdata] = React.useState([]);
  const getdata = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responsedata) => {
        // data=responsedata;
        setdata(responsedata);
        console.log(responsedata);
      });
  };
  getdata();
  return (
    <div> {data.length > 0 ? <Table data={data}> </Table> : 'loding...'} </div>
  );
}

export default Pagination;
