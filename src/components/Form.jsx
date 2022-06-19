import axios from "axios";
import { useState } from "react"

export const Form = () => {
    const url = "https://boiling-lowlands-89127.herokuapp.com/"
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("")
    // const [data, setData] = useState({
    //     name: "",
    //     department: "",
    //     email: "",
    //     mobile: "",
    //     address: ""
    // });
    // async function submit(e) {
    //     // e.preventDefault();
    //     window.location.reload()
    //     await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //       });
    //     // axios.post(url,{
    //     //     name: data.name,
    //     //     department: data.department,
    //     //     email: data.email,
    //     //     mobile: data.mobile,
    //     //     address: data.address
    //     // })
    //     // .then(res=>{
    //     //     console.log(res.data);
    //     // })
    // }

    // function handle(e) {
    //     const newdata = {...data}
    //     newdata[e.target.id] = e.target.value
    //     setData(newdata)
    //     console.log(newdata)
    // }
    const submiValue = async(e) => {
        const data = {
            name: name,
            department: department,
            email: email,
            mobile: mobile,
            address: address,
        }
        await postData(data);
        window.location.reload()
    }
    async function postData(data) {
        await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    }

    return (
        <div>
            <h1>STUDENT ENTRY FORM</h1>
            <form>
                <input type="text" value={name} id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
                <input type="text" value={department} id="department" placeholder="Enter your department" onChange={(e) => setDepartment(e.target.value)}/>
                <input type="text" value={email} id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" value={mobile} id="mobile" placeholder="Enter your mobile" onChange={(e) => setMobile(e.target.value)}/>
                <input type="text" value={address} id="address" placeholder="Enter your address" onChange={(e) => setAddress(e.target.value)}/>
                <button type="button" onClick={submiValue}>Submit</button>
            </form>
        </div>
    )
}