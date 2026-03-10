import { useState } from "react";
import { Toggle } from "./components/Toggle";

type ToggleState = "on" | "off" | "loading";

export function App() {
  const [value, setValue] = useState<ToggleState>("on");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-neutral-900">
      <Toggle
        state={value}
        onClick={() => setValue(value === "on" ? "off" : "on")}
      />
      <p className="text-white text-2xl font-medium capitalize">{value}</p>
    </div>
  );
}
