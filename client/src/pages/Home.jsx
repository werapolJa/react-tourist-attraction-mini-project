import React, { useEffect, useState } from "react";
import axios from "axios";
import TripCard from "../components/TripCard";
import ReactLoading from "react-loading";
function Home() {
  const [search, setSearch] = useState("");
  const [dataTrips, setDataTrips] = useState([]);
  const [loading, setLoding] = useState(false);
  // console.log(dataTrips);

  async function getDateTrips() {
    try {
      setLoding(true);
      const res = await axios.get(
        `http://localhost:4001/trips?keywords=${search}`
      );
      setDataTrips(res.data.data);
      // setLoding(false);
      //   console.log(res.data.data);
    } catch (error) {
      setLoding(true);
    }
  }
  useEffect(() => {
    getDateTrips();
  }, [search]);
  return (
    <>
      <div className=" bg-white mt-32">
        <header className="max-w-3xl md:mx-auto mx-10">
          <h1 className=" text-4xl my-4  font-bold text-sky-500 text-center">
            เที่ยวไหนดี
          </h1>
          <div className="relative  border-b">
            <label htmlFor="">ค้นหาที่เที่ยว</label>
            <input
              type="search"
              value={search}
              placeholder="หาที่เที่ยวแล้วไปกัน..."
              className="w-full pl-10 focus:outline-none text-center border-0"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6 ">
          {/* สร้าง components ใหม่ที่หน้า TrioCart เพื่อ map และส่ง props ไป */}
          <>
            {loading ? (
              <div className="flex flex-col w-full ">
                {dataTrips.map((trips) => (
                  <TripCard
                    trips={trips}
                    setSearch={setSearch}
                    search={search}
                  />
                ))}
              </div>
            ) : (
              <div className="flex justify-center w-full">
                <ReactLoading
                  type={"bars"}
                  color={"black"}
                  height={667}
                  width={375}
                />
              </div>
            )}
          </>
        </main>
      </div>
    </>
  );
}

export default Home;
