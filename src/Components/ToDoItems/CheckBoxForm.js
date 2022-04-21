import { useState } from "react"
import React from 'react'


export default function CheckBoxForm() {

function toggle(value) {
  return !value;
}

const [checked, setChecked] = useState(false);

  return (
    <form>
      <input  
        type="checkbox"
        checked = {checked}
        onChange={() => setChecked(toggle)}
      />
    </form>
  )
}
