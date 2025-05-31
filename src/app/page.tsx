"use client"; // This is required in Next.js app router for client-side interactivity

import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import "yet-another-react-lightbox/styles.css";

export default function Home() {
  const [showRSVP, setShowRSVP] = useState(false);

  function RSVPForm({ onClose }: { onClose: () => void }) {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      address: "",
      attending: "",
      guests: "",
      message: "",
    });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        //alert("RSVP sent! Thank you.");
        toast.success("RSVP sent successfully!");

        onClose();
      } else {
        //alert("Oops, something went wrong.");
        toast.error("Oops! Failed to send RSVP, Try Again Later!");
      }
    };

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <form
          onClick={(e) => e.stopPropagation()} // prevent closing modal when clicking inside form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-6 max-w-md w-full"
        >
          <h2 className="text-xl font-semibold mb-4">RSVP Form</h2>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full mb-2 p-2 border"
          />
          <label htmlFor="phone"></label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full mb-2 p-2 border"
            required
          />
          <label htmlFor="address"></label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="w-full mb-2 p-2 border"
          />
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Will you be attending?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="attending"
                  value="Yes"
                  checked={formData.attending === "Yes"}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="attending"
                  value="No"
                  checked={formData.attending === "No"}
                  onChange={handleChange}
                />
                No
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="attending"
                  value="Maybe"
                  checked={formData.attending === "Maybe"}
                  onChange={handleChange}
                />
                Maybe
              </label>
            </div>
          </div>
          <label htmlFor="guest"></label>
          <input
            type="number"
            name="guests"
            id="guest"
            // value={formData.guests}
            onChange={handleChange}
            placeholder="How many are you bringing?"
            value={formData.attending === "No" ? "0" : formData.guests}
            required
            min={1}
            className="w-full mb-2 p-2 border"
          />
          <label htmlFor="message"></label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message for the couple"
            required
            className="w-full mb-2 p-2 border"
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send RSVP
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto pl-6 pr-6 font-sans">
      {/* Header */}
      <header
        id="header"
        className="text-center mx-auto pt-15 pb-13 flex flex-col justify-center"
      >
        <h1 className="text-8xl font-bold shadow">Rolan and Kate's Wedding</h1>
        <p className="great-vibes text-4xl pt-8 font-bold shadow">
          Join us on September 15, 2025
        </p>
      </header>

      {/* Banner */}
      <section id="banner" className="mx-auto flex justify-center">
        <img
          className="w-screen mx-auto"
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
          className="bg-blue-300 text-black px-6 py-3 rounded-full text-lg hover:bg-blue-500 transition"
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
            <button
              onClick={() => setShowRSVP(true)}
              className="fixed bottom-8 right-8 bg-blue-300 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600"
            >
              RSVP
            </button>

            {showRSVP && <RSVPForm onClose={() => setShowRSVP(false)} />}
          </div>
        </div>
      )}
    </main>
  );
}
