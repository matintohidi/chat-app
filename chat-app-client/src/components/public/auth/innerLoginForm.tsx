// packages dependencies
import { Form , FormikProps } from 'formik';
// contracts
import { LoginFormValuesInterface } from '../../../contracts/auth';
// components
import { InputAuth } from '../..';

const InnerLoginForm = (props: FormikProps<LoginFormValuesInterface>) => {
    return (
        <Form>
            <div className="space-y-10">
                <InputAuth name="email" label="Email" />

                <InputAuth name="password" label="Password" type="password" />
            </div>

            <button
                type="submit"
                className="w-full xl:py-[12px] py-[8px] bg-primary text-white rounded-[36px] mt-14"
            >
                Login
            </button>
        </Form>
    )
}

export default InnerLoginForm;