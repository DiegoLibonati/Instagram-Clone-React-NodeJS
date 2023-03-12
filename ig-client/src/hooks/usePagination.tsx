import { useEffect, useState, useRef, useCallback } from "react";
import { Publication } from "../types/types";

export const usePagination = (
  array: Publication[],
  maxPublications: number
) => {
  const [publicationPerPage] = useState(maxPublications);
  const [allViewed, setAllViewed] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [arrayPagination, setArrayPagination] = useState<Publication[] | null>(
    array
  );

  const arrayRef = useRef<Publication[] | null>([]);
  const elementRef = useRef<HTMLElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setArr = useCallback(
    (arr: Publication[]) => {
      arrayRef.current = arr;
      setArrayPagination(() => {
        return arrayRef.current!.slice(0, page * publicationPerPage);
      });
    },
    [page, publicationPerPage]
  );

  const onBottom = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >
      elementRef.current!.offsetHeight
    ) {
      setLoading(() => {
        return true;
      });
      clearTimeout(timeoutRef.current!);
      timeoutRef.current = setTimeout(() => {
        setPage((page) => {
          return page + 1;
        });
        setArrayPagination(() => {
          return arrayRef.current!.slice(0, page * publicationPerPage);
        });
        setLoading(() => {
          return false;
        });
        clearTimeout(timeoutRef.current!);
      }, 1000);
    }
  }, [page, publicationPerPage]);

  useEffect(() => {
    if (allViewed) return;
    window.addEventListener("scroll", onBottom);

    return () => window.removeEventListener("scroll", onBottom);
  }, [onBottom, allViewed]);

  useEffect(() => {
    if (array.length && !arrayRef.current!.length) {
      setArr(array);
    }
  }, [array, setArr]);

  useEffect(() => {
    if (
      arrayRef.current?.length &&
      arrayPagination?.length &&
      arrayRef.current!.length === arrayPagination!.length
    ) {
      setAllViewed(() => {
        return true;
      });
    }
  }, [arrayPagination]);

  return {
    arrayPagination: arrayPagination,
    allViewed,
    loading,
    elementRef,
  };
};
