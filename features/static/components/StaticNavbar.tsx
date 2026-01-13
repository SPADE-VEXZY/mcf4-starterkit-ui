import { Button } from "@/components/ui/button"
import Link from "next/link"

const StaticNavbar = () => {
  return (
    <div className="fixed w-full top-0 left-0 h-16 flex justify-between items-center px-80  z-50 ">

        <div className=""/>
        <div>
            <Link href={"/register"}>
                <Button variant={"outline"} className={"text-base font-normal  py-4 px-7 w-[150px]"}>Register</Button>
            </Link>
            <Link href={"/login"}>
                <Button variant={"secondary"} className={"text-base font-normal py-4 px-7 w-[150px]"}>Login</Button>
            </Link>
            <Link href={"/dashboard"} >
                <Button className={"text-base font-normal py-4 px-7 w-[150px]"}>Dashboard</Button>
            </Link>
        </div>
    </div>
  )
}

export default StaticNavbar