import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface InputProps {
  children: string;
  type?: string;
  value: string;
  password?: boolean;
  name: string;
  onChange: Dispatch<SetStateAction<Record<string, any>>>;
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] w-full">
      <label htmlFor={props.name} className="text-sm px-4">
        {props.children}
      </label>
      <input
        id={props.name}
        className="w-full border-none outline-none px-2"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          props.onChange((prev) => ({
            ...prev,
            [props.name]: event.target.value,
          }));
        }}
        type={props.type ?? "text"}
      />
    </div>
  );
}
