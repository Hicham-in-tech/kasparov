export default {
    name: 'avatar',
    type: 'document',
    title: 'Profile',
    fields: [
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'img', type: 'image', title: 'Image', options: { hotspot: true } },
      {
        name: 'location',
        type: 'object',
        title: 'Location',
        fields: [
          { name: 'country', type: 'string', title: 'Country' },
          { name: 'city', type: 'string', title: 'City' },
        ],
      },
      { name: 'age', type: 'number', title: 'Age' },
      { name: 'price', type: 'string', title: 'Price' },
      { name: 'languages', type: 'string', title: 'Languages' },
      { name: 'services', type: 'string', title: 'Services' },
      { name: 'isVerified', type: 'boolean', title: 'Verified' },
      { name: 'isVIP', type: 'boolean', title: 'VIP' },
      { name: 'eyes', type: 'string', title: 'Eye Color' },
      { name: 'hair', type: 'string', title: 'Hair Description' },
      { name: 'bodyHair', type: 'string', title: 'Body Hair' },
      { name: 'weight', type: 'string', title: 'Weight' },
      { name: 'height', type: 'string', title: 'Height' },
      { name: 'ethnicity', type: 'string', title: 'Ethnicity' },
      {
        name: 'gallery',
        type: 'array',
        title: 'Gallery',
        of: [{ type: 'image', options: { hotspot: true } }],
      },
    ],
  };
  