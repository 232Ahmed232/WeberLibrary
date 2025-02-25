import React, { useState, useEffect, useContext } from 'react';
import { list } from '../Body/Data';
import searchcontext from '../../context/search/searchcontext';




function Input() {


    const [value, setvalue] = useState("Search Any By Image")
    const [display, setdisplay] = useState("hidden")




    var searchList = list.filter((item) => {

            
        
        const search = value.toLowerCase()
        const name = item.name.toLowerCase()



        return value && name.includes(search)
    })

    const { setitem } = useContext(searchcontext)
    const onsearch = (value) => {

    }
    const onch = (e) => {
        const val = e.target.value
        setvalue(val)
        setitem(val)
        setdisplay(" ")
    }
    function oncl(name) {
        setvalue(name)
        setitem(name)
        setdisplay("hidden")
    }


    return (
        <div className='text-center'>

            <input type="text"
                className='border-2 border-black mt-48 h-8 w-1/1 lg:w-1/3 pl-4 py-4 font-semibold'
                placeholder='Search Here'
                value={value}
                onChange={onch}


            />
            <i
                onClick={() => onsearch(value)}
                className="fa-solid fa-magnifying-glass text-2xl ml-4 p-1 rounded hover:bg-green-400 hover:text-white "
            ></i>
            <div className={`bg-slate-100 container mx-auto m-1 w-1/2 h-1/4 text-black ${display}`}  >
                {
                    
                    (searchList.length == 0 && value.length > 2 )? 
                    <h2 className='text-xl text-red-700 font-bold'>Item Not Found</h2>:
                    searchList.map((ele) => 
                        {
                            const parts = ele.name.split(new RegExp(`(${value})`, "gi"))
        
                            return(<h4 
                            onClick={() => oncl(ele.name)} 
                            className={`text-1xl font-bold mb-1 hover:bg-red-200 ${display}`} key={ele.id}>
                                <span>                        
                                {parts.map((part, index) => {
                                                return part.toLowerCase() === value.toLowerCase() ? (
                                                    <b key={index} className='text-blue-800'>{part}</b>
                                                ) : (
                                                    part
                                                );
                                            })}
                                </span>
        
                                
                                </h4>)
                            }
                    )}
                <hr />

            </div>
        </div>
    );
}
export default Input;


