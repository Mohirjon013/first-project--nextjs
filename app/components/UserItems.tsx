import React from "react"
import { UserType } from "../page"
interface UserItems {
    item:UserType
}
const UserItems:React.FC<UserItems> = ({item}) => {
  return (
    <div className=" w-[300px] bg-gray-200 p-2 rounded-sm ">
        <img className="rounded-md" src="https://picsum.photos/500/500" alt="" width={300}  />
        <h2 className="text-[25px] font-bold leading-5 my-2">{item.name}</h2>
        <span className="font-medium text-slate-600">{item.email}</span>
        <h3 className="text-[22px] font-semibold ">{item.website}</h3>
    </div>
  )
}

export default UserItems
