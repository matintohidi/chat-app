// packages dependencies
import { Form , FormikProps } from 'formik';
// contracts
import { RegisterFormValuesInterface } from '../../../contracts/auth';
// components
import { InputAuth } from '../..';

const InnerRegisterForm = (props: FormikProps<RegisterFormValuesInterface>) => {
    return (
        <Form>
            <div className="space-y-10">
                <InputAuth name="name" label="Name" />

                <InputAuth name="email" label="Email" type="email" />

                <InputAuth name="password" label="Password" type="password" />
            </div>

            <button
                type="submit"
                className="w-full xl:py-[12px] py-[8px] bg-primary text-white rounded-[36px] mt-14"
            >
                Next
            </button>
        </Form>
    )
}

export default InnerRegisterForm;