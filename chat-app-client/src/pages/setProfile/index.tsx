import React , { useEffect, useState } from 'react';
// react router dom
import { useNavigate } from 'react-router-dom';
// packages dependencies
import { useCookies } from 'react-cookie';
import { v1 as uuid } from 'uuid';
import * as yup from 'yup';
// helpers
import callApi from '../../helpers/callApi';
// utils
import { setProfileRoute, userRoute } from '../../utils/APIRoutes';

const SetProfile : React.FC = () => {
	const [ errors , setErrors ]: any[] = useState([]);
	const [ user , setUser ] : any = useState(null);
	const [ cookies , setCookies , removeCookies ] = useCookies();
	const navigate = useNavigate();

	useEffect(() => {
        const fetchUser = async () => {
            try {
                const getUser = await callApi().post(userRoute , { token: cookies["set-profile-token"] , tokenKey: "setProfile" });

				setUser(getUser.data.user);
            } catch {
                removeCookies("set-profile-token");
                navigate("/login");
            }
        }

		fetchUser();
	},[])

	const setCookie = (token : string) => {
		setCookies("chat-user" , token , {
			maxAge: 60 * 3,
			domain: "localhost",
			path: "/",
			sameSite: "lax"
		})
	}
    const submitHandler = async (e: any) => {
        e.preventDefault();

        const formData = new FormData(e.target);
		formData.append("id" , user._id);
		const profile = formData.get("profile");

		const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

		const profileValidation = yup.object().shape({
			profile: yup.mixed()
				.test("exist" , "No image" , (value) => value.type !== "application/octet-stream" && value.size !== 0)
				.test("format" , "The image format should be .jpeg .png .jpg." , (value) => SUPPORTED_FORMATS.includes(value.type))
				.test("size" , "The desired image size should be less than 5MB." , (value) => value.size <= 5000000)
		})

		try {
			profileValidation.validateSync({ profile });

			try {
				const res = await callApi().put(setProfileRoute , formData , { headers: { "Content-Type": "multipart/form-data" , "Authorization": cookies["set-profile-token"] }});

				if(res.status === 200) {
					removeCookies("set-profile-token");
					setCookie(res.data.token);

					navigate("/chat");
				}
			} catch (err) {
				console.log(err);
			}
		} catch (err: any) {
			if(err.message === "No image") {
				try {
					const res = await callApi().put(setProfileRoute , { id: user._id } , { headers: { "Authorization": cookies["set-profile-token"] }});

					if(res.status === 200) {
						removeCookies("set-profile-token");
						setCookie(res.data.token);

						navigate("/chat");
					}
				} catch (err) {
					console.log(err);
				}
			} else {
				setErrors((prev: any[]) => {
					if(!prev.includes(err.message)) {
						return [err.message]
					} else {
						return  [...prev]
					}
				})
			}
		}

	}

    return (
		<form onSubmit={submitHandler} encType="multipart/form-data" className="w-full h-screen flex flex-col justify-center items-center">
			<div className="w-5/6 md:w-1/2 xl:w-2/3">
				<div className="flex flex-col">
					{
						errors.map((err: any) => <span key={uuid()} className="text-red-600 text-md">{err}</span>)
					}
				</div>

				<div className="space-y-10">
					<div className="flex items-center justify-center w-full">
						<label htmlFor="profile" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
							<div className="flex flex-col items-center justify-center pt-5 pb-6">
								<svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
								<p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
								<p className="text-xs text-gray-500">JPEG, PNG, JPG (Size should be less than 5 MB)</p>
							</div>
							<input id="profile" type="file" className="hidden" name="profile" />
						</label>
					</div>
				</div>


				<button
					type="submit"
					className="w-full xl:py-[12px] py-[8px] bg-primary text-white rounded-[36px] mt-14"
				>
					Create account
				</button>
			</div>
		</form>
    )
}

export default SetProfile;