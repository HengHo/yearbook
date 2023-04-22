import { useAxios } from "src/composibles/useAxios";
export const ProfileApi = () => {
  const { callApi } = useAxios();
  const DirectoryListByYearbook = async (id) => {
    return await callApi({
      method: "GET",
      url: `/directoryListYearbook?_id=${id}`,
    })
  };
  const DirectoryComfirm = async (id) => {
    return await callApi({
      method: "PUT",
      url: `/directoryConfirm?_id=${id}`,
    })
  };
  const DirectoryDelete = async (ids) => {
    return await callApi({
      method: "DELETE",
      url: `/directory?_ids=${ids}`
    })
  };
  const DirectoryReadOne = async (id) => {
    return await callApi({
      method: "GET",
      url: `/directoryReadSingle?_id=${id}`
    })
  };
  return {
    DirectoryListByYearbook,
    DirectoryComfirm,
    DirectoryDelete,
    DirectoryReadOne,
  }

  }