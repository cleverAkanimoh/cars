import React from "react";
import { signup } from "@/actions";
import { useGlobalContext } from "@/context";
// import { Spinner, useToast } from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";

export default function SignupComponent() {

	const { setLoginBtn } = useGlobalContext();

	// const toast = useToast()

	const [submiting, setSubmiting] = React.useState(false);

	const [User, setUser] = React.useState({
		firstname: '',
		lastname: '',
		email: '',
		img: '',
		category: '',
		passcode: '',
		confirmPasscode: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let { name, value } = e.target

		// if (!value) toast({ title: `Empty Field`, description: `please check that ${name} field have been inputed`, status: "warning" })

		setUser({
			...User,
			[name]: value,
		})
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setSubmiting(true);

		// if (User.passcode !== User.confirmPasscode) {
		// 	toast({ title: `Invalid Credential`, description: `Passcode don't match`, status: "error" })
		// 	setSubmiting(false)
		// 	return;
		// }

		try {
			await signup(User)

			// toast({
			// 	title: `Welcome onBoard ${User.firstname}`,
			// 	description: `Your account has been created successfully`,
			// 	status: "success"
			// })

			setSubmiting(false)
			setLoginBtn(true)

		} catch (err) {
			console.log('Log: please check your internet connection')
			setSubmiting(false)
			// toast({
			// 	title: `Erorr Message`,
			// 	description: `check your internet connection`,
			// 	status: "error"
			// })
		}
	}

	return (
		<>
			<h1 className="text-2xl sm2:text-[1.95rem] font-bold self-start">Sign up<span className="text-3xl sm2:text-[2.1rem] text-secondary font-extrabold">&nbsp;Today!</span></h1>

			<form onSubmit={handleSubmit} className="signup-form">
				<input
					name="firstname"
					type="text"
					placeholder="first name"
					className="signup-input rounded-tl-[6px]"
					value={User.firstname}
					onChange={handleChange}
					required
				/>

				<input
					name="lastname"
					type="text"
					placeholder="last name"
					className="signup-input rounded-tr-[6px] border-l-0"
					value={User.lastname}
					onChange={handleChange}
					required
				/>

				<input
					name="email"
					type="email"
					placeholder="email address"
					className="signup-input col-span-2 border-t-0"
					value={User.email}
					onChange={handleChange}
					required
				/>

				<aside className="h-fit p-4 flex flex-wrap flex-shrink items-center justify-center gap-2 col-span-2 border-x border-line shadow-md" >

					<h1>Sign up as</h1>

					<div className="flex items-center justify-center gap-4 capitalize">
						<button role="button" type="button" className="category-btn">

							<input
								type="radio"
								name="category"
								id="owner"
								value="owner"
								onChange={handleChange}
								className="peer"
							/>
							
							<FiCheckCircle className="tick-icon peer-checked:opacity-100" />

							<label className="category-label peer-checked:border-purple-950 peer-checked:bg-purple-200 peer-checked:bg-opacity-30  peer-checked:border-2" htmlFor="owner">owner</label>

						</button>

						<button role="button" type="button" className="category-btn">

							<input
								type="radio"
								name="category"
								id="seller"
								value="seller"
								onChange={handleChange}
								className="peer"
							/>
							
							<FiCheckCircle className="tick-icon peer-checked:opacity-100" />

							<label className="category-label peer-checked:border-purple-950 peer-checked:bg-purple-200 peer-checked:bg-opacity-30 peer-checked:border-2 peer-hover:border-2" htmlFor="seller">seller</label>

						</button>

						<button role="button" type="button" className="category-btn">

							<input
								type="radio"
								name="category"
								id="buyer"
								value="buyer"
								onChange={handleChange}
								className="peer"
								defaultChecked
							/>
							
							<FiCheckCircle className="tick-icon peer-checked:opacity-100" />

							<label className="category-label peer-checked:border-purple-950 peer-checked:bg-purple-200 peer-checked:bg-opacity-30 peer-checked:border-2 peer-hover:border-2" htmlFor="buyer">buyer</label>

						</button>
					</div>

				</aside>

				<input
					name="passcode"
					type="password"
					placeholder="Password"
					className="signup-input rounded-bl-[6px]"
					required
					value={User.passcode}
					onChange={handleChange}
				/>

				<input
					name="confirmPasscode"
					type="password"
					placeholder="Confirm Password"
					className="signup-input rounded-br-[6px] border-l-0"
					required
					value={User.confirmPasscode}
					onChange={handleChange}
				/>

				<button className={`${submiting ? "bg-opacity-40 cursor-not-allowed pointer-events-none" : ""} hover:bg-opacity-50`}>
					{/* {submiting ? <Spinner /> : "sign up"} */}
				signup
				</button>
			</form>
		</>
	);
}