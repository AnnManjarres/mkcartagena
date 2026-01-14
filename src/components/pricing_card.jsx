
const PricingCard = ({
    title,
    price,
    features,
    buttonText = 'Comencemos',
    border

}) => {

    return(  
            
        <div className={`w-full mx-auto text-white p-5 bg-gradient-to-b from-slate-600 to-slate-900 rounded-lg shadow-lg flex flex-col justify-between`}>

            <h3 className="text-2xl font-semibold mt-3">{title}</h3>
            <p className="mt-4 text-3xl font-bold">
                {price}
            </p>

            <ul className="mt-6 mb-5 space-y-2 py-2">
                {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    <span className="text-start">{feature}</span>
                </li>
                ))}
            </ul>

            <a href="https://wa.me/573044421642?text=Hola!%20Quiero%20saber%20más%20información!" className="font-medium border border-gray-800 bg-white text-gray-700 hover:bg-violet-100 hover:cursor-pointer shadow py-2 rounded-lg mb-4"> {buttonText} </a>
        </div>
        
    )

}

export default PricingCard;