import HousePicker from "../components/HousePicker/HousePicker"
import { useDocumentTitle } from "../shared/utils";

export default function Home() {
  const title = 'Harry Potter Mischief Managed App - Home'
  useDocumentTitle(title);

  return (
    <>
    <h1>Welcome to the Harry Potter Mischief Managed App!</h1>
    <HousePicker />
    </>
  )
}
