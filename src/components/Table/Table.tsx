import React from "react";

const Table = ({ data }: any) => {
  return (
    <div className="flex justify-center items-center px-9">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            <th className="px-4 py-2 border border-gray-300 text-left">Ngày</th>
            <th className="px-4 py-2 border border-gray-300 text-left">
              Số tiền
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left">
              Nội dung
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: number) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="px-4 py-2 border border-gray-300">{item.date}</td>
              <td className="px-4 py-2 border border-gray-300">
                {item.transactionCode}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-left">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
