import Image from 'next/image';
import Link from 'next/link';
import { sanityClient } from '@/sanityClient';
import { useState, useEffect } from 'react';
import { logo } from './img';

type ProfileData = {
  _id: string;
  name: string;
  img: string;
  location: { country: string };
  age: number;
  price: string;
  languages: string;
  services: string;
  isVerified: boolean;
  isVIP: boolean;
  sex: string;
  eyes: string;
  hair: string;
  bodyHair: string;
  weight: string;
  height: string;
  ethnicity: string;
};

async function getProfiles() {
  const query = `*[_type == "profile"]{
    _id,
    name,
    "img": img.asset->url,
    location {
      country
    },
    age,
    price,
    languages,
    services,
    isVerified,
    isVIP,
    eyes,
    hair,
    bodyHair,
    weight,
    height,
    ethnicity
  }`;

  return await sanityClient.fetch(query);
}

export default async function HomePage() {
  const profiles: ProfileData[] = await getProfiles();

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
          <Image width={70} height={70} src={logo} alt="Logo" className="mr-4" style={{ width: 70 }} />
          <nav className="hidden md:flex space-x-4">
              <Link href="#">VIP Escorts</Link>
              <Link href="#">Girls</Link>
              <Link href="#">Pornstars</Link>
              <Link href="#">Agencies</Link>
              <Link href="#">FAQ</Link>
            </nav>
          </div>
          {/* <div className="flex items-center space-x-3">
            <button className="bg-red-500 px-4 py-2 rounded-lg">Login</button>
            <button className="bg-gray-700 px-4 py-2 rounded-lg">Register</button>
          </div> */}
        </div>
      </header>

      <div className="max-w-7xl mx-auto mt-8">
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4" id="profile-gallery">
          {profiles.map((profile) => (
            <Link 
              key={profile._id} 
              href={`/profile/${profile._id}?name=${profile.name}&img=${profile.img}&location=${profile.location.country}&age=${profile.age}&price=${profile.price}&languages=${profile.languages}&services=${profile.services}&sex=${profile.sex}&eyes=${profile.eyes}&hair=${profile.hair}&bodyHair=${profile.bodyHair}&weight=${profile.weight}&height=${profile.height}&ethnicity=${profile.ethnicity}`} 
              className="profile-card bg-white p-4 rounded-lg shadow-lg relative"
            >
              <Image 
                src={profile.img} 
                alt={profile.name} 
                width={300} 
                height={300} 
                className="rounded-lg mb-4" 
              />
              {profile.isVerified && (
                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Verified</div>
              )}
              {profile.isVIP && (
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">VIP</div>
              )}
              <h4 className="text-gray-800 font-semibold mb-2">{profile.name}</h4>
              <p className="text-sm text-gray-600">{profile.location.country}</p>
              <p className="text-sm text-gray-600">Age: {profile.age}</p>
              <p className="text-sm text-gray-600">Price: {profile.price}</p>
            </Link>
          ))}
        </main>
      </div>

      <footer className="bg-gray-800 text-white p-4 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 EuroGirlsEscort. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
