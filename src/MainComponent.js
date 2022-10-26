import {Button, Input} from 'antd';
import React , {useEffect,useState} from 'react';
import List from './List'
function MainComponent() {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
   const [val,setVal] = useState('')
   const [data,setData] = useState([])

    useEffect(() => {
      fetch("https://hn.algolia.com/api/v1/search?query=hello&page=0",
      {method : 'GET'}).then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.hits);
            console.log(result.hits);
          },
        )
    }, [])

    function List() {
        const filteredData = items.filter((el) => {
            if (el.title.toLowerCase().includes(val)) {
                setData([el])
            }
        })
    }
       if(!isLoaded)
       {
        return <div>Loading...</div>;
       }
       else{
        return (
            <>
            <form>
                <label>Search: </label>
                <Input style={{width:'20%'}} type='text' name='name' onSubmit={(e)=>setVal(e.target.value)}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button type='primary'>Submit</Button>
            </form>   
        <ol>
          {data && data.map(item => (
            <li >
              Title-- {item.title}, Author-- {item.author},URL-- {item.url}
            </li>
          ))}
        </ol>
        </>
      );

       }
         
    }
export default MainComponent