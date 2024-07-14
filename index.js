import { Inter } from "next/font/google";
import Navbar from "@/componen/Navbar";
import Buttoncoba from "@/componen/Buttoncoba";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar/>
    <h1>HALAMAN HOME</h1>
    <Buttoncoba/>
    </>
  );
}
