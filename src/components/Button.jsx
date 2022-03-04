function Button({ label, url, type }) {
    const border = "border-2 border-sky-500 hover:bg-brand"
    const normal = "bg-brand hover:bg-sky-600"

    return (
        <a
            /* className={`py-2 transition duration-500 bg-brand hover:bg-sky-500 rounded-lg text-md shadow-md shadow-sky-500/50`} */
            className={`py-2 transition duration-500 rounded-lg text-md shadow-md shadow-sky-500/50 ${type === 'primary' ? normal : border} border-sky-500`}
            href={url}
        >
            {label}
        </a>
    );
}

export default Button;
