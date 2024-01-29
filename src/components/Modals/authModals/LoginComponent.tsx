import { Button, Spinner } from "@/components";
import React from "react";

import { signIn } from "next-auth/react";

import { BsGoogle } from "react-icons/bs";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { shimmer } from "@/components/Skeletons/blog-skeleton";

export default function LoginComponent() {
  const [submitting, setSubmitting] = React.useState(false);
  const [passTypeText, setPassTypeText] = React.useState(false);

  // const toast = useToast()

  const handleGoogleLogin = async () => {
    setSubmitting(true);

    try {
      await signIn("google");
    } catch (err) {
      console.error(err);
    }
    setSubmitting(false);
  };

  const [userInfo, setUserInfo] = React.useState({
    email: "",
    passcode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    // if (!value) toast({ title: `Empty Field`, description: `please check that ${name} field have been inputed`, status: "warning" })

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleCredentialsLogIn = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      await signIn("credentials", {
        email: userInfo.email,
        passcode: userInfo.passcode,
        redirect: true,
      });
    } catch (error) {
      console.error(error);
    }

    // toast({ title: `Login Success`, description: `Your login was successful`, status: "success" })

    setSubmitting(false);
  };

  return (
    <>
      <h1 className="text-2xl sm2:text-4xl w-full font-bold self-start">
        Welcome Back!
      </h1>

      <Button
        onClick={handleGoogleLogin}
        className="w-fit border border-gray-100 hover:border-gray-300 px-8 justify-center my-2 gap-4"
      >
        <span>sign in with google</span>
        <BsGoogle />
      </Button>

      <p className="flex gap-4 justify-center items-center w-full">
        <span className="span-underline"></span>{" "}
        <span className="text-base">or</span>{" "}
        <span className="span-underline"></span>
      </p>

      <form onSubmit={handleCredentialsLogIn} className="relative login-form">
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
          type={passTypeText ? "text" : "password"}
          placeholder="Password"
          value={userInfo.passcode}
          onChange={handleChange}
          required
        />

        {userInfo.passcode && (
          <label
            htmlFor="passcode"
            className="absolute right-3 cursor-pointer bottom-20 z-40"
            onClick={() => setPassTypeText((prev) => !prev)}
          >
            {passTypeText ? (
              <EyeSlashIcon className="h-5" />
            ) : (
              <EyeIcon className="h-5" />
            )}
          </label>
        )}

        <button
          disabled={submitting}
          className={`${submitting && shimmer} ${
            submitting ? "cursor-not-allowed" : "hover:bg-orange-300"
          } relative bg-orange-500 w-full h-[45px] mt-4 text-white col-span-2 rounded-md flex gap-3 items-center justify-center`}
        >
          {submitting ? (
            <>
              <Spinner /> <span>signing you in... please wait</span>
            </>
          ) : (
            "sign in"
          )}
        </button>
      </form>
    </>
  );
}
