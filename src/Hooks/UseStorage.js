import { useState, useEffect } from "react";
import {
  ProjectStorage,
  ProjectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setprogress] = useState(null);
  const [error, seterror] = useState(null);
  const [url, seturl] = useState(null);

  //This function is to save the upload file every time a  new file is uploaded
  useEffect(() => {
    //references
    const Refstorage = ProjectStorage.ref(file.name);
    const Refcollection = ProjectFirestore.collection("images");
    
    Refstorage.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setprogress(percentage);
      },
      (err) => {
        seterror(err);
      },
      async () => {
        const url = await Refstorage.getDownloadURL();
        const createdAt = timestamp();
        Refcollection.add({ url, createdAt });
        seturl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
