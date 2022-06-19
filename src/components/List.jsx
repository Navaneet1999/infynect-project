import { useEffect, useState } from "react"
import "./List.css"

export const List = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch("https://boiling-lowlands-89127.herokuapp.com/")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setDatas(data))
    },[]);
    console.log("data", datas)

    return (
        <div className="App">
            <h1>STUDENT LIST</h1>
            <table >
                <tr className="header">
                    <td>NAME</td>
                    <td>DEPARTMENT</td>
                    <td>EMAIL</td>
                    <td>MOBILE</td>
                    <td>ADDRESS</td>
                </tr>
                {datas.map((data)=>(
                    <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.department}</td>
                        <td>{data.email}</td>
                        <td>{data.mobile}</td>
                        <td>{data.address}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}