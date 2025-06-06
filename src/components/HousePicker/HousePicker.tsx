import { capitilize } from "../../shared/utils";
import { useTheme } from "../ThemeContext";
import "./HousePicker.scss";

export default function HousePicker() {
  const { setTheme, theme } = useTheme();

  const houses = [
    'gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin'
  ]

  const isActive = (house: string) => {
    return theme.name.toLowerCase() === house ? 'active' : '';
  }
  
  return (
    <div>
      <h2>{!theme ? 'Please choose your Harry Potter house!' : `You have last chosen ${capitilize(theme.name)}`}.</h2>
      <ul>
        { houses.map((h, i) => {
          return <li className={`${h} ${isActive(h)}`} key={i} onClick={() => setTheme(h)}>
              <img src={`/${h}.png`} alt={capitilize(h)} />
              <div className="house-name">{capitilize(h)}</div>
            </li>
        })}
          
      </ul>
    </div>
  );
}
