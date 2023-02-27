import React from "react";

const useQuery = (url) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch(() => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { data, loading, error };
};

export default useQuery;