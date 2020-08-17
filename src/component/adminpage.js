import React, { useState } from 'react';
import WorkersCard from './workersCard';




const Adminpage = (props) => {

    const [name, setName] = useState("");
    const [idcard, setIdCard] = useState("");
    const [post, setPost] = useState("");
    const [edit, setEdit] = useState(null);
    const [workers, setWorkers] = useState([
        {
            name: 'ahmed',
            idcard: '01254365874',
            post: 'admin'
        }
    ])

    const addNewWorker = () => {
        setWorkers([...workers, { name: name, idcard: idcard, post: post }]);
        setName("");
        setIdCard("");
        setPost("");
    };
    const remove = (workerToDelete) => {
        var newworkers = workers.filter((el) => el !== workerToDelete);
        setWorkers(newworkers);
    }
    const update = () => {
        var newworkers = workers.map((el) =>
          el !== edit ? el : { name: name, idcard: idcard, post: post },      
        );

        setWorkers(newworkers);
        setEdit(null);
        setName("");
        setIdCard("");
        setPost("");
      };
    const getInput = (workers) => {
        setName(workers.name);
        setIdCard(workers.idcard);
        setPost(workers.post);
        setEdit(workers);
    };
    return (
        <div>
            <div style={{ width: '100vw', height: '78vh', display: 'grid', backgroundColor: '#f0e5f6' }}>
                <div style={{ margin: '26px' }}>
                    <h2>{edit ? "from here you can update user" : "from here you can add users :"}</h2>
                    <input onChange={(event) => setName(event.target.value)} value={name} placeholder='name' style={{ borderRadius: '50px', marginRight: '15px' }}></input>
                    <input onChange={(event) => setIdCard(event.target.value)} value={idcard} placeholder='id' style={{ borderRadius: '50px', marginRight: '15px' }}></input>
                    <input onChange={(event) => setPost(event.target.value)} value={post} placeholder='post' style={{ borderRadius: '50px' }}></input>
                    <button onClick={edit ? update : addNewWorker} className='bac'> {edit ? "update user" : "Add new user"}</button>
                </div>
                <div style={{ margin: '2px' }}>

                    <WorkersCard workers={workers} remove={(x) => remove(x)} getInput={(x) => getInput(x)} />
                </div>
                <div>
                    <button onClick={props.handleShowtwo} className="ba" >log out</button>
                </div>
            </div>
        </div>
    );
}

export default Adminpage;