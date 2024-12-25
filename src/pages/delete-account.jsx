'use client'

import { Container } from '@/components/Container'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function DeleteAccountPage() {
  const router = useRouter()
  const { secret_key } = router.query
  console.log(secret_key)

  if (!secret_key) {
    return 'error'
  }

  return (
    <Container>
      <DeleteAccountForm />
    </Container>
  )
}

const DeleteAccountForm = () => {
  const [reason, setReason] = useState('')
  const [confirmation, setConfirmation] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (reason) {
      // Submit the form to the server or API endpoint
      console.log('Reason for deletion:', reason)
    } else {
      // Submit the form without the reason
      console.log('No reason provided')
    }
    // Reset the form
    setReason('')
    setConfirmation(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Delete Your Account
      </h1>
      <p className="mb-4 text-center text-lg">
        We&apos;re sorry to see you go. Please let us know why you&apos;d like
        to delete your account. This is optional.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="reason"
            className="block py-3 text-sm font-semibold text-gray-900"
          >
            Why do you want to delete your account? (Optional)
          </label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows="4"
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Please share your reason here (optional)"
          ></textarea>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="confirm-deletion"
            className="mr-2 text-black"
            required
          />
          <label htmlFor="confirm-deletion" className="text-sm text-gray-700">
            I confirm that I want to delete my account.
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-black py-2 px-4 text-white hover:bg-zinc-700 focus:outline-none focus:ring-2"
        >
          Delete My Account
        </button>
      </form>
      {/* <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="block py-3 text-sm font-semibold text-gray-900">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="rounded-lg border-gray-200 text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] focus:ring-offset-0 sm:text-sm"
          placeholder="Enter name"
          value={inputs.name || ''}
          onChange={handleChange}
        />
        <label className="block py-3 text-sm font-semibold text-gray-900">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          className="rounded-lg border-gray-200 text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] focus:ring-offset-0 sm:text-sm"
          placeholder="Enter email"
          value={inputs.email || ''}
          onChange={handleChange}
        />
        <label className="block py-3 text-sm font-semibold text-gray-900">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          className="rounded-lg border-gray-200 text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] focus:ring-offset-0 sm:text-sm"
          placeholder="Enter subject"
          value={inputs.subject || ''}
          onChange={handleChange}
        />
        <label className="block py-3 text-sm font-semibold text-gray-900">
          Message
        </label>

        <textarea
          value={inputs.message || ''}
          name="message"
          placeholder="Enter your message here"
          className="mb-3 rounded-lg border-gray-200 text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] focus:ring-offset-0 sm:text-sm"
          onChange={handleChange}
        />
        <input
          className="hover:border-gray my-5 cursor-pointer rounded-lg border-2 bg-black py-3 font-bold text-white duration-300 hover:bg-gray-900 "
          value="Submit"
          type="submit"
        />
      </form> */}

      {confirmation && (
        <div className="mt-6 text-center text-green-500">
          <p>
            Thank you for your feedback! Your account deletion request is being
            processed.
          </p>
        </div>
      )}
    </div>
  )
}
