import React, { useRef, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
// Toastify ইম্পোর্ট করুন
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const contactInfo = [
    { icon: <FaPhoneAlt />, title: "Call Me", value: "+880 1863 071462", link: "tel:+8801863071462" },
    { icon: <FaEnvelope />, title: "Email Me", value: "hossensifat615@gmail.com", link: "mailto:hossensifat615@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: "Location", value: "Chattogram, Bangladesh", link: "#" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_8wp1s6o";
    const TEMPLATE_ID = "template_2hjow7s";
    const PUBLIC_KEY = "L-zVSHhazIMTZVdwG";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
          });
          formRef.current.reset();
          setIsSending(false);
      }, (error) => {
          toast.error("Something went wrong. Please try again!", {
            position: "top-right",
            theme: "colored",
          });
          setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-12 max-w-6xl mx-auto px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <ToastContainer />
    
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <span className="text-green-600 font-black uppercase tracking-widest text-sm mb-2 block">Connect</span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Get In <span className="text-green-600">Touch</span>
        </h2>
        <div className="w-16 h-1.5 bg-green-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-10"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-zinc-800 dark:text-white tracking-tight leading-none">Let's discuss your project</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-medium">
              I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {contactInfo.map((info, idx) => (
              <a 
                href={info.link} 
                key={idx}
                className="flex items-center gap-6 p-6 rounded-[2rem] bg-zinc-500/5 dark:bg-white/[0.02] border border-zinc-500/10 dark:border-white/5 hover:border-green-600/50 transition-all duration-500 group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-100/10 dark:bg-green-600/10 text-green-600 text-xl group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">{info.title}</h4>
                  <p className="text-zinc-800 dark:text-zinc-200 font-bold text-lg tracking-tight">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-zinc-500/10 dark:border-white/5"
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Full Name</label>
                <input
                  name="from_name" 
                  required
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full px-8 py-5 rounded-[1.5rem] bg-zinc-500/5 dark:bg-white/5 border border-zinc-500/10 dark:border-white/10 focus:border-green-600 focus:outline-none dark:text-white transition-all placeholder:text-zinc-500 font-medium"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Email Address</label>
                <input
                  name="reply_to"
                  required
                  type="email"
                  placeholder="youremail@gmail.com"
                  className="w-full px-8 py-5 rounded-[1.5rem] bg-zinc-500/5 dark:bg-white/5 border border-zinc-500/10 dark:border-white/10 focus:border-green-600 focus:outline-none dark:text-white transition-all placeholder:text-zinc-500 font-medium"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Subject</label>
              <input
                name="subject"
                required
                type="text"
                placeholder="How can I help you?"
                className="w-full px-8 py-5 rounded-[1.5rem] bg-zinc-500/5 dark:bg-white/5 border border-zinc-500/10 dark:border-white/10 focus:border-green-600 focus:outline-none dark:text-white transition-all placeholder:text-zinc-500 font-medium"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-8 py-5 rounded-[1.5rem] bg-zinc-500/5 dark:bg-white/5 border border-zinc-500/10 dark:border-white/10 focus:border-green-600 focus:outline-none dark:text-white transition-all resize-none placeholder:text-zinc-500 font-medium"
              ></textarea>
            </div>

            <button
              disabled={isSending}
              type="submit"
              className="group w-full md:w-max flex items-center justify-center gap-4 px-12 py-5 bg-green-600 text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-green-700 shadow-xl shadow-green-600/20 transition-all active:scale-95 disabled:opacity-50"
            >
              <span>{isSending ? "Sending..." : "Send Message"}</span>
              {!isSending && <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;