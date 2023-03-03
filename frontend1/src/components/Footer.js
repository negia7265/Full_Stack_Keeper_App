import React from 'react'

export default function Footer() {
const currentYear=new Date().getFullYear();
 const hehe={
  color:'grey',
  textAlign: 'center' 
 };
  return (
    <div style={hehe}>Copyright ©{currentYear}</div>
  )
}
