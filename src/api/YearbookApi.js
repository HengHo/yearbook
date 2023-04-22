import { useAxios } from "src/composibles/useAxios";
export const YearbookApi = () => {
  const { callApi } = useAxios();
  const MajorList = async (year) => {
    return await callApi({
      method: "GET",
      url: `/yearbookByYear?_year=${year}`
    })
  };
  const YearList = async () => {
    return await callApi({
      method: "GET",
      url: "/yearbookYear"
    })
  }
  return {
    MajorList,
    YearList,
  }
}