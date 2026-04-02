import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";
import local from "../utils/local_controller";

interface InputProps<T> {
  children: string;
  type?: string;
  value: Record<string, any>;
  name: keyof T | string;
  onChange: Dispatch<SetStateAction<T>>;
  break?: string;
  remember?: boolean;
  onEnter?: () => void;
  minLength?: number;
  placeholder?: string;
}

export default function Input<T>(props: InputProps<T>) {
  return (
    <div className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] w-full p-1 gap-2 rounded-sm">
      <label htmlFor={String(props.name)} className="text-sm px-4">
        {props.children}
      </label>

      <input
        placeholder={props.placeholder ?? ""}
        minLength={props.minLength ?? 0}
        id={String(props.name)}
        value={props.value[String(props.name)]}
        className="w-full border-none outline-none px-2"
        type={props.type}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          props.onChange((prev) => ({
            ...prev,
            [props.name]:
              props.break != null
                ? event.target.value.split(props.break)
                : event.target.value,
          }));
          if (props.remember) {
            local(props.name.toString(), event.target.value ?? "");
          }
        }}
        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.keyCode === 13 && props.onEnter) {
            props.onEnter();
          }
        }}
      />
    </div>
  );
}
