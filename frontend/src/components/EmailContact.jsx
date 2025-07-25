const EmailContact = () => {
  return (
    <div className="text-blue-100 fixed bottom-0 right-4 md:py-[5%] md:pr-[10%] flex flex-col items-center z-50">
      <a href="mailto:youremail@example.com" className="text-white hover:text-purple-400 transition-colors duration-300 [writing-mode:vertical-lr] rotate-180 text-sm tracking-wide">
        yaredadisu5@gmail.com
      </a>
      <div className="w-px h-24 bg-white mt-4"></div> 
    </div>
  )
}

export default EmailContact