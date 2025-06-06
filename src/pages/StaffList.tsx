import { useEffect, useState } from "react";
import { fetchURL } from "../shared/api"
import type { Character } from "../shared/types";
import List from "../components/List/List";
import { useDocumentTitle } from "../shared/utils";

function StaffList() {
  const [staff, setStaff] = useState<Character[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const title = 'Harry Potter Mischief Managed App - Staff List'
  useDocumentTitle(title);

  useEffect(() => {
    async function fetchStaff() {
      const staffList = await fetchURL<Character[]>('https://hp-api.onrender.com/api/characters/staff');
      setStaff(staffList);
      setLoaded(true)
    }

    fetchStaff();
  }, [])


  return (
    <>
      <h1>Staff</h1>
      { loaded && <List items={staff} /> }
    </>
  )
}

export default StaffList
