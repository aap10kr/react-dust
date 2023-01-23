import React from "react"

const Search = (props) => {
    
    const onChange = (event) => {
        props.selectValues(event.target.value);
      };

    const onSubmits = () => {
        props.getData();
    }
    
    return(
    <div className="flex justify-between w-full px-4 py-2 mt-20 mb-10 rounded-full bg-gray-100">
        <input 
            type="text" 
            placeholder="(ex 경북, 대전     시/도를 입력해 주세요" 
            onChange={onChange}
            className="w-11/12 h-full bg-gray-100 rounded-lg p-2.5 ml-1 border-0 focus:ring-0 focus:border-0 placeholder:text-sm placeholder:text-gray-400"
        />
        <button type="button" onClick={onSubmits} className="px-5 rounded-full cursor-pointer shadow shadow-blue-200 bg-green-600 text-white">검색</button>
    </div>
    )
}

export default Search
