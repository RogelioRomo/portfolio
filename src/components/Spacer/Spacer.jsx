export const Spacer = ({text}) => {
    return (
        <section className='bg-custom-black bg-stardust-pattern flex items-center justify-between max-w-7xl mr-auto ml-auto mt-2 py-4 px-8 rounded-full border-2 border-transparent hover:border-custom-gray2'>
            <p className="text-[#fff] text-xl font-semibold">
                {text}
            </p>
        </section>
    )
}