import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"
import Image from "next/image"
import Nav from "./Nav"

export default function Page(){
    return(
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <Image src="/logo.png" alt="my logo image" width={150} height={40} />
                </Link>
            </div>

            <Nav/>

        </header>
    )
}