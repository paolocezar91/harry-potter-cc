import type { Character } from "../../shared/types";
import "./List.scss";

function List({ items }: { items: Character[] }) {

  return (
    <div className="thumbnail-list">
      { 
        items.map((item, i) => {
          return <div  className="thumbnail" key={i}>
            <a href={`characters/${item.id}`} className="thumbnail-content">  
              { item.image && <img src={item.image} alt="" /> }
              { !item.image && <img src="/question-mark.png" alt="" /> }
              <span className="name">
                {item.name}
              </span>
            </a>
          </div>
        }) 
      }
    </div>
  )
}

export default List
