import { useAxios } from "src/composibles/useAxios";
export default () => {
  const { callApi } = useAxios();
  const getStudentList = async (
    req = {
      page: 1,
      perPage: 10,
    }
  ) => {
    return await callApi({
      method: "GET",
      url: `/student?page=${req.page}&perPage=${req.perPage}`,
    });
  };

  const getOne = async (id) => {
    return await callApi({
      method: "GET",
      url: `/studentReadSingle?_id=${id}`,
    });
  }

  const postInfo = async () => {
  return await callApi({
      method: "POST",
      url: `/student`,
      body: JSON.stringify({
        'std_code': '',
         'name': '',
        'surname': '',
        'birth_date': '',
        'image_name': '',
        'major_id': '',
      })
    });
  }

  // const signUp = async (result) => {
    // return await callApi({
    //   method: "POST",
    //   url: `/student`,
    //   body: {
    //     'std_code': '',
    //      'name': '',
    //     'surname': '',
    //     'birth_date': '',
    //     'image_name': '',
    //     'major_id': '',
    //   }
    // });
  // }
  return {
    getStudentList,
    getOne,
    postInfo,
    // signUp
  };
};