function Card({ title, description, img }) {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <img className="h-40 w-[100%] object-cover bg-[#36393f] rounded-t-lg" src={img} alt={title} />
            <div className="p-5">
                <h1 className="mb-2 text-2xl font-bold tracking-">{title}</h1>
                <p className="mb-3 font-normal text-gray-200">{description}</p>
            </div>
        </div>
    );
}

export default Card;