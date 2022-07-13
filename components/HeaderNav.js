import Link from "next/Link"

export default function Nav() {
    return (
        <>
            <nav>
                <Link href="/">
                    <a>
                        Main
                    </a>
                </Link>
                -|-
                <Link href="/sub/about">
                    <a>
                        About
                    </a>
                </Link>
            </nav>
        </>
    )
}