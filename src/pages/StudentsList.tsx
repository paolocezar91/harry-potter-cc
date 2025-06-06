import { useEffect, useState } from "react";
import { fetchURL } from "../shared/api"
import type { Character } from "../shared/types";
import List from "../components/List/List";
import { useDocumentTitle } from "../shared/utils";

export default function StudentList() {
  const [students, setStudents] = useState<Character[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const title = 'Harry Potter Mischief Managed App - Student List'
  useDocumentTitle(title);

  useEffect(() => {
    async function fetchCharacters() {
      const studentList = await fetchURL<Character[]>('https://hp-api.onrender.com/api/characters/students');
      setStudents(studentList);
      setLoaded(true)
    }

    fetchCharacters();
  }, [])


  return (
    <>
      <h1>Students</h1>
      { loaded && <List items={students} /> }
    </>
  )
}
