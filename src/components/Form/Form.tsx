import React, { Dispatch, SetStateAction } from "react";
import { convertDateFormat } from "../../utils/util";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
type Dispatcher<S> = Dispatch<SetStateAction<S>>;
interface Props {
  name: string;
  startDate: string;
  endDate: string;
  sortBy: string;
  size: number;
  typeSort: boolean;
  setName: Dispatcher<string>;
  setStartDate: Dispatcher<string>;
  setEndDate: Dispatcher<string>;
  setSortBy: Dispatcher<string>;
  setSize: Dispatcher<number>;
  setTypeSort: Dispatcher<boolean>;
  onSubmit: Dispatcher<void>;
}

const Form = ({
  name,
  startDate,
  endDate,
  sortBy,
  size,
  typeSort,
  setName,
  setStartDate,
  setEndDate,
  setSortBy,
  setSize,
  setTypeSort,
  onSubmit,
}: Props) => {
  // Handling form submission

  return (
    <div className="flex justify-center items-center mt-5 px-6 py-6">
      <form
        className="w-full max-w-lg py-6"
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <div className="w-full  mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="search"
          >
            Tìm kiếm
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="search"
            type="text"
            placeholder="Tìm kiếm..."
          />
        </div>
        <div className="flex  -mx-3 mb-6">
          {/* Tìm kiếm */}

          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="startDate"
            >
              Từ ngày
            </label>
            <DatePicker
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              showIcon
              selected={startDate}
              onChange={(date) => {
                console.log(date);
                setStartDate(convertDateFormat(date));
              }}
            />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="endDate"
            >
              Đến ngày
            </label>
            <DatePicker
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              showIcon
              selected={endDate}
              onChange={(date) => setEndDate(convertDateFormat(date))}
            />
          </div>
        </div>

        {/* Sắp xếp theo */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="sortBy"
            >
              Sắp xếp theo
            </label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="sortBy"
              >
                <option value="date">Ngày</option>
                <option value="transactionCode">Tiền</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Số dòng trên trang */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="rowsPerPage"
            >
              Số dòng trên trang
            </label>
            <div className="relative">
              <select
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="rowsPerPage"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Thứ tự sắp xếp */}
          <div className="w-full md:w-1/2 px-3 mb-6 pt-4 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="sortOrder"
            >
              Thứ tự sắp xếp
            </label>
            <div className="relative">
              <select
                value={typeSort ? "true" : "false"}
                onChange={(e) => setTypeSort(e.target.value === "true")}
                className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="sortOrder"
              >
                <option value="true">Tăng dần</option>
                <option value="false">Giảm dần</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Tìm kiếm
        </button>
      </form>
    </div>
  );
};

export default Form;
