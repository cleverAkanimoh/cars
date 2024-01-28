import React from "react";
import { signup } from "@/actions";
import { useGlobalContext } from "@/context";
import { FiCheckCircle } from "react-icons/fi";
import { Button, Spinner } from "@/components";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { shimmer } from "@/components/Skeletons/blog-skeleton";

export default function SignupComponent() {
  const { setLoginBtn } = useGlobalContext();

  // const toast = useToast()

  const [submiting, setSubmiting] = React.useState(false);
  const [error, setError] = React.useState("");
  const [User, setUser] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    img: "",
    role: "",
    passcode: "",
    confirmPasscode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    setUser({
      ...User,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmiting(true);

    if (User.passcode !== User.confirmPasscode) {
      setError("passwords do not match");
      setTimeout(() => setError(""), 6000);
      setSubmiting(false);
      return;
    }

    try {
      await signup(User);

      setLoginBtn(true);
    } catch (err) {
      console.error(err);
    }
    setSubmiting(false);
  };

  return (
    <>
      <h1 className="text-xl xs:text-3xl my-1 self-start">
        <span>Registration form</span>
      </h1>

      <p className="text-xs font-cursive">
        Please complete the form to sign up
      </p>

      {error && (
        <p className="w-full text-center text-xs text-red-600 bg-red-100 p-2 rounded">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 w-full max-w-[550px] text-sm"
      >
        <input
          name="firstname"
          type="text"
          placeholder="First Name"
          className="signup-input capitalize rounded-tl-[6px] border-b-0"
          value={User.firstname}
          onChange={handleChange}
          required
        />

        <input
          name="lastname"
          type="text"
          placeholder="Last Name"
          className="signup-input capitalize rounded-tr-[6px] border-b-0 border-l-0"
          value={User.lastname}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="signup-input col-span-2 border-y"
          value={User.email}
          onChange={handleChange}
          required
        />

        <fieldset className="h-fit p-2 flex flex-col items-center justify-center gap-2 col-span-2 border-x border-dashed border-grayLine shadow-xs text-xs">
          <figcaption>Sign up as</figcaption>

          <div className="flex items-center justify-center gap-2 xs:gap-4 px-2 capitalize">
            <CategoryBtn
              value="owner"
              Icon={CurrencyDollarIcon}
              handleChange={handleChange}
            />
            <CategoryBtn
              value="seller"
              Icon={CurrencyDollarIcon}
              handleChange={handleChange}
            />
            <CategoryBtn
              value="buyer"
              Icon={CurrencyDollarIcon}
              handleChange={handleChange}
              defaultChecked
            />
          </div>
        </fieldset>

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

        <button
          disabled={submiting}
          className={`${submiting && shimmer} ${
            submiting ? "cursor-not-allowed" : "hover:bg-orange-300"
          } relative bg-orange-500 w-full h-[45px] mt-4 text-white col-span-2 rounded-md flex gap-3 items-center justify-center`}
        >
          {submiting ? (
            <>
              <Spinner /> <span>submitting</span>
            </>
          ) : (
            "sign in"
          )}
        </button>
      </form>
    </>
  );
}

const CategoryBtn = ({
  value,
  Icon,
  handleChange,
  defaultChecked,
}: {
  value: string;
  Icon: React.ElementType;
  defaultChecked?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Button className="relative hover:shadow-xs h-12 w-20 xs:w-24 sm:w-[100px]">
      <input
        type="radio"
        name="role"
        id={value}
        value={value}
        onChange={() => handleChange}
        className="peer opacity-0"
        defaultChecked={defaultChecked}
      />

      <FiCheckCircle className="absolute top-2 right-2 z-[200] opacity-0 transition-all duration-700 peer-checked:opacity-100" />

      <Icon className="h-6 opacity-20 absolute max-xs:top-1 bottom-1 left-1 -z-10" />

      <label
        className="h-full w-full z-20 border absolute top-0 left-0 font-serif text-xs sm:text-sm capitalize cursor-pointer hover:border-purple-950 hover:bg-opacity-20 hover:bg-purple-200 flex items-end justify-center pb-1  rounded-md transition-all duration-200 peer-checked:border-purple-950 peer-checked:bg-purple-200 peer-checked:bg-opacity-20 peer-checked:border-2 peer-checked:font-bold"
        htmlFor={value}
      >
        {value}
      </label>
    </Button>
  );
};
