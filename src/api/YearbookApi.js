import { useAxios } from "src/composibles/useAxios";
export const YearbookApi = () => {
  const { callApi } = useAxios();
  const MajorList = async (year,order) => {
    return await callApi({
      method: "GET",
      url: `/yearbookByYear?_year=${year}&sortMode=${order}`
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