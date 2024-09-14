// import localFont from "next/font/local";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../pages/api/firebase";
import ApiMap from "../components/ApiMap";
import { Search } from "../components/Search";
import { VenueList } from "@/components/VenueList";

export default function Home() {
  return (
    <div className="flex-col">
      <Search />
      <div className="flex-row">
        <VenueList />
        <ApiMap />
      </div>
    </div>
  );
}
