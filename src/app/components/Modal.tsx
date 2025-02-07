"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useCallback, useEffect, useRef } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () =>
      document.removeEventListener("keydown", onkeydown as EventListener);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      onClick={onClick}
      className='fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60'
    >
      <div
        ref={wrapper}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w10 md:w-8/12 lg:w-1/2 p-6 text-black'
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
