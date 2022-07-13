import HeaderNav from "./HeaderNav"

export default function Layout({children}) {
    return (
        <>
            <HeaderNav />
            <div>
                {children}
            </div>
        </>
    )
}