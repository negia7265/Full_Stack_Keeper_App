import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export default function Note(props) {
  function handledelete(){
  props.onDelete(props.id);
  }
  return (
    <div className='Note'>
        <h1>{props.title}</h1>
        <p1>{props.content}
        </p1>
    <button onClick={handledelete}><DeleteIcon/></button>
    </div>
  )
}
