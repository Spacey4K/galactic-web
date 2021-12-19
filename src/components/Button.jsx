function Button({ label, url, disabled }) {
    return (
        <a
            className="min-w-1 bg-gradient-to-tr from-purple-600 to-blue-500 hover:to-blue-600 rounded-lg text-md py-2 shadow-md shadow-purple-500/50"
            href={url}
        >
            {label}
        </a>
    );
}

export default Button;
