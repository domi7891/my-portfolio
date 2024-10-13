import { useState } from 'react'
import { Element } from 'react-scroll'

import Spacer from '@/components/Spacer'

function ContactScreen() {
  const contactEmail = 'dominik@nossal.at'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const submitForm = (e) => {
    e.preventDefault()

    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    )

    window.location.reload()
  }

  return (
    <Element id="contact" className="relative">
      <Spacer
        bgColor="bg-transparent"
        spacerColor="text-gray_variant-dark"
        flip={true}
      />
      <section className="overflow-x-hidden bg-gray_variant-dark text-white w-full mx-auto pt-20 pb-24">
        <h1 className="text-5xl pb-10 text-center">Contact</h1>
        <div className="mx-10 md:mx-auto md:w-2/3 lg:w-3/5 xl:w-2/3 gap-x-10">
          <form
            className="w-full grid grid-cols-2 grid-rows-1 pt-10 gap-y-6 gap-x-10 mx-auto"
            id="contactForm"
            onSubmit={submitForm}
          >
            <div className="input-container w-full flex flex-col col-span-2 md:col-span-1">
              <label
                htmlFor="name"
                className="input-label text-gray_variant-light text-lg w-full mb-2 ml-2"
              >
                Name <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                className="input-field"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-container w-full flex flex-col col-span-2 md:col-span-1">
              <label
                htmlFor="email"
                className="input-label text-gray_variant-light text-lg w-full mb-2 ml-2"
              >
                E-Mail <span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                className="input-field"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container w-full flex flex-col col-span-2">
              <label
                htmlFor="subject"
                className="input-label text-gray_variant-light text-lg w-full mb-2 ml-2"
              >
                Subject
              </label>
              <input
                type="text"
                className="input-field"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="input-container w-full flex flex-col col-span-2">
              <label
                htmlFor="message"
                className="input-label text-gray_variant-light text-lg w-full mb-2 ml-2"
              >
                Message <span className="text-orange-500">*</span>
              </label>
              <textarea
                type="text"
                className="input-field min-h-[150px] max-h-[300px]"
                id="message"
                name="message"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="col-span-2 border-[1px] border-gray_variant w-2/5 rounded-lg mx-auto py-2 cursor-pointer transform transition hover:bg-gray_variant active:scale-95 focus:outline-none"
            >
              Send Mail
            </button>
          </form>
        </div>
      </section>
    </Element>
  )
}

export default ContactScreen
