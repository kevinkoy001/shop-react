import React, { useState } from 'react';

const ToDo = (props) => {
    const [toDoName, setToDoName] = useState('')
    const HandelChange = (e) => {
        setToDoName(e.target.value)
    }
    const [toDoLIst, setTodoList] = useState([])

    const handelToDoLIst = (e) => {
        setTodoList(toDoLIst.concat(toDoName))
    }
    return (
        <div className="text-center">
            <input
                className="form-control-plaintext"
                value={toDoName}
                onChange={HandelChange}
                placeholder="pleas input ....."
            />
            <button
                onClick={handelToDoLIst}
                className="btn btn-outline-primary"
            >submite
            </button>
            <ul className="list-group list-group-flush">
                {
                    toDoLIst.map(item =>
                        <li key={item} className="list-group-item">{item}</li>
                    )
                }
            </ul>
        </div>
    );
}

export default ToDo;
