"use client"; // Add this line

import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Define the type for the profile data
interface ProfileData {
  name: string;
  img: string;
  location: string;
  age: string;
  price: string;
  languages: string;
  services: string;
  sex: string;
  eyes: string;
  hair: string;
  bodyHair: string;
  weight: string;
  height: string;
  ethnicity: string;
}

interface ProfileProps {
  profileData?: ProfileData;
}

export default function Profile({ profileData }: ProfileProps) {
  const [profile, setProfile] = useState<ProfileData>({
    name: profileData?.name || 'Betul, Indépendante',
    img: profileData?.img || '/path-to-default-image.jpg',
    location: profileData?.location || 'Istanbul, Turkey',
    age: profileData?.age || '24',
    price: profileData?.price || '$500',
    languages: profileData?.languages || 'Turkish, English',
    services: profileData?.services || 'Escorting, Photography, Hair Styling',
    // New fields initialized with default values or from profileData
    sex: profileData?.sex || 'Female',
    eyes: profileData?.eyes || 'Brown',
    hair: profileData?.hair || 'Brown, Medium Length',
    bodyHair: profileData?.bodyHair || 'Natural',
    weight: profileData?.weight || '68 kg / 150 lbs',
    height: profileData?.height || '177 cm / 5\'7"',
    ethnicity: profileData?.ethnicity || 'Arab',
  });

  useEffect(() => {
    // Use URLSearchParams to get query parameters
    const params = new URLSearchParams(window.location.search);
    setProfile({
      name: params.get('name') || 'Betul, Indépendante',
      img: params.get('img') || '/path-to-default-image.jpg',
      location: params.get('location') || 'Istanbul, Turkey',
      age: params.get('age') || '24',
      price: params.get('price') || '$500',
      languages: params.get('languages') || 'Turkish, English',
      services: params.get('services') || 'Escorting, Photography, Hair Styling',
      sex: params.get('sex') || 'Female',
      eyes: params.get('eyes') || 'Brown',
      hair: params.get('hair') || 'Brown, Medium Length',
      bodyHair: params.get('bodyHair') || 'Natural',
      weight: params.get('weight') || '68 kg / 150 lbs',
      height: params.get('height') || '177 cm / 5\'7"',
      ethnicity: params.get('ethnicity') || 'Arab',
    });
  }, []);

  return (
    <>
      <Head>
        <title>Profile Page Prototype</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <Link href={'/'} className="text-red-500 font-semibold hover:underline">← PREVIOUS</Link>
            <div className="bg-red-500 text-white text-sm font-semibold py-1 px-3 rounded-full uppercase">Submit</div>
          </div>

          {/* Profile Information Section */}
          <div className="flex flex-col md:flex-row">
            {/* Left Side (Profile Image & Media) */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                {profile.img ? (
                  <img src={profile.img} alt="Profile" className="rounded-lg w-full mb-4" />
                ) : (
                  <img src="/path-to-default-image.jpg" alt="Default Profile" className="rounded-lg w-full mb-4" />
                )}
                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Verified</div>
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">VIP</div>
                <div className="absolute bottom-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Independent</div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <img src="./img/1/photo_2_2024-10-20_03-19-32.jpg" alt="Gallery Image" className="rounded-md cursor-pointer" />
              </div>
            </div>

            {/* Right Side (Details) */}
            <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
              <h2 className="text-2xl font-semibold text-gray-800">{profile.name}</h2>
              <p className="text-gray-500 text-sm">Age: {profile.age}</p>
              <p className="text-gray-500 text-sm">Location: {profile.location}</p>
              <p className="text-gray-500 text-sm">Profile updated on: <span className="font-medium">20 Oct 2024</span></p>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p><strong>Sex:</strong> {profile.sex}</p>
                  <p><strong>Eyes:</strong> {profile.eyes}</p>
                  <p><strong>Hair:</strong> {profile.hair}</p>
                  <p><strong>Body Hair:</strong> {profile.bodyHair}</p>
                </div>
                <div>
                  <p><strong>Weight:</strong> {profile.weight}</p>
                  <p><strong>Height:</strong> {profile.height}</p>
                  <p><strong>Ethnicity:</strong> {profile.ethnicity}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p><strong>Tattoo:</strong> Yes</p>
                  <p><strong>Languages:</strong> {profile.languages}</p>
                </div>
                <div>
                  <p><strong>Services:</strong> {profile.services}</p>
                  <p><strong>Price:</strong> Starting from {profile.price}</p>
                </div>
              </div>

              <div className="flex flex-col mt-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Contact</h3>
                <div className="flex items-center mb-2">
                  <strong>Phone:</strong>
                  <button className="ml-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">Show Number</button>
                </div>
                <p><strong>Country:</strong> Turkey</p>
                <p><strong>City:</strong> Istanbul</p>
                <button className="mt-4 bg-red-500 text-white py-2 rounded-lg text-center font-semibold">Contact This Escort</button>
              </div>
            </div>
          </div>

          {/* Warning Section */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-gray-300 text-sm">
            <p className="text-red-500 font-bold">Warning:</p>
            <p className="text-gray-600">Beware of scams and false information. Verify details and do not share personal information carelessly.</p>
          </div>
        </div>
      </div>
    </>
  );
}
