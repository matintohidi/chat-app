import React from 'react';
// packages dependencies
import { useCookies } from 'react-cookie';
// react router dom
import { useNavigate , Link } from 'react-router-dom';
// components
import { LoginForm } from '../../components';

const Login : React.FC = () => {
    const [ , setCookies ] = useCookies(["chat-user"]);
    const navigate = useNavigate();

    const setCookie = (cookie: any , value: string) => {
        setCookies(cookie , value , {
            maxAge: 60 * 60 * 24 * 30,
            domain: "localhost",
            path: "/",
            sameSite: "lax"
        })
    }

    return (
        <section className="flex overflow-y-hidden">
            <section className="xl:px-[60px] lg:px-[40px] px-[65px] w-full lg:w-2/5 h-screen flex justify-between items-center">
                <section className="w-full sm:px-[50px] md:px-[80px] lg:px-0">
                    <div className="space-y-4">
                        <h2 className="xl:text-[40px] text-[34.5px] font-PoppinsBold">Login to your account</h2>
                        <h3 className="text-[#545454]">To have the freedom to connect with the world, please log in to your account</h3>
                    </div>
                    <div className="mt-[60px]">
                        <LoginForm navigate={navigate} setCookie={setCookie} />
                    </div>
                </section>
            </section>
            <section className="hidden w-3/5 lg:flex relative">
                <img
                    src="/static/images/register.jpg"
                    alt="freedom communicate with world"
                    className="w-full h-screen object-cover rounded-[48px] p-4"
                />
                <Link to="/register" className="absolute px-8 py-4 z-10 bg-primary text-white rounded-full right-12 top-12">
                    Register
                </Link>
            </section>
        </section>
    )
}

export default Login;