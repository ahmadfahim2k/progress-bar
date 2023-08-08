function Button({ label, click, active }) {
    return (
        <>
            <button className='w-[90px] p-2 bg-[#4a154b] text-white rounded cursor-pointer select-none 
            active:scale-95
            disabled:bg-[#f3e7f3] disabled:text-black disabled:cursor-not-allowed
            btn ' onClick={click} >{label}</button>
        </>
    )
}

export default Button;