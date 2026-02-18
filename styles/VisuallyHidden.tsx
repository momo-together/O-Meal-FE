import type { ComponentPropsWithoutRef } from "react";

const VisuallyHidden = (props: ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      {...props}
      className="absolute w-px h-px overflow-hidden [clip:rect(0,0,0,0)] whitespace-nowrap focus:[clip:auto] focus:w-auto focus:h-auto focus:p-2 focus:border-2 focus:border-[blue]"
    />
  );
};

export { VisuallyHidden };
