import React, { useState} from "react";


function InputName1() {

    const [name, setName] = useState("");

    const handleSubmit = () => {
        alert(`Hello, ${name}!`);
    };

    return (
        <div>
            <input type="text" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default InputName1;