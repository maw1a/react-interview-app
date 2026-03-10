import clsx from "clsx";

export const Toggle = ({
  state,
  onClick,
}: {
  state: "on" | "off" | "loading";
  onClick?: () => void;
}) => {
  return (
    <button
      disabled={state === "loading"}
      onClick={onClick}
      className={clsx(
        "rounded-lg flex p-1.5 w-14 transition-colors duration-300 cursor-pointer",
        {
          on: "bg-blue-200",
          off: "bg-white",
          loading: "bg-gray-200 cursor-not-allowed opacity-50",
        }[state],
      )}
    >
      <span
        className={clsx(
          "size-6 rounded-sm bg-blue-600 transition-transform duration-300",
          {
            on: "translate-x-5",
            off: "translate-x-0",
            loading: "translate-x-2.5 animate-pulse",
          }[state],
        )}
      />
    </button>
  );
};
