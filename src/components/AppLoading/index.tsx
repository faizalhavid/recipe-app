import React, { useEffect } from 'react';
import { Spinner } from 'native-base';

type AppLoadingProps = {
  color?: string | undefined;
  startAsync?: () => Promise<void>;
  onFinish?: () => void;
  onError?: (error: Error) => void;
};

export function AppLoading({ color, startAsync, onFinish, onError }: AppLoadingProps) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await startAsync?.();
        onFinish?.();
      } catch (error) {
        if (error instanceof Error) {
          onError?.(error);
        } else {
          const customError = new Error('An unknown error occurred.');
          onError?.(customError);
        }
      }
    };

    fetchData();
  }, [startAsync, onFinish, onError]);

  return <Spinner size="large" color={color || 'blue'} />;
}
