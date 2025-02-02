import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../zustand/useUserStore';

const SetupOrg = () => {
    const setSetUp = useUserStore(state => state.setSetUp);
    
  // State for company details
  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    website: '',
    description: '',
  });

  // State for website scraping progress
  const [scrapingProgress, setScrapingProgress] = useState([
    { url: 'https://example.com/page1', status: 'Detected' },
    { url: 'https://example.com/page2', status: 'Scraped' },
    { url: 'https://example.com/page3', status: 'Pending' },
  ]);

  // State for selected webpage data chunks
  const [selectedWebpage, setSelectedWebpage] = useState(null);

  const navigate = useNavigate();

  // Dummy data for scraped chunks
  const scrapedData = {
    'https://example.com/page1': ['Chunk 1', 'Chunk 2'],
    'https://example.com/page2': [],
  };

  // Handle input change
  const handleChange = (e) => {
    setCompanyDetails({
      ...companyDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle website URL input to fetch meta description (bonus)
  const fetchMetaDescription = async () => {
    if (companyDetails.website) {
      try {
        //fetch meta description
        /*
        const response = await fetch(`https://api.metascraper.io/?url=${companyDetails.website}`);
        const data = await response.json();
        */
       const data = null
        setCompanyDetails({
          ...companyDetails,
          description: data?.description || 'No description found.',
        });
      } catch (error) {
        console.error('Error fetching meta description:', error);
      }
    }
  };


  // Handle webpage click to show scraped chunks
  const handleWebpageClick = (url) => {
    setSelectedWebpage(url);
  };

  const handleNext = () => {
    setSetUp(true);
    navigate('/');
  }

  return (
    <div className='min-h-screen bg-gray-50 flex justify-center items-center'>
      <div className='w-full md:w-[60%] lg:w-[50%] border border-gray-200 bg-white flex flex-col items-center py-8 mx-4'>
        <div className='w-[90%] md:w-[80%] my-8 space-y-6'>
          {/* Step 1: Company Details */}
          <h2 className='text-2xl font-medium text-gray-800'>Setup Organisation</h2>
          <form className='space-y-6'>
            <div className='space-y-4'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="name" className='text-sm font-medium text-gray-700'>
                  Company Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  className='w-full px-3 py-2 border border-gray-300 
                           hover:border-gray-400 focus:outline-none focus:border-black'
                  placeholder='Enter company name'
                  value={companyDetails.name}
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="website" className='text-sm font-medium text-gray-700'>
                  Company Website URL
                </label>
                <div className='relative'>
                  <input
                    onChange={handleChange}
                    type="url"
                    id="website"
                    name="website"
                    className='w-full px-3 py-2 border border-gray-300 
                             hover:border-gray-400 focus:outline-none focus:border-black'
                    placeholder='Enter website URL'
                    value={companyDetails.website}
                  />
                  <button
                    type="button"
                    onClick={fetchMetaDescription}
                    className='absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-blue-500 hover:text-blue-700'
                  >
                    Fetch Description
                  </button>
                </div>
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="description" className='text-sm font-medium text-gray-700'>
                  Company Description
                </label>
                <textarea
                  onChange={handleChange}
                  id="description"
                  name="description"
                  className='w-full px-3 py-2 border border-gray-300 
                           hover:border-gray-400 focus:outline-none focus:border-black'
                  placeholder='Enter company description'
                  value={companyDetails.description}
                  rows={4}
                />
              </div>
            </div>
          </form>

          {/* Step 2: Website Scraping Progress */}
          <h2 className='text-2xl font-medium text-gray-800'>Scraping Progress</h2>
          <div className='space-y-4'>
            {scrapingProgress.map((page, index) => (
              <div
                key={index}
                className='p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50'
                onClick={() => handleWebpageClick(page.url)}
              >
                <div className='flex justify-between items-center'>
                  <span className='text-sm text-gray-700'>{page.url}</span>
                  <span
                    className={`text-sm font-medium ${
                      page.status === 'Scraped'
                        ? 'text-green-600'
                        : 'text-yellow-600'
                    }`}
                  >
                    {page.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Step 3: Scraped Data Chunks */}
          {selectedWebpage && (
            <div className='space-y-4'>
              <h3 className='text-xl font-medium text-gray-800'>Scraped Data from {selectedWebpage}</h3>
              {scrapedData[selectedWebpage]?.length > 0 ? (
                scrapedData[selectedWebpage].map((chunk, index) => (
                  <div key={index} className='p-4 border border-gray-300 rounded-lg'>
                    <p className='text-sm text-gray-700'>{chunk}</p>
                  </div>
                ))
              ) : (
                <p className='text-sm text-gray-500'>No data scraped yet.</p>
              )}
            </div>
          )}

          {/* Step 4: Proceed to Next Step */}
          <div className='flex justify-end'>
            <button
                onClick={handleNext}
              type="button"
              className='px-6 py-2 bg-black hover:bg-gray-800 text-white 
                       font-medium transition-colors cursor-pointer'
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupOrg;