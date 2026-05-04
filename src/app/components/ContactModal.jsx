'use client';

import { useEffect, useState } from 'react';
import { useContactModal } from '../context/ContactModalContext';
import { IoMdClose } from 'react-icons/io';
import { MdOutlinePhone } from 'react-icons/md';
import { LuMailCheck } from 'react-icons/lu';
import { BsWhatsapp } from 'react-icons/bs';

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [copiedEmail, setCopiedEmail] = useState(false);

  /* ---------------- DATA ---------------- */

  const contactData = {
    title: 'Get in Touch Now!',
    description:
      "I'm open to new projects and freelance opportunities! Whether you need a UI designer or UI developer, let's collaborate and bring your ideas to life.",
    contactItems: [
      {
        type: 'phone',
        label: 'Phone Number',
        value: '+917559068970',
        buttonText: 'Call Now',
      },
      {
        type: 'email',
        label: 'Email Address',
        value: 'aswanthup06@gmail.com',
        buttonText: 'Copy Email',
      },
      {
        type: 'whatsapp',
        label: 'WhatsApp',
        value: '917559068970',
        buttonText: 'Chat Now',
      },
    ],
  };

  /* ---------------- EFFECTS ---------------- */

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* ---------------- HELPERS ---------------- */

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleContactAction = (type, value) => {
    switch (type) {
      case 'phone':
        window.location.href = `tel:${value}`;
        break;
      case 'email':
        copyToClipboard(value);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${value}`, '_blank');
        break;
      default:
        break;
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'phone':
        return <MdOutlinePhone className="w-5 h-5" />;
      case 'email':
        return <LuMailCheck className="w-5 h-5" />;
      case 'whatsapp':
        return <BsWhatsapp className="w-5 h-5" />;
      default:
        return null;
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeModal}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-1/3 p-4 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
       <div className="h-full bg-white rounded-2xl shadow-xl p-6 overflow-y-auto">
  {/* Close Button */}
  <button
    onClick={closeModal}
    className="mb-6 bg-linear-to-b from-blue-400 to-blue-600
    h-10 w-10 rounded-full text-white flex items-center justify-center
    shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
    hover:from-blue-500 hover:to-blue-700 transition cursor-pointer"
  >
    <IoMdClose />
  </button>

  {/* Header */}
  <h2 className="text-xl font-semibold mb-2">
    {contactData.title}
  </h2>
  <p className="text-sm text-gray-500 mb-8">
    {contactData.description}
  </p>

  {/* Contact Items */}
  <div className="space-y-6 mb-10">
    {contactData.contactItems.map((item, index) => (
      <div
        key={index}
        className="flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center bg-linear-to-b from-blue-400 to-blue-600
    h-10 w-10 rounded-full text-white flex items-center justify-center
    shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
    hover:from-blue-500 hover:to-blue-700 transition cursor-pointer">
            {getIcon(item.type)}
          </div>
          <div>
            <p className="text-xs text-gray-500">{item.label}</p>
            <p className="text-sm font-medium">{item.value}</p>
          </div>
        </div>

        <button
          onClick={() => handleContactAction(item.type, item.value)}
          className={`h-9 px-4 rounded-full text-sm font-medium transition cursor-pointer ${
            copiedEmail && item.type === 'email'
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {copiedEmail && item.type === 'email'
            ? 'Copied!'
            : item.buttonText}
        </button>
      </div>
    ))}
  </div>

  {/* Divider */}
  <div className="h-px w-full bg-gray-200 mb-8" />

  {/* Contact Form */}
  <form className="space-y-4 pb-6">
    <h3 className="text-lg font-semibold mb-2">
      Send a Message
    </h3>

    <input
      type="text"
      placeholder="Your Name"
      className="w-full  h-12 text-sm px-4 bg-gray-100 rounded-md focus:outline-none focus:border-blue-500"
    />

    <input
      type="email"
      placeholder="Your Email"
      className="w-full h-12 text-sm px-4 bg-gray-100 rounded-md focus:outline-none focus:border-blue-500"
    />

    <textarea
      placeholder="Your Message"
      rows={4}
      className="w-full px-4 text-sm py-3 bg-gray-100 rounded-md resize-none focus:outline-none focus:border-blue-500"
    />

    <button
      type="submit"
      className="h-12  w-full text-sm bg-black text-white rounded-md hover:bg-gray-900 transition mb-6 bg-linear-to-b from-blue-400 to-blue-600
      flex items-center justify-center
    shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
    hover:from-blue-500 hover:to-blue-700 cursor-pointer"
    >
      Submit
    </button>
  </form>
</div>

      </div>
    </>
  );
}
