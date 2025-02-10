import React from "react";
import SlideBar from "../components/SlideBar";
import Search from "../components/Search";
import Table from "../components/Table";
import Print from "../components/Print";
import AddItems from "../components/AddItems";


const HomePage = () => {
  return (
    <div>
      <div className="flex">
        <SlideBar />
        <div className="ml-10 w-[100%]">
          <Search />
          <Table />
          <div className="">
            <AddItems />
          </div>
          <Print />
        </div>
      </div>
    </div>
  );
};

export default HomePage;