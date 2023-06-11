import React, { useEffect } from 'react'
import "./note.css"
import axios from 'axios'


const Note = (props) => {


    const { id, title, noteText, date } = props.note

    const handleDelete = async () => {
        // api calling using axios
        await axios.delete(`http://localhost:5000/user/deleteNote?id=${id || 0}`)
        window.location.reload()

    }

    return (
        <>
            <div className='note_box'>
                <div className='note_header'><input placeholder='Title' type='text' value={title || ""}

                ></input></div>
                <div className='note_textarea' ><textarea cols="50" rows="auto-fit" name="textarea" placeholder='Write your note' value={noteText || ""}

                    onClick={(e) => {

                        e.target.style.height = "auto"
                        e.target.style.height = (e.target.scrollHeight) + "px"
                    }}
                ></textarea></div>


                <div className='note_bottom'>
                    <div className='date'>{date || ""}</div>
                    <div onClick={() => {
                        handleDelete()
                    }}><img className='delete_Img' src='https://cdn-icons-png.flaticon.com/512/1345/1345874.png' alt='imgsrc'></img> </div>
                </div>
            </div>

        </>
    )
}

export default Note