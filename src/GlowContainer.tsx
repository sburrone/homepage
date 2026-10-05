import "./glow.css";
import type { HTMLAttributes } from "react";
import classNames from "classnames";

export const GlowContainer = (
  props: HTMLAttributes<HTMLDivElement> & { spanClassName?: string },
) => {
  const { children, className, spanClassName, ...rest } = props;
  return (
    <div className={classNames("glow", className)} {...rest}>
      <span className={classNames(spanClassName)}>{children}</span>
    </div>
  );
};
