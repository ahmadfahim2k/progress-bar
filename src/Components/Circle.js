function Circle({ item, handleClick, index }) {

  function checkClick() {
    if (!item.active) handleClick(item.txt);
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div
        className={`
            w-[100px] h-[100px] rounded-full bg-[#ffffff] border-[3px] border-solid border-[#f3e7f3] duration-[0.4s] ease-in
            flex justify-center items-center cursor-pointer
            ${item.completed ? 'bg-[#4A154B] border-[#4A154B]' :
            item.active ? 'bg-red-500 border-[#4A154B] cursor-not-allowed' :
              ''
          }`} onClick={checkClick}>
        <span className={`text-3xl ${item.active ? 'text-[#4A154B]' : 'text-[#f3e7f3]'}`}>{index + 1}</span>
      </div>
      <div className='relative top-[10px] h-[60px] w-full'>
        <span className='text-xl text-[#4a154b]'>{item.txt}</span>
      </div>
    </div>
  )
}

export default Circle;