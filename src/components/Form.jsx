import { useState } from "react"
import axios from "axios";

export const Form = () => {
    const url = "https://boiling-lowlands-89127.herokuapp.com/"
    const [data, setData] = useState({
        name: "",
        department: "",
        email: "",
        mobile: "",
        address: ""
    });
    async function submit(e) {
        // e.preventDefault();
        window.location.reload()
        await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
        // axios.post(url,{
        //     name: data.name,
        //     department: data.department,
        //     email: data.email,
        //     mobile: data.mobile,
        //     address: data.address
        // })
        // .then(res=>{
        //     console.log(res.data);
        // })
    }

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div>
            <h1>STUDENT ENTRY FORM</h1>
            <form onSubmit={(e) => submit(e)}>
                <input type="text" value={data.name} id="name" placeholder="Enter your name" onChange={(e) => handle(e)}/>
                <input type="text" value={data.department} id="department" placeholder="Enter your department" onChange={(e) => handle(e)}/>
                <input type="text" value={data.email} id="email" placeholder="Enter your email" onChange={(e) => handle(e)}/>
                <input type="text" value={data.mobile} id="mobile" placeholder="Enter your mobile" onChange={(e) => handle(e)}/>
                <input type="text" value={data.address} id="address" placeholder="Enter your address" onChange={(e) => handle(e)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}