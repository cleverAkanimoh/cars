export type CommentProps = {
  message: string;
  email: string;
};

const commentAction = async ({ message, email }: CommentProps) => {
  console.log([message, email]);
};

export default commentAction;
