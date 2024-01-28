// import { hashUserPass, prisma } from "@/lib";
// import { User } from "next-auth";

type UserProps = {
  firstname: string;
  lastname: string;
  email: string;
  category: string;
  passcode: string;
  img: string;
};

export default async function signup(data: UserProps) {
  // const { firstname, lastname, email, img, category, passcode } = data;

  // const hashpasscode = hashUserPass(passcode);

  // const User = {
  //   firstname,
  //   lastname,
  //   email,
  //   img,
  //   category,
  //   passcode: hashpasscode,
  // };

  // const dbUser = await prisma.user.findUnique({ where: { email } });

  // if (dbUser?.email === email) {}

  // const signupUser = await prisma.user.create({ data: User })

  // return signupUser as User;
}
