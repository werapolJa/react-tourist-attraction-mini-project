import React, { useEffect, useState } from "react";
import axios from "axios";
import TripCard from "../components/TripCard";
function Home() {
  const [search, setSearch] = useState("");
  const [dataTrips, setDataTrips] = useState([]);
  console.log(dataTrips);

  async function getDateTrips() {
    try {
      const res = await axios.get(
        `http://localhost:4001/trips?keywords=${search}`
      );
      setDataTrips(res.data.data);
      //   console.log(res.data.data);
    } catch (error) {}
  }
  useEffect(() => {
    getDateTrips();
  }, [search]);
  return (
    <>
      <div className=" bg-white mt-32">
        <header className="max-w-3xl mx-auto ">
          <h1 className=" text-4xl my-4  font-bold text-sky-500 text-center">
            เที่ยวไหนดี
          </h1>
          <div className="relative  border-b">
            <label htmlFor="">ค้นหาที่เที่ยว</label>
            <input
              type="search"
              placeholder="หาที่เที่ยวแล้วไปกัน..."
              className="w-full pl-10 focus:outline-none text-center border-0"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6 ">
          {/* สร้าง components ใหม่ที่หน้า TrioCart เพื่อ map และส่ง props ไป */}
          <>
            <div className="flex flex-col w-full ">
              {dataTrips.map((trips) => (
                <TripCard trips={trips} />
              ))}
            </div>
          </>
        </main>
      </div>
    </>
  );
}

export default Home;
