import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const types = ["image/jpeg", "image/png", "image/svg"];
  const [file, setfile] = useState(null);
  const [error, seterror] = useState("");

  //On selecting file
  const onchangeHandler = (e) => {
    // console.log('change');
    const fileselected = e.target.files[0];
    console.log(fileselected);

    //if the file is selcetd and the type of the selectedfile is png or jpeg or svg
    if (fileselected && types.includes(fileselected.type)) {
      setfile(fileselected);
      seterror("");
    } else {
      setfile(null);
      seterror("Please select a file of type(png or jpg)");
    }
  };
  return (
    <form>
      <input type="file" onChange={onchangeHandler}></input>
      <div className="output">
        {error && <div className="error">{error}</div>}
      </div>
      {file && <div>{file.name}</div>}
      {file && <ProgressBar file={file} setfile={setfile}/>}
    </form>
  );
};

export default UploadForm;
