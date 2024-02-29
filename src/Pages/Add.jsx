import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Add_user } from '../action/Action';

function Add() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [city, setcity] = useState('');
    const [degi, setdegi] = useState('');
    const [salary, setsalary] = useState('');
    const [contact, setcontact] = useState('');
    const dispatch = useDispatch();
    

    const submit = () => {
        let id = Math.floor(Math.random() * 100);
        let obj = { id, name, email, password, city, degi, salary, contact };
        dispatch(Add_user(obj));
    }
    return (
        <>
            <div className="container">
                <div className="w-50 m-auto">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setname(e.target.value)} value={name} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setemail(e.target.value)} value={email} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">password</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setpassword(e.target.value)} value={password} />
                        </div><div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">City</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setcity(e.target.value)} value={city} />
                        </div><div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Degignation</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setdegi(e.target.value)} value={degi} />
                        </div><div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">salary</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setsalary(e.target.value)} value={salary} />
                        </div><div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">contact</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setcontact(e.target.value)} value={contact} />
                        </div>
                        <button type="button" class="btn btn-primary" onClick={submit}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Add
