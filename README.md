# Gaming Platform Project

A modern gaming platform built with Next.js 14, featuring user authentication, virtual currency management, and game information integration.

## Core Features

### 1. User Authentication with Social Login
- Multiple authentication providers (Google, GitHub)
- Secure session management
- Protected routes and API endpoints

### 2. Virtual Currency System
- Diamond purchase simulation
- User-specific balance management
- Secure payment flow simulation

### 3. Game Information Integration
- RAWG API integration
- Game details and metadata
- Search and filtering capabilities
- Responsive game cards and layouts

## Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **API Integration**: RAWG API

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd [project-name]
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```env
# .env.local

```bash
openssl rand -base64 32
```
AUTH_SECRET="your-secret"

# Auth Providers
AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"
AUTH_GITHUB_ID="your-github-client-id"
AUTH_GITHUB_SECRET="your-github-client-secret"

# RAWG API
NEXT_PUBLIC_RAWG_API_KEY="your-rawg-api-key"
```

4. Run the development server:
```bash
npm run dev
```

## Suggested Improvements

### 1. Authentication Enhancements
- [ ] Implement email verification
- [ ] Add password recovery flow
- [ ] Implement 2FA support
- [ ] Add more social login providers
- [ ] Create custom authentication pages

### 2. Database Integration
- [ ] Migrate from localStorage to Vercel Postgres
- [ ] Implement transaction history
- [ ] Add user profiles
- [ ] Create admin dashboard
- [ ] Add analytics tracking

### 3. RAWG API Integration
- [ ] Add pagination support
- [ ] Implement advanced search
- [ ] Add sorting options
- [ ] Implement filters (genre, platform, year)
- [ ] Add game details page
- [ ] Implement Suspense boundaries
- [ ] Add loading states
- [ ] Implement error boundaries

## Testing Assignment Suggestions

### 1. Authentication Tests
```typescript
describe('Authentication Flow', () => {
  it('should successfully register a new user', async () => {
    // Test user registration
  })

  it('should login with social providers', async () => {
    // Test social login
  })

  it('should maintain session state', async () => {
    // Test session persistence
  })
})
```

### 2. Diamond Purchase Tests
```typescript
describe('Diamond Purchase Flow', () => {
  it('should update user balance after purchase', async () => {
    // Test balance updates
  })

  it('should persist transaction history', async () => {
    // Test transaction recording
  })

  it('should validate purchase amounts', async () => {
    // Test input validation
  })
})
```

### 3. RAWG API Integration Tests
```typescript
describe('Game Data Integration', () => {
  it('should fetch and display games list', async () => {
    // Test API integration
  })

  it('should implement search functionality', async () => {
    // Test search features
  })

  it('should handle pagination correctly', async () => {
    // Test pagination
  })
})
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and database solutions
- RAWG for their comprehensive games API
- shadcn/ui for beautiful components
