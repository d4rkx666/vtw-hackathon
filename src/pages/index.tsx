import localFont from "next/font/local";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../pages/api/firebase";


export default function Home() {
  return (
    <div>
      hello world, hola mundo
    </div>
  );
}
