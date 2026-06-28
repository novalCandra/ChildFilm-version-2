export default function LoadingScreenn({ givLogo }) {
    return (
        <div className="flex min-h-screen justify-center mx-auto items-center bg-white">
            <img src={givLogo} alt="gif" className="md:w-72" />
        </div>
    )
}
