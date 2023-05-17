import { useState } from "react";

export const usePagination = (list, quantityPerPage) => {
  const [pageNumber, setPageNumber] = useState(1);

  const loweLimit = quantityPerPage * (pageNumber - 1);
  const upperLimit = quantityPerPage * pageNumber - 1;
  const toltalPages = Math.ceil(list.length / quantityPerPage);

  const residentsSlice = list.slice(loweLimit, upperLimit + 1);

  const changePage = (page) => {
    if (page > toltalPages) setPageNumber(toltalPages);
    else if (page < 1) setPageNumber(1);
    else setPageNumber(page);
  };

  const pages = Array(toltalPages)
    .fill()
    .map((_, i) => i + 1);

  return {
    pageNumber,
    residentsSlice,
    pages,
    changePage,
  };
};
