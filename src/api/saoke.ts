import axios from "axios";

const url = "http://localhost:8080/api/saoke";

interface SaoKe {
  start_date?: string;
  end_date?: string;
  pageNumber?: number;
  size?: number;
  name?: string;
  sortBy?: string;
  isAscending?: boolean;
}

const getSaoKe = async (params: Partial<SaoKe> = {}) => {
  try {
    const res = await axios.get(url, { params });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default getSaoKe;
