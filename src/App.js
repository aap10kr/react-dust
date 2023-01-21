import React, { useState, useEffect } from "react"
import Table                          from "./components/table.js"
import Search                         from "./components/search.js";


function App() {

  const API_KEY = process.env.REACT_APP_API_KEY
  const [list, setList] = useState([]);
  const [text, setText] = useState('서울');

  const getData = async () => {
    const url = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${API_KEY}&sidoName=${text}&returnType=json&numOfRows=100&pageNo=1&ver=1.0`
    const response = await fetch(url);
    const data = await response.json();
    setList(data.response.body.items);
  };

  useEffect(()=>{
    getData();
  },[]);

  const selectValues = (selectValues) => {
    setText(selectValues);
  };

  return (
    <div className="w-full px-40">
      <Search text={text} selectValues={selectValues} getData={getData}/>
      <Table list={list}/>
    </div>
  );
}

export default App;
