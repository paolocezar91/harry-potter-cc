import { Link } from "react-router-dom";
import './Header.scss'

export default function Header() {
  return (
    <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/staff">Staff</Link>
          </li>
        </ul>
    </nav>
  );
}
