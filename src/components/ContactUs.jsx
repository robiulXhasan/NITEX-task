
const ContactUs = () => {
    return (
        <div id="contact" className="w-11/12 md:w-10/12 mx-auto my-20 bg-purple-50 rounded-xl p-10 ">
        <h1 className="text-2xl md:text-4xl font-bold mb-10">Contact Us</h1>
        
        <form action="">
          <div className="form-control md:w-3/4 mx-auto">
            <div className="flex justify-between gap-10 mb-10">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered rounded-lg h-16 w-full "
              />
              <input
                type="text"
                placeholder="Your Email Address"
                className="input input-bordered rounded-lg h-16 w-full "
              />
              
            </div>
            <textarea
                type="textarea"
                placeholder="Your Message"
                className="input input-bordered rounded-lg w-full h-44 pt-2 "
              />
              <input type="submit" value="Send Message"  className="btn btn-outline  md:w-1/2 mx-auto mt-10 border-yellow-500 text-yellow-500"/>
          </div>
        </form>
      </div>
    );
};

export default ContactUs;