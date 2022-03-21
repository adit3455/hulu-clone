

const HeaderItem = ({Icon, title}) => {
  return (
    <div className="sm:w-20 hover:text-white w-12 group flex flex-col cursor-pointer items-center">
        <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
        <p className="opacity-0  group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  )
}

export default HeaderItem