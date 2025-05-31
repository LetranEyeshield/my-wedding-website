"use client"; // This is required in Next.js app router for client-side interactivity

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showRSVP, setShowRSVP] = useState(false);

  return (
    <main className="max-w-7xl mx-auto p-6 font-sans">
      {/* Header */}
      <header
        id="header"
        className="text-center mx-auto flex flex-col justify-center fixed center-fixed"
      >
        <h1 className="text-8xl font-bold">Rolan and Kate's Wedding</h1>
        <p className="text-xl text-gray-600">Join us on September 15, 2025</p>
      </header>

      {/* Banner */}
      <section id="banner" className="mx-auto flex justify-center">
        <img
          className="w-6xl mx-auto"
          src="/images/banner.jpg"
          alt="Rolan and Kate's Photo"
        />
      </section>

      {/* Our Story */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p>
          We met in college, and from that moment on, our journey has been full
          of love, laughter, and adventure. We’re excited to share our special
          day with you!
        </p>
      </section>

      {/* Event Details */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Event Details</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Date:</strong> July 15, 2025
          </li>
          <li>
            <strong>Time:</strong> 4:00 PM
          </li>
          <li>
            <strong>Venue:</strong> Sunny Gardens, 123 Wedding Lane
          </li>
        </ul>
      </section>

      {/* Gallery */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=60",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=60",
            "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=400&q=60",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Wedding photo ${i + 1}`}
              className="w-full h-32 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* RSVP Button */}
      <div className="text-center mb-12">
        <button
          onClick={() => setShowRSVP(true)}
          className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition"
        >
          RSVP Now
        </button>
      </div>

      {/* RSVP Modal */}
      {showRSVP && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          aria-modal="true"
          role="dialog"
          aria-labelledby="rsvp-title"
        >
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <h3 id="rsvp-title" className="text-2xl font-bold mb-4">
              RSVP
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for your RSVP!");
                setShowRSVP(false);
              }}
            >
              <label className="block mb-3">
                Name:
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>
              <label className="block mb-3">
                Will you attend?
                <select
                  name="attending"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes, I'll be there</option>
                  <option value="no">Sorry, can't make it</option>
                </select>
              </label>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowRSVP(false)}
                  className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
