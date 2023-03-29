import Link from "next/link";
import Analytics from "../components/Dashboard/Analytics";
import Cards from "../components/Dashboard/Cards";
import Orders from "../components/Dashboard/Orders";
import Products from "../components/Dashboard/Products";
import Reports from "../components/Dashboard/Reports";
import Layout from "../components/Layout/Layout";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../components/Button";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="h-[calc(100vh)] h-full w-full p-4 overflow-auto min-w-full max-w-96">
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="font-medium text-2xl pb-8 pt-6">Dashboard</h2>
        <div className="flex flex-row gap-x-2">
          <Button text="10-06-2021" icon={<IoIosArrowDown />} />
          <Button text="10-06-2021" icon={<IoIosArrowDown />} />
        </div>
      </div>
      <Cards />
      <div className="flex flex-wrap justify-between w-full flex-row gap-x-4">
        <Reports />
        <Analytics />
      </div>
      <div className="flex flex-wrap justify-between w-full flex-row gap-4 mt-4">
        <Orders />
        <Products />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
