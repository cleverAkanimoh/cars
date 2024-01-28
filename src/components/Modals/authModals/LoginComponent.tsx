import { Spinner } from "@/components";
import React from "react";

// import { signIn } from "next-auth/react";

import { BsGoogle } from "react-icons/bs";
// import { useToast, Spinner } from "@chakra-ui/react";

export default function LoginComponent() {

  const [submitting, setSubmitting] = React.useState(false)

  // const toast = useToast()

  const handleGoogleLogin = async () => {
  //   setSubmitting(true)

  //   try {
  //     await signIn('google')
      
  //     setSubmitting(false)

  //   } catch (err) {

  //     toast({ title: `Authentication Error`, description: `Sign in was not successful`, status: "error" })
  //     setSubmitting(false)
  //   }
    
  }

  const [userInfo, setUserInfo] = React.useState({
    email: '',
    passcode: ''
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target

    // if (!value) toast({ title: `Empty Field`, description: `please check that ${name} field have been inputed`, status: "warning" })

    setUserInfo({
      ...userInfo,
      [name]: value,
    })
  }

  const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitting(true)

    // await signIn("credentials", {
    //   email: userInfo.email,
    //   passcode: userInfo.passcode,
    //   redirect: true,
    // });

    // toast({ title: `Login Success`, description: `Your login was successful`, status: "success" })

    setSubmitting(false)
  }

  return (
    <>
      <h1 className="text-2xl sm2:text-4xl w-full font-bold self-start">Welcome Back!</h1>

      <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center my-2 gap-2"><span>sign in with google</span><BsGoogle /></button>

      <p className="flex gap-4 justify-center items-center w-full"><span className="span-underline"></span> <span className="text-base">or</span> <span className="span-underline"></span></p>

      <form onSubmit={handleLogIn} className="login-form">
        <input
          name="email"
          type="email"
          placeholder="Email address"
          value={userInfo.email}
          onChange={handleChange}
          required
        />

        <input
          name="passcode"
          type="password"
          placeholder="Password"
          value={userInfo.passcode}
          onChange={handleChange}
          required
        />

        <button className={`${submitting ? "bg-opacity-40 cursor-not-allowed pointer-events-none" : ""} hover:bg-opacity-50`}>
          {submitting ? <Spinner /> : "log in"}
        </button>
      </form>

    </>
  );
}
