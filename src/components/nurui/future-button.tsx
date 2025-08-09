import type React from "react";
import { Frame } from "@/components/nurui/future-frame";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "group font-black mb-2 relative px-8 py-1 cursor-pointer transition-all [&:hover_svg]:drop-shadow-xl outline-none",
    "[&>span]:relative [&>span]:flex [&>span]:items-center [&>span]:justify-center [&>span]:group-hover:text-shadow-lg",
  ],
  {
    variants: {
      variant: {
        default:
          "[--color-frame-1-stroke:theme(colors.blue.500)] [--color-frame-1-fill:theme(colors.blue.500/0.22)] [--color-frame-2-stroke:theme(colors.blue.500)] [--color-frame-2-fill:theme(colors.blue.500/0.1)] text-blue-100 [&:hover_svg]:drop-shadow-blue-500/50",
        accent:
          "[--color-frame-1-stroke:theme(colors.purple.500)] [--color-frame-1-fill:theme(colors.purple.500/0.4)] [--color-frame-2-stroke:theme(colors.purple.500)] [--color-frame-2-fill:theme(colors.purple.500/0.2)] text-purple-100 [&:hover_svg]:drop-shadow-purple-500/50",
        destructive:
          "[--color-frame-1-stroke:theme(colors.red.500)] [--color-frame-1-fill:theme(colors.red.500/0.22)] [--color-frame-2-stroke:theme(colors.red.500)] [--color-frame-2-fill:theme(colors.red.500/0.1)] text-red-100 [&:hover_svg]:drop-shadow-red-500/50",
        secondary:
          "[--color-frame-1-stroke:theme(colors.gray.500)] [--color-frame-1-fill:theme(colors.gray.500/0.15)] [--color-frame-2-stroke:theme(colors.gray.500)] [--color-frame-2-fill:theme(colors.gray.500/0.1)] text-gray-100 [&:hover_svg]:drop-shadow-gray-500/50",
        success:
          "[--color-frame-1-stroke:theme(colors.green.500)] [--color-frame-1-fill:theme(colors.green.500/0.22)] [--color-frame-2-stroke:theme(colors.green.500)] [--color-frame-2-fill:theme(colors.green.500/0.1)] text-green-100 [&:hover_svg]:drop-shadow-green-500/50",
      },
      shape: {
        default: "",
        flat: "[--color-frame-2-stroke:transparent] [--color-frame-2-fill:transparent]",
        simple: "ps-8 pe-6",
        "tab-left": "",
        "tab-center": "",
        "tab-right": "",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "default",
    },
  },
);

function Button({
  className,
  children,
  variant = "default",
  shape = "default",
  customPaths,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    customPaths?: string[];
  }) {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ variant, shape, className }))}
    >
      <div className="absolute inset-0 -mb-2">
        {!customPaths && (shape == "default" || shape == "flat") && (
          <Frame
            paths={JSON.parse(
              '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","17","0"],["L","180","0"],["L","200","9.5"],["L","182","34"],["L","4","34"],["L","0","25"],["L","17","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","9","34"],["L","178","34"],["L","175","40"],["L","12","40"],["L","9","34"]]}]',
            )}
          />
        )}
        {!customPaths && shape == "simple" && (
          <Frame
            paths={JSON.parse(
              '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","17","0"],["L","200","0"],["L","200","34"],["L","3","34"],["L","0","24"],["L","17","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","8","34"],["L","195","34"],["L","193","40"],["L","10","40"],["L","8","34"]]}]',
            )}
          />
        )}
        {customPaths?.map((customPath, customPathKey) => {
          return <Frame key={customPathKey} paths={JSON.parse(customPath)} />;
        })}
      </div>
      <span>{children}</span>
    </button>
  );
}

export { Button };
