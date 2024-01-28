import commentAction, { CommentProps } from "@/actions/comment";
import { BlogComment, Main } from "@/components";

export default function SupportPage() {
    return (<Main>
        <BlogComment heading={""} textAreaPh={""} />
    </Main>)
}