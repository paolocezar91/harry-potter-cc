import { useEffect, useState } from "react";
import { fetchURL } from "../shared/api"
import type { Character } from "../shared/types";
import Details from "../components/List/Details";
import { useParams } from "react-router-dom";
import { useDocumentTitle } from "../shared/utils";


function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character[] | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);
  const title = `Harry Potter Mischief Managed App - ${character?.[0].name} Details`;
  useDocumentTitle(title);

  useEffect(() => {
    async function fetchCharacters() {
      const characterData = await fetchURL<Character[]>(`https://hp-api.onrender.com/api/character/${id}`);
      setCharacter(characterData);
      setLoaded(true)      
    }
    fetchCharacters();
  }, [id])


  return (loaded && character && <div>
    <Details character={character[0]} />
  </div>)
}

export default CharacterDetail
