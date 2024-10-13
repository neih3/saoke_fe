import React, { useState } from "react";

const Pagination = ({
  totalPages,
  totalItems,
  currentPage,
  pageNumber,
  setPageNumber,

  onClick,
}: any) => {
  // Tạo mảng trang cần hiển thị
  const getPages = () => {
    const pages = [];
    if (totalPages <= 5) {
      // Hiển thị tất cả trang nếu ít hơn hoặc bằng 5 trang
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages + 1
        );
      }
    }
    return pages;
  };
  const paginate = getPages();

  return (
    <>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">{totalItems}</span> results
            </p>
          </div>
          <div>
            <nav
              aria-label="Pagination"
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            >
              {paginate.map((item, index) => {
                if (item == pageNumber + 1) {
                  return (
                    <div
                      key={index}
                      aria-current="page"
                      className="relative z-10 inline-flex border-blue-600 items-center bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {item}
                    </div>
                  );
                }
                return (
                  <button
                    onClick={() => {
                      setPageNumber(item - 1);
                      onClick();
                    }}
                    key={index}
                    aria-current="page"
                    className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {item}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
