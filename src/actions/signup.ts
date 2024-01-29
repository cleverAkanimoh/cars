import { prisma } from "@/lib";
import { hashUserPass } from "@/utils";
import { User } from "next-auth";

type UserProps = {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  passcode: string;
};

export default async function signup({
  firstname,
  lastname,
  email,
  role,
  passcode,
}: UserProps) {
  console.log("delaying signup by 5seconds");

  await new Promise((resolve) => setTimeout(resolve, 5000));

  const hashpasscode = hashUserPass(passcode);

  const User = {
    name: `${firstname.toLowerCase()} ${lastname.toLowerCase()}`,
    email,
    role,
    passcode: hashpasscode,
  };

  const dbUser = await prisma.user.findUnique({ where: { email } });

  if (dbUser?.email === email) {
    return;
  }

  const signupUser = await prisma.user.create({ data: User });
  await prisma.userInfo.create({
    data: { firstname, lastname, userId: signupUser.id },
  });

  return signupUser as User;
}
