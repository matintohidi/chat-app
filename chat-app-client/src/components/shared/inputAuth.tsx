// react
import { FC } from "react";
// packages dependencies
import { ErrorMessage, Field } from "formik";

// props
interface InputProps {
    name: string
    label: string
    type?: string
    inputClassName?: string
    errorClassName?: string
    labelClassName?: string
}

const InputAuth: FC<InputProps> = ({
    name,
    type = "text",
    label,
    inputClassName,
    errorClassName,
    labelClassName
}) => {

    return (
        <div>
            <div className="relative">
                <Field
                    id={name}
                    name={name}
                    type={type}
                    autoComplete={name}
                    className={`peer block w-full appearance-none border-0 border-b border-[#AAAAAA] bg-transparent py-2.5 px-0 text-sm text-black focus:border-primary focus:outline-none focus:ring-0 ${inputClassName ?? ""}`}
                    placeholder=" "
                />
                <label
                    htmlFor={name}
                    className={`absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm lg:text-base text-[#AAAAAA] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:text-xl ${labelClassName ?? ""}`}
                >
                    {label}
                </label>
            </div>
            <ErrorMessage
                name={name}
                className={`text-sm lg:text-base mt-2 text-red-500 ${errorClassName ?? ""}`}
                component="div"
            />
        </div>
    )
};

export default InputAuth;