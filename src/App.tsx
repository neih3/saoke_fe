import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import "./App.css";
import Form from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import Table from "./components/Table/Table";
import getSaoKe from "./api/saoke";
import { useState } from "react";
import Pagination from "./components/Pagination/Pagination";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { SaoKeRequest } from "./types/saoke.type";

function App() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("10/09/2024");
  const [endDate, setEndDate] = useState("12/09/2024");
  const [sortBy, setSortBy] = useState("date");
  const [size, setSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);
  const [typeSort, setTypeSort] = useState(false);
  console.log("dây là start Date:", typeSort);
  // Gọi API thông qua useQuery
  const { data, isLoading: isQueryLoading } = useQuery({
    queryKey: ["saoke"],
    queryFn: () => getSaoKe(),
    staleTime: 5 * 60 * 1000, // 5 phút
  });

  const queryClient = useQueryClient();

  const { mutate: getSaoKeMutate, isPending: isMutationLoading } = useMutation({
    mutationFn: async () => {
      const response = await getSaoKe({
        start_date: startDate,
        end_date: endDate,
        pageNumber,
        size,
        name,
        sortBy,
        isAscending: typeSort,
      });

      return response;
    },
    onSuccess: (data: SaoKeRequest) => {
      queryClient.setQueryData(["saoke"], data);
    },
    onError: (error: unknown) => {
      console.log(error);
      console.error("Error fetching data:", error);
    },
  });

  const isLoading = isQueryLoading || isMutationLoading;

  return (
    <div className="">
      <Header />
      <Form
        name={name}
        startDate={startDate}
        endDate={endDate}
        sortBy={sortBy}
        size={size}
        setSize={setSize}
        typeSort={typeSort}
        setName={setName}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setSortBy={setSortBy}
        setTypeSort={setTypeSort}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setPageNumber(0);
          getSaoKeMutate();
        }}
      />
      {isLoading ? (
        <SkeletonTheme highlightColor="#444">
          <p>
            <Skeleton count={3} />
          </p>
        </SkeletonTheme>
      ) : (
        <Table data={data?.tutorials} />
      )}
      {isLoading ? (
        <p></p>
      ) : (
        <Pagination
          totalItems={data?.totalItems}
          totalPages={data?.totalPages}
          currentPage={data?.currentPage}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          onClick={() => {
            getSaoKeMutate();
          }}
        />
      )}
    </div>
  );
}

export default App;
