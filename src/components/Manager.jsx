import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()

    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])



    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])

    const showPassword = () => {

        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"

        } else {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text"
        }
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }
    const savePassword = () => {
        if (form.site.length>3 && form.username.length>3 && form.password.length>3) {
        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        setForm({ site: "", username: "", password: "" })
        // to save passwords in local storage
        localStorage.setItem('passwords', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
       
            toast.info('Password saved!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
                theme: "dark",
                transition: "Slide",
            });
        } else {
            toast.info('Password not saved!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
                theme: "dark",
                transition: "Slide",
            });
        }


    }

    const deletePassword = (id) => {
        let c = confirm("Do you really want to delete that password");
        if (c) {


            setpasswordArray([...passwordArray.filter(item => item.id != id)])

            localStorage.setItem('passwords', JSON.stringify([...passwordArray.filter(item => item.id != id)]));
        }
        toast.info('Password deleted successfully!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 1,
            theme: "dark",
            transition: "Slide",
        });
    }
    const editPassword = (id) => {
        setForm(passwordArray.filter(item => item.id === id)[0])
        setpasswordArray([...passwordArray.filter(item => item.id != id)])
        // localStorage.setItem('passwords', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));


    }

    const copyText = (text) => {
        toast.info('Copied To Clipboard!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 1,
            theme: "dark",
            transition: "Slide",
        });
        navigator.clipboard.writeText(text)

    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Slide"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="  flex flex-col container   items-center mx-auto max-w-2xl p-[17px]">

                <div className="text-[30px]  mx-auto font-bold text-black text-center pl-[48px] pt-[8px]">
                    <span className="text-green-700  font-[900]"> &lt;</span>
                    Pass
                    <span className='text-green-700 font-bold pt-[8px]'>OP</span>
                    <span className="text-green-700 text-xl pt-[10px] text-[28px] ">/&gt;</span>
                </div>
                <p className='text-center text-green-900 text-lg'>Your Own Password Manager</p>
                <input onChange={handleChange} placeholder='Enter website URL' value={form.site} className='rounded-lg border border-green-950 text-black py-0.5 px-[11px] w-[80%]' type="text" name='site' />
                <div className='flex justify-center  gap-[6px] mt-[11px]'>

                    <input onChange={handleChange} placeholder='Enter username' className='rounded-lg border border-green-950 text-black py-0 px-[11px] w-full' value={form.username} type="text" name='username' />

                    <div className="relative">

                        <input ref={passwordRef} type="password" placeholder='Enter password' onChange={handleChange} value={form.password} className=' rounded-lg border border-green-950 text-black py-1 px-[11px] w-[115%]' type="text" name='password' />

                        <span onClick={showPassword} className='absolute right-[-15px] top-1.5 '>
                            <img ref={ref} className='w-[21px] pt-[2px] cursor-pointer' src='/icons/eye.png' alt="" />
                        </span>
                    </div>
                </div>
                <button onClick={savePassword} className='gap-[5px] text-[14px] border border-green-950 hover:bg-green-300 hover:font-bold hover:cursor-pointer flex items-center bg-green-400 rounded-full px-2 mt-[15px]  py-1 justify-center w-fit font-semibold' type='button'>
                    <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover">
                    </lord-icon>
                    Save Password</button>

                <div className="passwords w-full">

                    <h2 className='my-[20px] font-bold text-lg '>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords To Show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full mb-[30px] overflow-hidden  rounded-md">
                        <thead className='bg-green-900  text-white'>
                            <tr>
                                <th className='p-1.5' >Site</th>
                                <th className='p-1.5'>Username</th>
                                <th className='p-1.5'>Password</th>
                                <th className='p-1.5'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>

                                    <td className=' p-1.5 border border-white text-center '><a href={item.site} target='_blank'><span>{item.site}</span></a>
                                        <div className='inline-flex justify-center items-center px-[30px] py-[0]'>
                                            <div className='cursor-pointer hover:text-green-500 '>

                                                <i onClick={() => { copyText(item.site) }} className="fa-solid fa-copy"></i>
                                            </div>
                                        </div>
                                    </td>

                                    <td className=' p-1.5 border border-white text-center'><span>{item.username}</span>
                                        <div className='inline-flex justify-center items-center px-[30px] py-[0] hover:text-green-500'>
                                            <i onClick={() => { copyText(item.username) }} className="cursor-pointer    fa-solid fa-copy"></i>
                                        </div>
                                    </td>
                                    <td className=' p-1.5 border border-white text-center '><span>{"*".repeat(item.password.length)}</span>
                                        <div className='inline-flex justify-center items-center px-[30px] py-[0] hover:text-green-500'>
                                            <i onClick={() => { copyText(item.password) }} className="cursor-pointer    fa-solid fa-copy"></i>
                                        </div>
                                    </td>
                                    <td className=' p-1.5 border border-white text-center '>

                                        <span className='pl-[20px] pr-[20px] py-[0] flex text-center gap-[15px] '>
                                            <i onClick={() => { editPassword(item.id) }} className="hover:text-green-500 fa-solid fa-pen-to-square"></i>
                                            <i onClick={() => { { deletePassword(item.id) } }} className="hover:text-green-500 fa-solid fa-trash-can"></i></span>

                                    </td>
                                </tr>
                            })}


                        </tbody>
                    </table>}
                </div>
            </div>




        </>
    )
}

export default Manager
