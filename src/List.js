import { React, useState } from 'react'
function List(props) {
    const filteredData = props.items.filter((el) => {
        if (props.in === '') {
            return el;
        }
        else {
            return el.title.toLowerCase().includes(props.in)
        }
    })
    return (
        <ol>
          {filteredData && filteredData.map(item => (
            <li >
              Title-- {item.title}
            </li>
          ))}
        </ol>
    )
}

export default List