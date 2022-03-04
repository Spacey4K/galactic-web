function Command({ cmd }) {
    return (
        <button
            className="transition duration-200 font-mono bg-slate-600/25 hover:bg-slate-500/30 focus:bg-slate-700 rounded mx-0.5 px-0.5 inline-flex items-center"
            onClick={() => navigator.clipboard.writeText(cmd)}
        >
            {cmd}
        </button>
    );
}

export default Command;