const useQuery = async (
  url,
  methodType = "get",
  bodyData = null,
  headersAdditions = null
) => {
  if (bodyData !== null) {
    const response = await fetch(
      new Request(url, {
        method: methodType,
        body: JSON.stringify(bodyData),
        headers: new Headers({
          "Content-Type": "application/json",
          ...headersAdditions,
        }),
      })
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));

    return { response };
  } else {
    const response = await fetch(
      new Request(url, {
        method: methodType,
        headers: new Headers({
          "Content-Type": "application/json",
          ...headersAdditions,
        }),
      })
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));

    return { response };
  }
};

export default useQuery;
