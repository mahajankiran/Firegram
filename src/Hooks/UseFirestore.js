import {useEffect,useState} from "react";
import { ProjectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setdocs] = useState([]);

  useEffect(() => {
    const unsub = ProjectFirestore.collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((docs) => {
          documents.push({...docs.data(), id:docs.id });
        });
        setdocs(documents);
      });

    return () => unsub();

  }, [collection]);

  return { docs };
};

export default useFirestore;
