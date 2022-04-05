//NPM packages
import React from "react";

//Project files

export default function InputField({ setup }) {
  //const { label, placeholder, type } = setup;

  return (
    <div>
      <label>
        Item
        <input placholder="Ex: sofa" type="text"></input>
      </label>
    </div>
  );
}
