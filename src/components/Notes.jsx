import React, { useState } from 'react'
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';


function Notes() {
    const [note, setNote] = useState({
        title: "",
        data: ""
    })

    const [notes, setNotes] = useState([])
    const [updateIndex, setUpdateIndex] = useState(null)

    function handleTitlechange(e) {
        let localNote = { ...note }
        localNote.title = e.target.value;

        setNote(localNote)
    }

    function handleDataChange(e) {
        let localNote = { ...note }
        localNote.data = e.target.value;

        setNote(localNote)
    }


    function handleAddNote() {
        if (note.title != "" && note.data != "") {
            let localNotes = [...notes]
            localNotes.push(note)
            setNotes(localNotes)

            if (localStorage.getItem("userNote")) {
                let previousNotes = JSON.parse(localStorage.getItem("userNotes"));
                let updateNotes = previousNotes.concat(note)
                localStorage.setItem("userNote", JSON.stringify(updateNotes))
            }
            else {
                localStorage.setItem("userNote", JSON.stringify(note))
            }

            setNote({
                title: "",
                data: ""
            })

            toast.success("Note added successfully", {
                duration: 1000,
                icon: '😒',
                position: "bottom-center",
                
            })
        }
        else {
            toast.error("please fill note completely", { icon: '', })
        }

        setUpdateIndex()
    }


    function handleDeleteNote(index) {
        let localNotes = [...notes]
        setNotes(localNotes)

        if (localStorage.getItem("userNotes")) {
            localStorage.setItem("userNote", JSON.stringify(localNotes))
        }

        setNote({
            title: "",
            data: ""
        })
        setUpdateIndex()
    }

    function handleEditNote(index) {
        let localNotes = [...notes]
        setUpdateIndex(index)
        setNote(localNotes[index])
    }

    function handleUpdate() {
        let localNotes = [...notes]
        localNotes[updateIndex] = note
        setNotes(localNotes)

        if (localStorage.getItem("userNotes")) {
            localStorage.setItem("userNotes", JSON.stringify(localNotes))
        }

        setUpdateIndex()
    }

    console.log("update index are", updateIndex)


    useEffect(() => {
        if (!localStorage.getItem('userNotes'))
            localStorage.setItem("userNotes", "[]")
    }, [])

    useEffect(() => {
        if (!localStorage.getItem('userNotes')) {
            let allNotes = JSON.parse(localStorage.getItem("userNotes"))
            setNotes(allNotes)
        }

    }, [])



    return (
        <>
            <Toaster />
            <div className="container p-3 w-50 mt-5 shadow">
                <h1 className='text-center alert alert-dark'>Notes Application </h1>

                <input type="text" className='form-control mb-2' placeholder='title' onChange={handleTitlechange} value={note.title} />
                <textarea className='from-control' placeholder='write your here' onChange={handleDataChange} value={note.data}></textarea>

                <button className='btn btn-dark btn-sm px-5 d-block m-auto my-3' onClick={handleAddNote}>Add Note</button>
                {updateIndex >= 0 && <button className='btn btn-warning btn-sm text-white px-5 d-block m-auto my-3' onClick={handleUpdate}>Update Note</button>}
            </div>

            <div className='d-flex justify-content-between flex-wrap mt-1'>
                {
                    notes.map((e, i) => (
                        <div className='shadow m-5 pb-4' style={{ width: "25%", borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                            key={i}>
                            <h5 className='bg-dark text-whitw twxt-center py-1' style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}>{e.title}</h5>
                            <p className="px-3" style={{ height: '80px', overflow: 'auto' }}>{e.data}</p>


                            <div className="d-flex">
                                <button className='btn btn-danger d-block m-auto' onClick={() => handleDeleteNote(i)}>
                                    <span className='editIcon'>
                                    <i className="fa-solid fa-pencil"></i>
                                    </span>
                                </button>

                                <button className='btn btn-danger d-block m-auto' onClick={() => handleEditNote(i)}>
                                    <span className='editIcon'>
                                        <i className="fa-solid fa-pencil"></i>
                                    </span>
                                </button>

                                
                            </div>
                        </div>
                    ))
                }

            </div>

        </>
    )
}

export default Notes