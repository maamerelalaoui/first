import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
export default function Contact() {
  const [formData, setFormData] = useState({ subject: "", name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: null, subject: null, email: null, message: null });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || formData.name.length < 4) {
      setErrors((prev) => ({ ...prev, name: "Name must be at least 4 characters long." }));
      return;
    }
    if (!formData.subject || formData.subject.length < 5) {
      setErrors((prev) => ({ ...prev, subject: "Subject must be at least 5 characters long." }));
      return;
    }
    if (!formData.email.includes("@")) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address." }));
      return;
    }
    if (!formData.message || formData.message.length < 10) {
      setErrors((prev) => ({ ...prev, message: "Message must be at least 10 characters long." }));
      return;
    }

    try {
      const response = await emailjs.send(
        "service_1stnl16",
        "template_t07fjxh",
        { email: formData.email, name: formData.name, subject: formData.subject, message: formData.message },
        "w3ouWC_qnfTOHWYBi"
      );
      console.log(response);
      setErrors({ name: null, subject: null, email: null, message: null });
      setFormData({ subject: "", name: "", email: "", message: "" });
      toast.success("Message sent successfully! Thanks for contacting us.");
    } catch (error) {
      console.log({ message: "Error sending email", error });
      toast.error("Error while sending email, check the console.");
    }
  };

  return (
    <div className="h-ful mt-[65px]">
      {/* Hero Section */}
      <header className="bg-gradient-to-r   py-6 md:py-20  bg-cover bg-opacity-50 relative bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(29, 78, 216, 0.75), rgba(29, 78, 216, 1)), url(/2091.jpg)` }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-center text-white">Contact us</h1>
                </div>
            </header>

      {/* Contact Section */}
      <section className="my-20">
        <div className="shadow-2xl px-20 bg-blue-100 rounded-xl max-w-7xl mx-auto py-10 md:px-6 flex flex-col lg:flex-row items-start gap-12">
          {/* Contact Info */}
          <div className="bg-blue-700 w-full lg:w-1/3 rounded p-3">
            <div>
              <div className="text-3xl font-bold text-white text-center">Get in Touch</div>
            </div>
            <div className="space-y-6 p-2 md:p-6">
              <div className="flex items-center space-x-4 bg-white py-2 px-5 rounded-lg">
                <div className="flex items-center justify-center text-blue-600">                
                    <MapPin className="w-10 h-10" />
                </div>
                <div className="flex flex-col">
                <h1 className="text-2xl text-blue-700 font-semibold">Address</h1>
                <p className="text-gray-700 text-sm">123 Education St, Learning </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white py-2 px-5 rounded-lg">
                <div className="flex items-center justify-center text-blue-600">                
                    <Phone className="w-10 h-10" />
                </div>
                <div className="flex flex-col">
                <h1 className="text-2xl text-blue-700 font-semibold">Phone Number</h1>
                <p className="text-gray-700 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white py-2 px-5 rounded-lg">
                <div className="flex items-center justify-center text-blue-600">                
                    <Mail className="w-10 h-10" />
                </div>
                <div className="flex flex-col">
                <h1 className="text-2xl text-blue-700 font-semibold">Email</h1>
                <p className="text-gray-700 text-sm">contact@learningplatform.com</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <a key={index} href="#" className="text-white hover:text-blue-800">
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full ">
            <div className="mb-7">
              <div className="text-5xl font-bold text-blue-700 text-center  md:text-left">Send Us a Message</div>
            </div>
            <div className="p-2 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input className="p-3 border-0 rounded w-full" type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input className="p-3 border-0 rounded w-full" type="text" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <input className="p-3 border-0 rounded w-full" type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <textarea className="p-3 border-0 rounded w-full min-h-[150px]" placeholder="Your Message" name="message" value={formData.message} onChange={handleChange}/>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="font-semibold text-lg flex items-center gap-2 group/button duration-300 ">

                <div className='flex justify-start mt-5'>
                      <button type="submit" className="font-semibold text-lg flex items-center gap-2 group">
                        <div className="relative px-7 py-3 flex items-center duration-500 rounded-md bg-blue-600 justify-center overflow-hidden">
    
                        <div className="absolute w-0 h-0  bg-gray-800 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:w-40 group-hover:h-40 group-hover:scale-150" style={{ zIndex: 1 }}></div>

                        <span className="text-white relative " style={{ zIndex: 10 }}>Submit</span>
  
                         </div>
                        </button></div>

                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.822309221983!2d-9.529012988651248!3d30.362416703329725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c795dd674733%3A0x6009812748f2e923!2sMNC%20PRODUCTION%20COMPANY!5e1!3m2!1sen!2sma!4v1730108660335!5m2!1sen!2sma"
              loading="lazy"
              allowFullScreen
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
