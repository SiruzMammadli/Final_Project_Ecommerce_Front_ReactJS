import React from "react";

const initialState = {
  data: null,
  status: null,
  error: null,
};

export function useQuery() {
  const [queryData, setQueryData] = React.useState(initialState);

  function onLoading() {
    setQueryData({
      ...initialState,
      status: "loading",
    });
  }

  function onError(error) {
    setQueryData({
      ...initialState,
      status: "error",
      error,
    });
  }

  function onSuccess(data) {
    setQueryData({
      ...initialState,
      status: "success",
      data,
    });
  }

  return [queryData, {onLoading, onError, onSuccess}]
}
