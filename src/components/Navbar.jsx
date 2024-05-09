import Menu from "./Menu";
import { ColorPickerContext } from "../App";
import React from "react";

export default function Navbar(props) {
  const { colors, handleChange } = React.useContext(ColorPickerContext)


  return (
    <>
      <div className='nav--container'>
        <input
          type='color'
          id='colorPicker'
          name='seedColor'
          value={colors.seedColor}
          onChange={handleChange}
        />
        <Menu />


      </div>
    </>
  );
}
