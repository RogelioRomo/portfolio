export const BgCard= ({text, rounded}) => {
    return (
        <section className='bg-custom-black bg-stardust-pattern max-w-7xl mr-auto ml-auto mt-2 py-4 px-8 rounded-{${rounded}} border-2 border-transparent hover:border-custom-gray2'>
            <p className="text-[#fff] text-xl font-semibold">
                {text}
            </p>
        </section>
    )
}