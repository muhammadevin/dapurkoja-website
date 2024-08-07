import Link from "next/link"

const Button = ({text, link}) => {
  return (
    <Link href={link}>
      <button className="h-12 flex-shrink-0 rounded-md bg-secondary px-6 py-2 justify-center align-middle 
      text-xl md:text-2xl tracking-tight font-sans font-semibold text-primary hover:bg-red-600">
        {text}
      </button>
    </Link>
  )
}

export default Button