# Medical Chat Assistant - Frontend

A React-based frontend application for the Medical Chat Assistant with authentication and chat interface.

## Requirements

- Node.js >= 16.x
- npm >= 8.x
- React 18.x

## Installation

1. Clone the repository
    ```bash
    git clone <repository-url>
    cd medical-chat-frontend
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Create environment file
    ```bash
    cp .env.example .env
    ```

4. Configure your .env file:
    ```env
    REACT_APP_API_URL=http://localhost:8000/api
    REACT_APP_NAME="Medical Chat Assistant"
    ```

5. Start the development server
    ```bash
    npm start
    ```

## Available Scripts

- Start development server
    ```bash
    npm start
    ```

- Build for production
    ```bash
    npm run build
    ```

- Run tests
    ```bash
    npm test
    ```

- Eject from Create React App
    ```bash
    npm run eject
    ```

## Project Structure

```text
src/
├── components/          # React components
│   ├── Login/
│   ├── Register/
│   ├── Chat/
│   └── Common/
├── context/            # React context providers
├── utils/              # Utility functions
├── services/           # API services
├── hooks/              # Custom hooks
└── assets/             # Static assets
```

## Features

- User authentication (login/register)
- Protected routes
- Real-time chat interface
- Message history
- Responsive design
- Error handling
- Loading states

## Authentication

Authentication is handled using JWT tokens stored in localStorage. Protected routes require authentication.

## API Integration

The application uses axios for API requests. Configuration can be found in `src/utils/axios.js`.

## Components

### Auth Components

- **Login** - User login form
- **Register** - User registration form
- **ProtectedRoute** - Route wrapper for authenticated routes

### Chat Components

- **ChatInterface** - Main chat interface
- **MessageList** - Displays chat messages
- **MessageInput** - Input for new messages

## State Management

- Authentication state is managed using React Context
- Chat state is managed using local state and props

## Styling

- CSS Modules for component-specific styles
- Responsive design using media queries
- Consistent theme variables

## Error Handling

- Form validation
- API error handling
- User feedback through notifications

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

- Follow coding standards
- Write meaningful commit messages
- Create feature branches
- Add appropriate comments
- Test thoroughly before PR

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

These README files provide:

- Clear installation instructions
- Environment setup details
- Available features and endpoints
- Project structure
- Development guidelines
- API documentation
- Security considerations
- Error handling information

You can customize these further based on your specific:

- Deployment requirements
- Additional features
- Specific coding standards
- Team workflows
- CI/CD processes
- Testing requirements
- Documentation needs

Remember to update the repository URLs, environment variables, and other placeholders with actual values.