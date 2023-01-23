import React, { useState }   from "react";
import Paginate              from "react-paginate";
import Modals                from "./modal/modals.js"
import "./main.css";

const Table = (props) => {

    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage
  
    const displayUsers = props.list
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((spot, index) => {
      return(
        <tr key={index} className="w-full mb-4 ml-6 border-b border-gray-200">
            <td className="flex justify-center px-4 py-2">{spot.stationName}</td>

            <td className="px-4 py-2">
                <div className="w-full flex justify-center items-center">
                    <div className="mr-2">
                        {
                          (function(){
                            if(spot.coValue >= 2){
                                return ( <div className="bg-red-400 w-4 h-4 rounded-full"></div> )
                            }else if(spot.coValue >= 0.7){
                                return ( <div className="bg-yellow-400 w-4 h-4 rounded-full"></div> )
                            }else if(spot.coValue >= 0){
                                return ( <div className="bg-green-400 w-4 h-4 rounded-full"></div> )
                            }
                          })()
                        }
                    </div>
                    <span className="text-sm text-gray-700">{spot.coValue}</span>
                </div>
            </td>
            
            <td className="px-4 py-2">
                <div className="w-full flex justify-center items-center">
                    <div className="mr-2">
                        {
                            (function(){
                                if(spot.pm10Value >= 80){
                                    return ( <div className="bg-red-400 w-4 h-4 rounded-full"></div> )
                                }else if(spot.pm10Value >= 70){
                                    return ( <div className="bg-yellow-400 w-4 h-4 rounded-full"></div> )
                                }else if(spot.pm10Value >= 0){
                                    return ( <div className="bg-green-400 w-4 h-4 rounded-full"></div> )
                                }
                            })()
                        }
                    </div>
                    <span className="text-sm text-gray-700">{spot.pm10Value}</span>
                </div>
            </td>
            
            <td className="px-4 py-2">
                <div className="w-full flex justify-center items-center">
                    <div className="mr-2">
                        {
                            (function(){
                                if(spot.coGrade >= 50){
                                    return ( <div className="bg-red-400 w-4 h-4 rounded-full"></div> )
                                }else if(spot.coGrade >= 30){
                                    return ( <div className="bg-yellow-400 w-4 h-4 rounded-full"></div> )
                                }else if(spot.coGrade >= 0){
                                    return ( <div className="bg-green-400 w-4 h-4 rounded-full"></div> )
                                }
                            })()
                        }
                    </div>
                    <span className="text-sm text-gray-700">{spot.coGrade}</span>
                </div>
            </td>
            
            <td className="px-4 py-2">
                <div className="w-full flex justify-center items-center">
                    <div className="mr-2">
                        {
                            (function(){
                                if(spot.khaiValue>= 90){
                                    return ( <div className="bg-red-400 w-4 h-4 rounded-full"></div> )
                                }else if(spot.khaiValue>= 70){
                                    return ( <div className="bg-yellow-400 w-4 h-4 rounded-full"></div> )
                                }else if(spot.khaiValue>= 0){
                                    return ( <div className="bg-green-400 w-4 h-4 rounded-full"></div> )
                                }
                            })()
                        }
                    </div>
                    <span className="text-sm text-gray-700">{spot.khaiValue}</span> 
                </div>
            </td>
            
            <td className="flex justify-center px-4 py-2 text-sm text-gray-700">{spot.dataTime}</td>
        </tr>
      );
    });

    const pageCount = Math.ceil(props.list.length / usersPerPage);
    const changePage = ({selected}) => {
      setPageNumber(selected)
    }

    return (
        <div>
            <table className="w-full border-b border-gray-600">
                <thead className="bg-green-600">
                    <tr className="">
                        <th className="py-4 text-sm text-white">측정소명</th>
                        <th className="text-sm text-white">일산화탄소 농도</th>
                        <th className="text-sm text-white">일산화탄소 지수</th>
                        <th className="text-sm text-white">미세먼지 농도</th>
                        <th className="text-sm text-white">통합대기환경 수치</th>
                        <th className="text-sm text-white">측정일 / 시</th>
                    </tr>
                </thead>
                <tbody>
                    {displayUsers}
                </tbody>
            </table>
            <div>
                <Paginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={changePage}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    className="Paginate"
                /> 
                <div>
                    <Modals/>
                </div>
            </div>
        </div>
    );
}

export default Table;