import { useEffect, useState } from "react";
import { fetchURL } from "../shared/api"
import type { Character } from "../shared/types";
import List from "../components/List/List";
import { useDocumentTitle } from "../shared/utils";

function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const title = 'Harry Potter Mischief Managed App - Character List'
  useDocumentTitle(title);

  useEffect(() => {
    async function fetchCharacters() {
      const characterList = await fetchURL<Character[]>('https://hp-api.onrender.com/api/characters');
      setCharacters(characterList);
      setLoaded(true)
    }

    if(!loaded) {
      fetchCharacters();
    }
  }, [loaded])


  return (
    <>
      <h1>Characters</h1>
      { loaded && <List items={characters} /> }
    </>
  )
}

export default CharacterList
