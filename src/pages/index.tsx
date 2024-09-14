// import localFont from "next/font/local";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../pages/api/firebase";
import ApiMap from "../components/ApiMap";
import { Search } from "../components/Search";

export default function Home() {
  return (
    <div>
      hello world, hola mundo
      <Search />
      <ApiMap />
    </div>
  );
}
