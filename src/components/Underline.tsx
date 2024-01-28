type UnderlineProps = {
    className?: string
}

export default function Underline({ className }: UnderlineProps) {
    return <span className={`${className} w-0 h-[2px] peer-hover:w-full transition-all duration-300`}></span>
}