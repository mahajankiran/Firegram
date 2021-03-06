import React,{useEffect} from "react";
import useStorage from "../Hooks/UseStorage";

const ProgressBar = ({ file, setfile }) => {
  const { progress, url } = useStorage(file);
  useEffect(() => {
    if (url) {
      setfile(null);
    }
  }, [url, setfile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
