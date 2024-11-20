import { Metadata } from "next"


export const metadata:Metadata = {
  title:"Contact page"
}
const ContactPage = () => {
  return (
    <div className='bg-[#014E56] w-[1250px] px-3 mx-auto'>
      <div className="flex items-center justify-between">
        <div className="">
          <h2 className='text-[50px] font-bold text-white px-5'>Contact</h2>
        </div>
        <div className="flex flex-col justify-between w-[500px] my-[25px]">
          <span className='w-[50px] h-[2px] bg-[#79C8C7]'></span>
          <p className='text-white font-semibold text-[18px] pt-10'>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
