"use client";
import React from 'react';
import './W.css';


const PostCard = ({ title, date, imageSrc, description }) => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <img src={imageSrc} alt="" className="object-cover w-full h-64" />
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            {title}
          </a>
          <span className="text-gray-600">— {date}</span>
        </p>
        <a
          href="/"
          aria-label={title}
          title={title}
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          {title}
        </a>
        <p className="mb-2 text-gray-700">{description}</p>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
         <div class="back">
    <div class="button_base b03_skewed_slide_in">
        <div>Register Now!</div>
        <div></div>
        <div>Register Now!</div>
    </div>
</div>
        </a>
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <PostCard
          title="Visit the East"
          date="28 Dec 2020"
          imageSrc="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          description="Sed ut perspiciatis unde omnis iste natus error sit..."
        />
        <PostCard
          title="Visit the East"
          date="28 Dec 2020"
          imageSrc="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          description="Sed ut perspiciatis unde omnis iste natus error sit..."
        />
        <PostCard
          title="Visit the East"
          date="28 Dec 2020"
          imageSrc="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          description="Sed ut perspiciatis unde omnis iste natus error sit..."
        />
        <PostCard
          title="Visit the East"
          date="28 Dec 2020"
          imageSrc="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          description="Sed ut perspiciatis unde omnis iste natus error sit..."
        />
        <PostCard
          title="Visit the East"
          date="28 Dec 2020"
          imageSrc="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          description="Sed ut perspiciatis unde omnis iste natus error sit..."
        />
        <PostCard
          title="Visit the East"
          date="28 Dec 2020"
          imageSrc="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          description="Sed ut perspiciatis unde omnis iste natus error sit..."
        />
       
      </div>
    </div>
  );
}
