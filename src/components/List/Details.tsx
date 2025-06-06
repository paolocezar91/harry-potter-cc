import './Details.scss';
import type { Character } from '../../shared/types';
import { capitilize, useLocalStorage } from '../../shared/utils';
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

export default function Details({ character }: { character: Character }) {
  const [favorites, setFavorite] = useLocalStorage<string[]>('favorites', [])

  const setAsFavorite = (id: string) => {
    if(!isFavorite(id)) {
      setFavorite([...favorites, id])
    } else {
      setFavorite(favorites.filter(fav => fav !== id))
    }
  }

  const isFavorite = (id: string) => {
    return (favorites.includes(id));
  }

  return (character && 
    <div className={`profile ${character.house.toLowerCase()}`}>

      <div className="image-container">
        {
          character.image ?
          <img 
            src={character.image}
            alt={character.name} 
            className="image"
          /> :
          <img 
            src="/question-mark.png"
            alt={character.name} 
            className="image"
          />
        }
      </div>
      <div className="info">
        <div className="name-container">
          <h2 className="name">{character.name}</h2>
          <button title={!isFavorite(character.id) ? "Set as favorite": "Remove from favorites"} onClick={() => setAsFavorite(character.id)}>
            { !isFavorite(character.id) && <HeartOutline  color='black' width={32} />}
            { isFavorite(character.id) && <HeartSolid color='red' width={32} />}
          </button>
        </div>
        {character.alternate_names.length > 0 && (
          <p className="alternate-names">
            Also known as: {character.alternate_names.join(', ')}
          </p>
        )}
        
        <div className="details-grid">
          <div className="detail">
            <strong>House:</strong>
            <span className="detail-value">{character.house || 'Unknown'}</span>
          </div>
          <div className="detail">
            <strong>Species:</strong>
            <span className="detail-value">{capitilize(character.species)}</span>
          </div>
          <div className="detail">
            <strong>Ancestry:</strong>
            <span className="detail-value">
              {character.ancestry && capitilize(character.ancestry)}
              {!character.wand.wood && <>Unknown</>}
            </span>
          </div>
          <div className="detail">
            <strong>Born:</strong>
            <span className="detail-value">
              {character.dateOfBirth || 'Unknown'}
              {character.yearOfBirth && ` (${character.yearOfBirth})`}
            </span>
          </div>
          <div className="detail">
            <strong>Wand:</strong>
            <span className="detail-value">
              {character.wand.wood && <>{capitilize(character.wand.wood)}, {capitilize(character.wand.core)}, {character.wand.length}"</>}
              {!character.wand.wood && <>Unknown</>}
            </span>
          </div>
          <div className="detail">
            <strong>Patronus:</strong>
            <span className="detail-value">{capitilize(character.patronus) || 'Unknown'}</span>
          </div>
        </div>

        <div className="additional-info">
          <p><strong>Portrayed by:</strong> {character.actor}</p>
          <p><strong>Status:</strong> {character.alive ? 'Alive' : 'Deceased'}</p>
          <p>
            <strong>Hogwarts Student or Staff:</strong> 
            {character.hogwartsStudent ? ' Student' : ''}
            {character.hogwartsStaff ? ' Staff' : ''}
            {!character.hogwartsStudent && !character.hogwartsStaff ? ' Not affiliated' : ''}
          </p>
        </div>
      </div>
    </div>
  );
};
