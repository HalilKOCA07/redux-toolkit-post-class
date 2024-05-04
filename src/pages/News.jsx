import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../features/NewsSlice";
import loadingGif from "../assets/loading.gif";

const newsNav = [
  { name: "All", href: "/", current: true },
  { name: "News", href: "/news", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
];

const News = () => {
  const { newsData, loading, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  console.log(newsData);

  useEffect(() => {
    dispatch(getNews());
  }, []);
  return (
    <div>
      <h1 className="text-center bg-red-500 py-3 font-bold text-3xl">
        {newsNav?.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "rounded-md px-3 py-2 font-medium text-xl"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </h1>
      {loading && <img src={loadingGif} alt="Loading Gif" />}
      {error && <p>Somethings went wrong</p>}
      <div className="flex flex-wrap justify-center mx-5 my-12">
        {newsData.map((item, index) => (
          <div className="m-5 w-[300px] shadow-2xl">
            <img
              src={item?.urlToImage}
              alt=""
              className="w-[300px] h-[300px] mb-1"
            />
            <div className="p-5 h-[270px]">
              <h6 className="font-semibold">{item?.title}</h6>
              <p className="pt-5">{item?.content}</p>
            </div>

            <div className="flex justify-start items-end gap-12 h-[100px] text-blue-600 text-lg p-5">
              <button className="hover:text-blue-800 flex items-end">
                Share
              </button>
              <button className="hover:text-blue-800">Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
