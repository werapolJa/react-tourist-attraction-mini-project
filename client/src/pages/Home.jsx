import React, { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [search, setSearch] = useState("");
  async function getDateTrips() {
    try {
      const res = await axios.get(
        `http://localhost:4001/trips?keywords=${search}`
      );
      console.log(res);
    } catch (error) {}
  }
  useEffect(() => {
    getDateTrips();
  }, []);
  return <div className="text-3xl">หน้าแรก</div>;
}

export default Home;
