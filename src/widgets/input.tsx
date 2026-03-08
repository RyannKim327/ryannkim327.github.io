import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface InputProps<T> {
  children: string;
  type?: string;
  value: Record<string, any>;
  name: keyof T;
  onChange: Dispatch<SetStateAction<T>>;
}

export default function Input<T>({
  children,
  type = "text",
  value,
  name,
  onChange,
}: InputProps<T>) {
  return (
    <div className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] w-full">
      <label htmlFor={String(name)} className="text-sm px-4">
        {children}
      </label>

      <input
        id={String(name)}
        value={value[String(name)]}
        className="w-full border-none outline-none px-2"
        type={type}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange((prev) => ({
            ...prev,
            [name]: event.target.value,
          }));
        }}
      />
    </div>
  );
}
