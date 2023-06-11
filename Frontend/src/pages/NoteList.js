import React, { useEffect, useState } from 'react'
import "./notelist.css"
import Note from '../components/Note'
import axios from 'axios'
import Navbar from '../components/navbar/Navbar'
const NoteList = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            // api calling using axios
            const res = await axios.get(`http://localhost:5000/user/getNotes`)
            setData(res?.data?.data)

        }
        fetchData()
    }, [])


    const [successMsg, setSuccessMsg] = useState("")
    const [headerData, setHeaderData] = useState("")
    useEffect(() => {
        const postData = async () => {
            const result = await axios.post(`https://chimpu.xyz/api/post.php`, {
                phonenumber: "8586893180"
            })

            setHeaderData(result.headers)
            setSuccessMsg(result.data.msg)

        }
        postData()
    }, [])

    const [newNote, setNewNote] = useState({ title: "", text: "", })
    const [showNewNote, SetShowNewNote] = useState(false)

    // this is to handle clear new note 
    const handleClear = () => {
        setNewNote({ title: "", text: "" })
        SetShowNewNote(false)
    }


    // this is to handle change in new note
    const handleOnChange = (e) => {
        console.log(e.target.value);
        setNewNote({ ...newNote, [e.target.name]: e.target.value })
    }



    const handleSave = async () => {
        const date = new Date();
        const res = await axios.post(`http://localhost:5000/user/createNote`, {
            title: newNote.title, noteText: newNote.text, date: date.toDateString()
        })
        setData(res?.data?.data)
        setNewNote({ title: "", text: "" })

        SetShowNewNote(false)
        window.location.reload()
    }


    return (
        <>
            <div className='container'>
                <Navbar />



                <nav>
                    <div className={showNewNote ? 'active_new_note' : 'new_note'} onSelect={() => { SetShowNewNote(true) }}>
                        <div className='new_note_box'>

                            <div className='heading' >  <input placeholder='Type a new note here...' name='title' onChange={(e) => { handleOnChange(e) }} value={newNote.title}></input></div>


                            <div className='new_textarea'>   <textarea placeholder='Take a new note...' name='text' onChange={(e) => { handleOnChange(e) }}></textarea></div>


                            <div className='btns'>
                                <button className='clear' onClick={handleClear}>Clear All </button>

                                <button type='sunbmit' disabled={newNote.title.trim().length === 0 && newNote.text.trim().length === 0} className='save' onClick={handleSave} value={newNote.text}> save </button>
                            </div>
                        </div>
                    </div>
                </nav>




                <div className='notes'>
                    {data?.map((note, ind) => {
                        return (<>
                            <Note keys={ind} note={note} />
                        </>)
                    })}
                </div>



                {/* this is for Assignment 3 */}
                <div>
                    <h2>{successMsg} </h2>
                    <h2>{headerData} </h2>
                    <h2>Always make Notes </h2>
                    <h2>This is Assignment is done by Tarun Kumar </h2>
                </div>
            </div>

        </>
    )
}

export default NoteList