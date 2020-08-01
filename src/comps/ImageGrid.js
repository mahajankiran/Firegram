import React from "react";
import useFirestore from "../Hooks/UseFirestore";

const ImageGrid = ({setselectedImage}) => {
  const {docs} = useFirestore('images');
  console.log(docs);

  return (
    <div className="img-grid">
      {
       docs && docs.map(doc => (
          <div className="img-wrap" key={doc.id} onClick={()=>setselectedImage(doc.url)}>
            <img src={doc.url} alt="uploaded" />
          </div>
        ))
      }
    </div>
  );
};

export default ImageGrid;
