import { useCallback, useState } from 'react';
import { instance, getJWT } from '@/shared/services/api';

interface UserPostFetchProps {
  type?: 'post' | 'put' | 'delete';
}

type ReturnHook<Response = any, Request = any> = [
  (
    payload: Request,
    id?: string | number,
  ) => Promise<{ data: Response | null; errors: any }>,
  {
    loading: boolean;
    errors: string | null;
    data: any;
  },
];

export default function useMutationFetch<T, Request = any>(
  path: string,
  props?: UserPostFetchProps,
): ReturnHook<T, Request> {
  const type = props?.type || 'post';
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [errors, setErrors] = useState<string | null>(null);

  const callback = useCallback(
    async (payload: Request, id: string | number = '') => {
      let err: any = null;
      setErrors(null);
      setLoading(true);
      const Authorization = getJWT();

      const options: any = {
        headers: {
          Authorization,
        },
      };

      try {
        const { data } = await instance[type]<T>(
          `${path}/${id}`,
          payload,
          options,
        );
        setData(data);
        setLoading(false);

        return { data, errors: null };
      } catch (error: any) {
        if (error?.response?.data?.errors && Array.isArray(error?.response?.data?.errors)) {
          err = error.response.data?.errors[0]?.message;
        } else {
          err =
            error?.response?.data?.message ??
            error?.message ??
            'Error in request';
        }
        setErrors(err);
      }
      setLoading(false);
      return {
        errors: err,
        data: null,
      };
    },
    [path, type],
  );

  return [
    callback,
    {
      loading,
      data,
      errors,
    },
  ];
}
