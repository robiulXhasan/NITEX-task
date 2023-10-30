import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className=" ">
      <footer className="footer  bg-purple-100 text-base-content py-10 px-[8%] text-[16px]">
        <aside>
         
         
          <a className="normal-case text-2xl font-bold">M<span className="text-yellow-500">G</span>S<span className="text-yellow-500">C</span></a>
            <p className="text-xs">Morning Glory School & Collage</p>
           <p className="font-medium">Providing best study since 2014</p>
          
        </aside>
        <nav>
          <header className="footer-title">Navigation</header>
          <a className="hover:text-yellow-500 cursor-pointer">Admission</a>
          <a className="hover:text-yellow-500 cursor-pointer">Apply Online</a>
          <a className="hover:text-yellow-500 cursor-pointer">Teachers</a>
          <a className="hover:text-yellow-500 cursor-pointer">About us</a>
      
        </nav>
        <nav>
          <header className="footer-title">Important Links</header>
          <a className="hover:text-yellow-500 cursor-pointer">Class Routine</a>
          <a className="hover:text-yellow-500 cursor-pointer">Photo Archived</a>
          <a className="hover:text-yellow-500 cursor-pointer">Blogs</a>
          <a className="hover:text-yellow-500 cursor-pointer">FAQ</a>
        </nav>
        
        <nav>
          <header className="footer-title">Contact</header>
          <div className="link link-hover flex items-center text-[16px]"><AiOutlineMail className='text-2xl '/>:  info@mgsc.com</div>
          <div className=" flex items-center text-[16px] "><AiOutlinePhone className='text-2xl '/>: 01882345960 </div>
          <div className="link link-hover flex items-center text-2xl gap-4 "> <AiOutlineFacebook/><AiOutlineYoutube/><AiOutlineLinkedin/> <AiOutlineInstagram/> </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
