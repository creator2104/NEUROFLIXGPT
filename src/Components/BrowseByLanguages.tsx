import { useState } from 'react';

const BrowseByLanguages = () => {
  const languages = ['English', 'Hindi', 'Spanish', 'French', 'German', 'Japanese', 'Indonesian','Malay','Turkish','Korean','Italian','Mandarin','Portuguese','Cantonese','Dutch','Tamil','Arabic','Marathi','Thai','Telugu','Polish','Filipino','Swedish','Malayalam','Flemish'];
  const Preference = ['Original Language', 'Dubbing','Subtitles']
  const [selectedLang, setSelectedLang] = useState('');
  const [pref,setpref ] = useState('');

  return (
    <div className="min-h-screen bg-black text-white pt-28 pl-16">
      {/* All in one horizontal row */}
      <div className="flex items-center text-lg space-x-96">
        <h1 className="text-4xl">Browse by Languages</h1>
        <div className='flex items-center'>
          <span className='pt-3 text-lg'>Select your Preference </span>

          {/* Dropdown Trigger + Content */}
          <div className="relative group pt-3 ml-4">
            {/* Trigger Box */}
            <div className="bg-black w-fit border border-white px-3 py-1 rounded cursor-pointer group-hover:bg-gray-700">
              {selectedLang || 'Choose Lang ▾'}
            </div>

            {/* Dropdown Content */}
            <div className="absolute mt-1 w-48 rounded hidden group-hover:block z-10 max-h-60 overflow-y-auto">
              {languages.map((lang) => (
                <div
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`cursor-pointer hover:bg-gray-700 px-2 py-1 ${
                    selectedLang === lang ? 'bg-black' : ''
                  }`}
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>

          {/* Second Dropdown for Preference */}
          <div className="relative group pt-3 ml-4">
            {/* Trigger Box */}
            <div className="bg-black w-fit border border-white px-3 py-1 rounded cursor-pointer group-hover:bg-gray-700">
              {pref || 'Original Language▾'}
            </div>

            {/* Dropdown Content */}
            <div className="absolute mt-1 w-48 rounded hidden group-hover:block z-10 max-h-60 overflow-y-auto">
              {Preference.map((preff) => (
                <div
                  key={preff}
                  onClick={() => setpref(preff)}
                  className={`cursor-pointer hover:bg-gray-700 px-2 py-1 ${
                    pref === preff ? 'bg-black' : ''
                  }`}
                >
                  {preff}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByLanguages;
