const fs = require('fs');

// Read faculty.json
const facultyData = JSON.parse(fs.readFileSync('./public/data/faculty.json', 'utf8'));

// Function to generate slug from name
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/dr\s+/g, '')
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

// Add slug to each faculty member if not already present
facultyData.forEach(member => {
  if (!member.slug) {
    member.slug = generateSlug(member.name);
  }
});

// Write back to file
fs.writeFileSync('./public/data/faculty.json', JSON.stringify(facultyData, null, 2));
console.log('✅ Added slugs to all faculty members');
