import { AxiosRequestConfig } from 'axios';
import {useCallback, useEffect, useMemo, useState} from 'react';
import { instance, getJWT } from '@/shared/services/api';
import {useAuth} from '@/context/Auth';

type FilterType = { key: string; value?: string | number }[];

interface UserGetFetchProps {
  skip?: boolean;
  filters?: FilterType;
}

export default function useQueryFetch<T>(
  path: string,
  props?: UserGetFetchProps,
) {
  const { jwt } = useAuth();
  const skip = useMemo(() => props?.skip, [props?.skip]);
  const filtersProp = useMemo(() => props?.filters, [props?.filters]);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [errors, setErrors] = useState<string | null>(null);

  const getData = useCallback(
    async (opts?: { filter?: FilterType; options?: AxiosRequestConfig }) => {
      setLoading(true);
      const Authorization = getJWT(jwt);

      const options: any = {
        ...opts?.options,
        headers: {
          Authorization,
          ...opts?.options?.headers,
        },
      };

      try {
        let preparedFilter = filtersProp
          ? filtersProp?.map((item) => `${item.key}=${item.value}`).join('&')
          : '';

        if (opts?.filter) {
          opts?.filter?.forEach((item) => {
            const findRule = preparedFilter.includes(item.key);
            if (!findRule) {
              preparedFilter += `&${item.key}=${item.value}`;
            }
          });
        }

        const { data } = await instance.get<T>(
          `${path}?${preparedFilter}`,
          options,
        );
        setData(data);
      } catch (error: any) {
        setErrors(
          error?.message ??
            error?.response?.data?.message ??
            'Error in request',
        );
      }
      setLoading(false);
    },
    [jwt, filtersProp, path],
  );

  useEffect(() => {
    if (!skip) {
      getData().then();
    }
  }, [getData, skip]);

  return {
    loading,
    data,
    errors,
    getData,
  };
}
