import React from 'react'
import { ClipLoader } from 'react-spinners'

export default function Loader() {
  return (
	<div style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
		<ClipLoader color="#4f46e5" />
	</div> 
  )
}