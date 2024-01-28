import Main from "@/components/Main";
import { notFound } from "next/navigation"

export default async function ServicesPage({ params: { flag } }: { params: { flag: "rent" | "buy" | "sell" } }) {

    if (!flag) notFound();
    
    return (<Main>{flag}</Main>)
}