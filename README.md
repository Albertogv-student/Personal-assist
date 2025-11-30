# Personal Assistant

A desktop personal assistant application built with Electron, HTML, CSS, and JavaScript.

## Project Overview

This is a desktop application designed to help manage tasks, reminders, and notes. The app provides a clean, intuitive interface for organizing your daily activities.

### Current Features (MVP)
- Basic task management UI
- Clean, modern interface
- Cross-platform desktop support (Windows, macOS, Linux)

### Planned Features
- Task creation and deletion
- Task reminders and notifications
- Note-taking functionality
- Calendar integration
- Data persistence (local storage)

## Tech Stack

- **Framework**: Electron (for desktop app)
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: Electron Forge
- **Package Manager**: npm

## Project Structure

```
Personal Assistant/
├── src/
│   ├── main.js              # Electron main process
│   └── renderer.js          # Renderer process (frontend logic)
├── public/
│   ├── index.html           # App UI
│   ├── style.css            # Styling
│   └── assets/              # Images, icons, etc.
├── docs/                    # Project documentation
├── package.json             # Project dependencies & scripts
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## Getting Started

### Prerequisites
- Node.js 14+ and npm
- macOS, Windows, or Linux

### Installation

1. Navigate to the project directory:
   ```bash
   cd "Random code things/Personal Assitant"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm start
```

This will launch the Electron app in development mode.

### Building

To package the app:
```bash
npm run build
```

## Learning Goals

This project helps you learn:
- Electron fundamentals (main process, renderer process, IPC)
- Desktop app architecture
- Frontend development best practices
- Build pipelines and packaging
- Git and version control workflows

## Development Tips

- Use DevTools in Electron: Press `Ctrl+Shift+I` (or `Cmd+Shift+I` on macOS) to open developer tools
- Hot reload: Changes to `index.html` and `style.css` reflect immediately
- Check the main process console for debugging: `npm start` shows main process logs

## Next Steps

1. Add basic task creation functionality
2. Implement local storage to persist data
3. Add reminders/notifications
4. Style with a cohesive design system
5. Package and distribute the app
