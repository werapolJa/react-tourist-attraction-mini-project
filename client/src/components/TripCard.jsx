import React from "react";
import { FaLink } from "react-icons/fa";

function TripCard({ trips }) {
  console.log(trips);
  //   const result = trips.tags.join(", ").replace(/,([^,]*)$/, " และ$1");
  //   console.log(result);

  return (
    <>
      <article
        className="grid lg:grid-cols-5 grid-cols-1 gap-10  my-8"
        key={trips.eid}
      >
        <div className="h-full w-full md:h-80 md:col-span-2">
          <img
            src={trips.photos[0]}
            alt="Featured destination"
            className="rounded-3xl  object-cover  h-full w-full b"
          />
        </div>

        <div className="space-y-4 lg:col-span-3">
          <h2 className="text-xl font-semibold ">{trips.title}</h2>
          <p className="text-muted-foreground truncate   lg:w-full    text-slate-600">
            {trips.description}
          </p>
          <a
            href={trips.url}
            target="_blank"
            className="text-blue-400 cursor-pointer underline"
          >
            อ่านต่อ
          </a>
          <div className="flex gap-2 flex-wrap  text-slate-600">
            <h3>หมวด</h3>

            {trips.tags?.map((tag, index) => (
              <span className="px-3 py-1  text-sm underline " key={index}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col  sm:flex-row justify-between">
            <div className="flex gap-5 h-auto w-full ">
              {trips.photos
                .filter((filphto) => filphto !== trips.photos[0])
                .map((photos, index) => (
                  <div className="relative  rounded-lg  " key={index}>
                    <img
                      src={photos}
                      alt="Viewpoint"
                      className="object-cover rounded-lg w-full h-20 md:h-20 h-auto lg:h-28 lg:w-32"
                    />
                  </div>
                ))}
            </div>
            <div className="flex sm:hidden justify-center w-full text-blue-400 cursor-pointer">
              Link
            </div>
            <div className="h-auto w-full  sm:flex justify-end items-end hidden ">
              <FaLink className="text-blue-400  text-5xl p-2 rounded-full border-blue-400 border-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default TripCard;
