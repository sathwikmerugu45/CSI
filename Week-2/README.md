# Task Flow - React Todo List Application

A modern, feature-rich todo list application built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Clean, modern UI with smooth animations
- 📱 Fully responsive design
- ✅ Task creation, completion, and deletion
- 🔍 Filter tasks by status (All, Active, Completed)
- 📊 Sort tasks by date or alphabetically
- 💾 Automatic data persistence using localStorage
- ⚡ Fast and lightweight
- 🎨 Beautiful gradient backgrounds and transitions

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Add a new task using the input field at the top
- Click the checkbox to mark a task as complete
- Click the trash icon to delete a task (requires confirmation)
- Use the settings button to access filtering and sorting options
- Tasks are automatically saved to localStorage

## Input Validation

The task input field includes the following validation:
- Cannot be empty
- Minimum 3 characters
- Maximum 100 characters
- Trims whitespace automatically

## Testing Guide

### Manual Testing Checklist

1. Task Creation
   - [ ] Add task with valid input
   - [ ] Try adding empty task (should show error)
   - [ ] Try adding task < 3 characters (should show error)
   - [ ] Try adding task > 100 characters (should prevent input)

2. Task Completion
   - [ ] Toggle task completion
   - [ ] Verify visual feedback (strikethrough, checkbox)
   - [ ] Check persistence after page reload

3. Task Deletion
   - [ ] Click delete button once (should show confirmation)
   - [ ] Click again to confirm deletion
   - [ ] Verify task is removed
   - [ ] Check persistence after page reload

4. Filters
   - [ ] Test "All" filter shows all tasks
   - [ ] Test "Active" filter shows only incomplete tasks
   - [ ] Test "Completed" filter shows only completed tasks

5. Sorting
   - [ ] Test "Newest" sort order
   - [ ] Test "Oldest" sort order
   - [ ] Test "A-Z" alphabetical sorting

6. Data Persistence
   - [ ] Add multiple tasks
   - [ ] Refresh page
   - [ ] Verify all tasks and their states are preserved

7. Responsive Design
   - [ ] Test on mobile viewport
   - [ ] Test on tablet viewport
   - [ ] Test on desktop viewport

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Vite (build tool)

## Project Structure

```
src/
├── components/      # React components
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── types/          # TypeScript types
└── App.tsx         # Root component
```

## Performance Considerations

- Efficient re-renders using React.memo where appropriate
- Optimized localStorage operations
- Minimal dependencies
- Responsive images and optimized assets