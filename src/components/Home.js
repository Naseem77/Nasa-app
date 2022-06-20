import axios from 'axios'
import { useState, useEffect } from 'react';
import Media from './Media'
import ReactLoading from "react-loading";

function Home() {
    const [data, setData] = useState([])
    const [done, setDone] = useState(false)

    useEffect(() => {
        setDone(true)
        async function fetchData() {
            const response = await axios.get("http://localhost:8080/nasa/home")
            setData(response.data)
            setDone(false)
        }
        fetchData()
    }, [])

    return (
        <div >
            {done === true ? (
                <ReactLoading id="loading" type={"bars"} color={"black"} />
            ) : (
                    <Media data={data} />
                )}
        </div>


    );
}

export default Home;