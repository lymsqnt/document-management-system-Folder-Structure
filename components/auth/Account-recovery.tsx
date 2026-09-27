"use client";

import { LockKeyhole, Mail, Send } from "lucide-react";

export default function AccountRecovery() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/school-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/10" />

      <img
        src="/login-layout.png"
        alt=""
        className="pointer-events-none absolute inset-y-0 left-0 z-10 h-full w-auto object-contain object-left"
      />

      <img
        src="/Qeci_Logo.png"
        alt="Quezonian Educational College Inc. Logo"
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-1/2
          z-30
          h-80
          w-80
          -translate-y-1/2
          object-contain
          drop-shadow-xl
        "
      />

      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-5 py-8">

        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            QUEZONIAN EDUCATIONAL COLLEGE, INC
          </h1>

          <p className="text-sm font-medium text-black">
            Document Management Systems(DMS)
          </p>
        </div>

        <section className="w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl">

          <div className="h-3 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600" />

          <div className="px-7 py-8 sm:px-10 sm:py-9 lg:px-14">

            <div className="text-center">

              <div className="flex items-center justify-center gap-4">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <LockKeyhole
                    size={48}
                    strokeWidth={1.8}
                    className="text-blue-600"
                  />
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Account Recovery
                </h2>

              </div>

              <p className="mt-2 text-sm leading-tight text-gray-700">
                Enter your registered email address and we'll
                <br className="hidden sm:block" />
                send you instructions to reset your password.
              </p>

            </div>
            <div className="my-6 border-t border-gray-300" />
            <div>
              <label
                htmlFor="email"
                className="text-lg font-semibold text-black"
              >
                Email Address
              </label>

              <label
                htmlFor="email"
                className="input mt-2 flex h-12 w-full items-center gap-3 rounded-md border border-gray-400 bg-white text-gray-700"
              >
                <Mail
                  size={22}
                  strokeWidth={1.5}
                  className="shrink-0"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your registered email"
                  className="grow bg-transparent text-sm text-black outline-none placeholder:text-gray-400"
                />
              </label>
            </div>

            <div className="mt-7">
              <h3 className="text-lg font-semibold text-black">
                Security Verification
              </h3>

              <p className="mt-1 text-sm text-gray-700">
                Please Complete the verification to continue
              </p>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-md border border-gray-300 bg-gray-50 px-4 py-4">
              <input
                id="verification"
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />

              <label
                htmlFor="verification"
                className="cursor-pointer text-sm text-gray-700"
              >
                I&apos;m not a robot
              </label>
            </div>

            <button
              type="button"
              className="btn mt-7 h-12 w-full rounded-full border-0 bg-gradient-to-r from-blue-900 to-blue-600 text-base font-semibold text-white shadow-md hover:from-blue-950 hover:to-blue-700"
            >
              <Send
                size={21}
                strokeWidth={1.8}
              />

              Send recovery link
            </button>

            <div className="mt-4 border-t border-gray-300 pt-3 text-center">
              <span className="text-sm text-gray-500">
                Remember your password?
              </span>

              <button
                type="button"
                className="ml-3 text-sm font-semibold text-blue-800 hover:text-blue-600 hover:underline"
              >
                Login Here
              </button>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}