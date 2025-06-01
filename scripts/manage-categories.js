#!/usr/bin/env node

// Category management script
// Usage: node scripts/manage-categories.js [action] [options]

const fs = require('fs');
const path = require('path');

const CATEGORIES_FILE = path.join(__dirname, '../app/lib/categories.json');

// Load categories
function loadCategories() {
  try {
    const data = fs.readFileSync(CATEGORIES_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading categories:', error.message);
    process.exit(1);
  }
}

// Save categories
function saveCategories(data) {
  try {
    fs.writeFileSync(CATEGORIES_FILE, JSON.stringify(data, null, 2), 'utf8');
    console.log('✅ Categories saved successfully');
  } catch (error) {
    console.error('Error saving categories:', error.message);
    process.exit(1);
  }
}

// List all categories
function listCategories() {
  const data = loadCategories();
  console.log('\n📂 Current Categories:');
  console.log('═══════════════════════════════════════════');
  
  data.categories.forEach((cat, index) => {
    console.log(`${index + 1}. ${cat.name} (${cat.slug})`);
    console.log(`   Description: ${cat.description}`);
    console.log(`   Color: ${cat.color} | Icon: ${cat.icon}`);
    console.log('───────────────────────────────────────────');
  });
}

// Add new category
function addCategory(name, description, color = 'blue', icon = 'FaFolder') {
  const data = loadCategories();
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  
  // Check if category already exists
  if (data.categories.some(cat => cat.slug === slug)) {
    console.error(`❌ Category with slug '${slug}' already exists`);
    process.exit(1);
  }
  
  const newCategory = {
    slug,
    name,
    description,
    color,
    icon
  };
  
  data.categories.push(newCategory);
  saveCategories(data);
  console.log(`✅ Added category: ${name}`);
}

// Remove category
function removeCategory(slug) {
  const data = loadCategories();
  const initialLength = data.categories.length;
  
  data.categories = data.categories.filter(cat => cat.slug !== slug);
  
  if (data.categories.length === initialLength) {
    console.error(`❌ Category with slug '${slug}' not found`);
    process.exit(1);
  }
  
  saveCategories(data);
  console.log(`✅ Removed category: ${slug}`);
}

// Main CLI handler
function main() {
  const args = process.argv.slice(2);
  const action = args[0];
  
  switch (action) {
    case 'list':
    case 'ls':
      listCategories();
      break;
      
    case 'add':
      if (args.length < 3) {
        console.error('Usage: node manage-categories.js add "Category Name" "Description" [color] [icon]');
        process.exit(1);
      }
      addCategory(args[1], args[2], args[3], args[4]);
      break;
      
    case 'remove':
    case 'rm':
      if (args.length < 2) {
        console.error('Usage: node manage-categories.js remove <slug>');
        process.exit(1);
      }
      removeCategory(args[1]);
      break;
      
    default:
      console.log(`
📂 Category Management Tool

Usage:
  node manage-categories.js list                     - List all categories
  node manage-categories.js add "Name" "Desc" [color] [icon] - Add category  
  node manage-categories.js remove <slug>            - Remove category

Examples:
  node manage-categories.js list
  node manage-categories.js add "AI Tools" "Articles about AI productivity tools" "purple" "FaRobot"
  node manage-categories.js remove ai-tools
      `);
  }
}

main();
