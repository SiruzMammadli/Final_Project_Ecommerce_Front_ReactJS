const useQuery = async (
  url,
  methodType = "get",
  bodyData = null,
  headersAdditions = null
) => {
  const request = await fetch(
    new Request(url, {
      method: methodType,
      body: JSON.stringify(bodyData),
      headers: new Headers({
        "Content-Type": "application/json",
        ...headersAdditions,
      }),
    })
  ).then((res) => res.json());

  return request;
};

export default useQuery;