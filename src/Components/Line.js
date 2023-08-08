function Line({ completed }) {

    return (
        <div className={`h-[20px] w-full my-[45px] mx-[-10px] overflow-visible -z-10  ${!completed ? 'bg-[#4a154b]' : 'bg-[#f3e7f3]'}`}></div>
    )
}

export default Line;