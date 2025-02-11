import React, { useEffect, useRef } from 'react';
import IMask from 'imask';

interface InputMaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: string;
  onAccept?: (value: string, mask: any) => void;
}

export function InputMask({ mask, onAccept, ...props }: InputMaskProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const maskRef = useRef<IMask.InputMask<any>>();

  useEffect(() => {
    if (inputRef.current) {
      maskRef.current = IMask(inputRef.current, {
        mask,
      });

      if (onAccept) {
        maskRef.current.on('accept', () => {
          onAccept(maskRef.current!.value, maskRef.current);
        });
      }
    }

    return () => {
      if (maskRef.current) {
        maskRef.current.destroy();
      }
    };
  }, [mask, onAccept]);

  return <input ref={inputRef} {...props} />;
}