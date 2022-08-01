
function SearchList(props){

    return(
        <div className="bg-[#2a2a2a] text-white max-w-sm overflow-clip absolute z-10 translate-x-[40px] md:translate-x-[160px]">
            <ul>
                {props.item.map(item => <li className="py-1 px-3 hover:bg-[#3a3a3a] cursor-pointer">{item}</li>)}
            </ul>
        </div>
    )
}

export default SearchList