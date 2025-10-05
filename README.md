<div align="center">

# 🔐 Permissions & Feature Flags

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=github&utm_campaign=next-enterprise)
[![GitHub stars](https://img.shields.io/github/stars/JanSzewczyk/permisions-features-flags?style=social)](https://github.com/JanSzewczyk/permisions-features-flags/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)

**A modern Next.js application demonstrating advanced permissions management and feature flag system with enterprise-grade security and dynamic feature rollouts** 🚀

[Features](#-features) • [Getting Started](#-getting-started) • [Documentation](#-table-of-contents) • [Deployment](#-deployment)

</div>

---

## 👋 Welcome to Permissions & Feature Flags!

**Permissions & Feature Flags** is a comprehensive, production-ready Next.js application that showcases how to build scalable, secure applications with sophisticated authorization patterns and dynamic feature management.

### 🎯 What This Project Solves

In modern web applications, managing who can access what and controlling feature rollouts are critical challenges. This project demonstrates:

- **🔐 Fine-Grained Access Control** - Implement both Role-Based (RBAC) and Attribute-Based Access Control (ABAC) patterns
- **🚩 Dynamic Feature Management** - Control feature visibility and rollout with advanced feature flags
- **🎲 Progressive Rollouts** - Implement percentage-based and hash-based feature distribution
- **🏗️ Enterprise Architecture** - Learn production-ready patterns for permissions and feature management
- **⚡ Type-Safe Implementation** - Fully typed with TypeScript for ultimate developer experience

### 💎 What Makes This Project Special

- **Real-World Authorization Patterns** - Not just basic examples, but production-ready RBAC and ABAC implementations
- **Advanced Feature Flags** - Go beyond simple toggles with percentage-based rollouts, user targeting, and consistent hashing
- **Modern Tech Stack** - Built with Next.js 15, React 19, and the latest web technologies
- **Enterprise-Grade Testing** - Comprehensive unit tests, integration tests, E2E tests, and Storybook component testing
- **Developer Experience First** - Type-safe environment variables, automated code quality checks, and AI-powered code reviews
- **Production Ready** - Complete CI/CD pipeline, semantic versioning, and deployment automation

Perfect for developers looking to learn modern authorization patterns, feature management strategies, or building enterprise-grade Next.js applications! 🎓

## ✨ Features

### 🔐 Authorization & Permissions

- **🛡️ RBAC (Role-Based Access Control)** - Complete role-based permission system with hierarchical roles
- **🎯 ABAC (Attribute-Based Access Control)** - Fine-grained attribute-based authorization
- **👥 User Authentication** - Integrated with Clerk for secure user management
- **🔑 Permission Utilities** - Type-safe permission checking and enforcement
- **🚪 Route Protection** - Server-side and client-side route guards

### 🚩 Feature Flags System

- **🎛️ Simple Feature Toggles** - Enable/disable features with boolean flags
- **🎲 Percentage-Based Rollouts** - Gradual feature deployment with user percentage targeting
- **🔢 Hash-Based Distribution** - Consistent feature assignment using MurmurHash algorithm
- **👤 User Targeting** - Target specific users or user groups
- **📊 Environment-Based Flags** - Different flag configurations per environment
- **⚡ Type-Safe Flags** - Fully typed feature flag definitions and checks

### 🏗️ Core Technologies

- **⚡ [Next.js 15](https://nextjs.org/)** - Latest React framework with App Router and Turbopack
- **⚛️ [React 19](https://react.dev/)** - Cutting-edge React features and improvements
- **💅 [Tailwind CSS 4](https://tailwindcss.com/)** - Next-generation utility-first CSS framework
- **🛠️ [TypeScript 5.8](https://www.typescriptlang.org/)** - Extremely strict type checking with `ts-reset`
- **🎯 Absolute Imports** - Clean import paths with TypeScript path aliases
- **📝 [Zod](https://zod.dev/)** - Schema validation for runtime type safety
- **👤 [Clerk](https://clerk.com/)** - Modern authentication and user management

### 🧪 Testing & Quality

- **🧪 [Vitest](https://vitest.dev/)** - Lightning-fast unit and integration testing
- **🧬 [React Testing Library](https://testing-library.com/react)** - User-centric component testing
- **🎭 [Playwright](https://playwright.dev/)** - Reliable end-to-end browser testing
- **📚 [Storybook 9](https://storybook.js.org/)** - Component development and documentation
- **📊 Coverage Reports** - Comprehensive test coverage tracking with V8
- **✨ [ESLint](https://eslint.org/)** - Strict linting with custom Szum-Tech configuration
- **💄 [Prettier](https://prettier.io/)** - Consistent code formatting

### 🤖 Automation & DevOps

- **🚀 [GitHub Actions](https://github.com/features/actions)** - Complete CI/CD pipeline
- **🚢 [Semantic Release](https://github.com/semantic-release/semantic-release)** - Automated versioning and changelog
- **🤖 [Dependabot](https://github.com/dependabot)** - Automated dependency updates
- **🧠 [ChatGPT Code Reviews](https://openai.com/chatgpt)** - AI-powered PR reviews
- **📦 Automated Publishing** - Release automation with conventional commits

### 🔧 Developer Experience

- **💻 [T3 Env](https://env.t3.gg/)** - Type-safe environment variable validation
- **📊 [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)** - Visualize bundle size and optimization
- **⚡ [Turbopack](https://turbo.build/pack)** - Ultra-fast incremental bundler
- **🎨 [Szum-Tech Design System](https://www.npmjs.com/package/@szum-tech/design-system)** - Beautiful pre-built components
- **🔄 Hot Module Replacement** - Instant feedback during development
- **🎯 IntelliSense Support** - Full autocomplete and type hints

### 🏆 Performance

- **💯 Optimized Build** - Production-ready with automatic optimizations
- **🚀 Server Components** - React Server Components for optimal performance
- **📦 Code Splitting** - Automatic code splitting and lazy loading
- **🖼️ Image Optimization** - Next.js Image component for optimal loading

---

## 📖 Table of Contents

- [👋 Welcome](#-welcome-to-permissions--feature-flags)
- [✨ Features](#-features)
- [🎯 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Optional Configuration](#optional-configuration)
- [🔐 Environment Variables](#-environment-variables)
- [📃 Scripts](#-scripts-overview)
- [📁 Project Structure](#-project-structure)
- [🛠️ Technologies](#️-technologies)
- [🧪 Testing](#-testing)
- [🎨 Styling & Design System](#-styling-and-design-system)
- [🤖 Automation & CI/CD](#-automation--cicd)
- [🚀 Deployment](#-deployment)
- [🔒 Server-Only Code](#-keeping-server-only-code-out-of-the-client-environment)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [📧 Contact](#-contact--support)

---

## 🎯 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.x or higher recommended)
- **npm**, **yarn**, or **pnpm** package manager
- **Git** for version control

### Installation

Follow these steps to get started:

#### 1. ⭐ Star and Fork the Repository

Don't forget to star ⭐ and fork the repository first!

#### 2. 📥 Clone the Repository

```bash
git clone https://github.com/JanSzewczyk/permisions-features-flags.git
cd permisions-features-flags
```

#### 3. 📦 Install Dependencies

```bash
npm ci
```

#### 4. ⚙️ Configure Environment Variables

Create a `.env.local` file in the root directory based on `.env.example`:

```bash
cp .env.example .env.local
```

See the [Environment Variables](#-environment-variables) section for detailed configuration.

#### 5. 🚀 Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

#### 6. 🏗️ Build for Production

```bash
npm run build
npm run start
```

### Optional Configuration

#### Semantic Release Setup

To use the fully configured [Semantic Release](https://github.com/semantic-release/semantic-release) feature:

1. Go to `.github/workflows/publish.yml` file
2. Expose hidden code (lines 26 to 30)
3. Enjoy automated versioning and changelog generation
   ([more details](https://www.npmjs.com/package/@szum-tech/semantic-release-preset))

#### ChatGPT Code Review Setup

Add the `OPENAI_API_KEY` to your
[GitHub Actions secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) to enable AI-powered code
reviews.

---

## 🔐 Environment Variables

This project uses [T3 Env](https://env.t3.gg/) for type-safe environment variable validation. Environment variables are validated at build time to ensure your application has all required configuration.

### Configuration Files

- **Client variables**: `data/env/client.ts` - Variables accessible in the browser (must be prefixed with `NEXT_PUBLIC_`)
- **Server variables**: `data/env/server.ts` - Variables only accessible on the server
- **Example file**: `.env.example` - Template for environment variables

### Setup Instructions

1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```

2. Add your environment variables to `.env.local`

3. The application will validate all variables at build time

### Example Configuration

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=https://api.example.com
# DATABASE_URL=postgresql://...
```

### Benefits of T3 Env

✅ **Type-safe** - Full TypeScript support with autocomplete
✅ **Validated at build time** - Catch missing variables early
✅ **Runtime safety** - Prevents undefined variables in production
✅ **Clear error messages** - Know exactly what's missing

If required environment variables are missing, you'll get a clear error:

```
❌ Invalid environment variables: { API_KEY: [ 'Required' ] }
```

---

## 🚀 Deployment

Easily deploy your Next.js app with **Vercel** by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=github&utm_campaign=next-enterprise)

### Deployment Steps

1. Click the "Deploy with Vercel" button
2. Connect your GitHub repository
3. Configure environment variables
4. Deploy!

Your application will be live in minutes with automatic CI/CD pipeline.

---

## 📃 Scripts Overview

All available npm scripts for development, testing, and deployment:

### 🚀 Development

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack (hot reload enabled) |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |

### ✨ Code Quality

| Command | Description |
|---------|-------------|
| `npm run lint` | Run ESLint to check code quality |
| `npm run lint:fix` | Automatically fix ESLint errors |
| `npm run lint:ci` | Run linter for CI with SARIF output |
| `npm run prettier:check` | Check code formatting with Prettier |
| `npm run prettier:write` | Format code with Prettier |
| `npm run type-check` | Run TypeScript compiler checks |

### 🧪 Testing

| Command | Description |
|---------|-------------|
| `npm run test` | Run all tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:ui` | Run tests with Vitest UI |
| `npm run test:unit` | Run unit tests with coverage |
| `npm run test:coverage` | Generate test coverage report |
| `npm run test:ci` | Run tests in CI environment |

### 🎭 E2E Testing

| Command | Description |
|---------|-------------|
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run test:e2e:ui` | Run E2E tests with Playwright UI |
| `npm run test:e2e:ci` | Run E2E tests in CI environment |

### 📚 Storybook

| Command | Description |
|---------|-------------|
| `npm run storybook:dev` | Start Storybook dev server on port 6006 |
| `npm run storybook:build` | Build Storybook for production |
| `npm run storybook:serve` | Serve built Storybook |
| `npm run test:storybook` | Run Storybook component tests |

### 📊 Analysis

| Command | Description |
|---------|-------------|
| `npm run analyze` | Analyze bundle size with Next.js Bundle Analyzer |

---

## 🛠️ Technologies

This project is built with cutting-edge technologies and best practices:

### 🎨 Frontend & Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 15.4.5 | React framework with App Router |
| [React](https://react.dev/) | 19.1.1 | UI library |
| [React DOM](https://react.dev/) | 19.1.1 | React renderer |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.11 | Utility-first CSS framework |
| [@szum-tech/design-system](https://www.npmjs.com/package/@szum-tech/design-system) | 2.3.1 | Component library |

### 🔐 Authentication & Authorization

| Technology | Version | Purpose |
|------------|---------|---------|
| [@clerk/nextjs](https://clerk.com/) | 6.28.1 | Authentication and user management |
| [svix](https://www.svix.com/) | 1.70.0 | Webhook management |

### 📝 Type Safety & Validation

| Technology | Version | Purpose |
|------------|---------|---------|
| [TypeScript](https://www.typescriptlang.org/) | 5.8.3 | Type-safe JavaScript |
| [Zod](https://zod.dev/) | 4.0.14 | Schema validation |
| [@t3-oss/env-nextjs](https://env.t3.gg/) | 0.13.8 | Type-safe environment variables |
| [@total-typescript/ts-reset](https://github.com/total-typescript/ts-reset) | 0.6.1 | Improved TypeScript types |

### 🧪 Testing

| Technology | Version | Purpose |
|------------|---------|---------|
| [Vitest](https://vitest.dev/) | 3.2.4 | Unit & integration testing |
| [@testing-library/react](https://testing-library.com/) | 16.3.0 | React component testing |
| [@testing-library/user-event](https://testing-library.com/) | 14.6.1 | User interaction simulation |
| [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) | 6.6.4 | Custom jest matchers |
| [Playwright](https://playwright.dev/) | 1.54.1 | End-to-end testing |
| [@vitest/coverage-v8](https://vitest.dev/) | 3.2.4 | Code coverage |

### 📚 Development & Documentation

| Technology | Version | Purpose |
|------------|---------|---------|
| [Storybook](https://storybook.js.org/) | 9.0.15 | Component development |
| [@storybook/nextjs-vite](https://storybook.js.org/) | 9.0.18 | Next.js integration |
| [storybook-addon-tag-badges](https://www.npmjs.com/package/storybook-addon-tag-badges) | 2.0.1 | Component badges |

### 🛠️ Code Quality & Formatting

| Technology | Version | Purpose |
|------------|---------|---------|
| [ESLint](https://eslint.org/) | 9.32.0 | Code linting |
| [@szum-tech/eslint-config](https://www.npmjs.com/package/@szum-tech/eslint-config) | 2.1.7 | Custom ESLint rules |
| [Prettier](https://prettier.io/) | 3.6.2 | Code formatting |
| [@szum-tech/prettier-config](https://www.npmjs.com/package/@szum-tech/prettier-config) | 1.6.2 | Prettier configuration |

### 🚀 Build & Deployment

| Technology | Version | Purpose |
|------------|---------|---------|
| [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) | 15.4.5 | Bundle size analysis |
| [Semantic Release](https://semantic-release.gitbook.io/) | 24.2.7 | Automated versioning |
| [@szum-tech/semantic-release-config](https://www.npmjs.com/package/@szum-tech/semantic-release-config) | 2.3.1 | Release configuration |

### 🎯 Forms & Utilities

| Technology | Version | Purpose |
|------------|---------|---------|
| [React Hook Form](https://react-hook-form.com/) | 7.61.1 | Form management |
| [server-only](https://www.npmjs.com/package/server-only) | 0.0.1 | Server-side code protection |

---

## 🧪 Testing

This project features a comprehensive testing setup ensuring reliability and quality:

### 🧪 Unit & Integration Tests

Powered by **Vitest** and **React Testing Library** for fast, reliable testing:

```bash
# Run all tests
npm run test

# Watch mode for development
npm run test:watch

# Interactive UI mode
npm run test:ui

# Generate coverage report
npm run test:coverage
```

**Features:**
- ⚡ Lightning-fast test execution with Vitest
- 🎯 Component testing with React Testing Library
- 📊 Code coverage tracking with V8
- 🔄 Hot module replacement in watch mode

### 🎭 End-to-End Tests

Powered by **Playwright** for cross-browser E2E testing:

```bash
# Run E2E tests
npm run test:e2e

# Run with interactive UI
npm run test:e2e:ui

# CI mode
npm run test:e2e:ci
```

**Features:**
- 🌐 Cross-browser testing (Chromium, Firefox, WebKit)
- 📸 Automatic screenshot capture on failure
- 🎥 Video recording of test runs
- 🐛 Debug mode with step-by-step execution

<img width="1665" alt="Playwright Test Results" src="https://github.com/JanSzewczyk/nextjs-szumplate/assets/29024606/9c65cdd2-4e04-4687-81d6-8e7a32f12518">

### 📚 Storybook Component Tests

Test components in isolation with **Storybook**:

```bash
# Start Storybook dev server
npm run storybook:dev

# Run Storybook tests
npm run test:storybook

# Build Storybook
npm run storybook:build
```

**Features:**
- 🎨 Visual component development
- 📖 Automatic documentation generation
- 🎮 Interactive component playground
- ♿ Accessibility testing with addon-a11y
- 🌙 Dark mode support

### ✅ Test Coverage

The project maintains high test coverage across:
- ✅ Unit tests for utilities and helpers
- ✅ Integration tests for features
- ✅ Component tests in Storybook
- ✅ E2E tests for critical user flows

Run `npm run test:coverage` to see detailed coverage reports.

---

## 🎨 Styling and Design System

This boilerplate uses **Tailwind CSS** for styling and the
**[Szum-Tech Design System](https://www.npmjs.com/package/@szum-tech/design-system)**, which contains:

- ✅ Fully designed components
- 🎨 Color palette and design tokens
- 🛠️ Utility functions and helpers
- 📖 Comprehensive documentation

**[Check the Design System Documentation](https://szum-tech-design-system.vercel.app/?path=/docs/components--docs)**

### Usage Example

```tsx
import { Button } from "@szum-tech/design-system";

export default function MyComponent() {
  return <Button variant="primary">Click me!</Button>;
}
```

---

## 🤖 Automation & CI/CD

This project includes a complete CI/CD pipeline with GitHub Actions workflows for automated testing, code quality checks, and deployments.

### 🔄 Available Workflows

#### 1. ✅ PR Check Workflow

Runs automatically on every pull request to ensure code quality:

**Checks performed:**
- 🏗️ **Build Verification** - Ensures production build succeeds
- 💄 **Prettier** - Validates code formatting
- ⬣ **ESLint** - Checks code quality and style
- 🛠️ **TypeScript** - Runs type checking
- 🧪 **Unit Tests** - Runs Vitest test suite
- 🎭 **E2E Tests** - Runs Playwright browser tests

**Configuration:** `.github/workflows/pr-check.yml`

#### 2. 🤖 ChatGPT Code Review

AI-powered code reviews using ChatGPT to provide intelligent feedback on pull requests.

**Setup:**
1. Generate an API key from [OpenAI Platform](https://platform.openai.com/)
2. Add `OPENAI_API_KEY` to your [GitHub repository secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
3. The workflow automatically reviews all PRs

**Configuration:** `.github/workflows/code-review.yml`

![ChatGPT Code Review](https://user-images.githubusercontent.com/28964599/233685071-e1371edf-6359-41c3-a989-335d6ee09cb7.png)

#### 3. 🚢 Publish Workflow

Automated versioning and release management using [Semantic Release](https://semantic-release.gitbook.io/).

**Triggered when:** Changes are merged to `main` branch

**Actions performed:**
- 📦 Calculates next version based on commit messages
- 📝 Generates/updates `CHANGELOG.md`
- 🏷️ Creates GitHub release with notes
- 🔢 Bumps version in `package.json`
- 📋 Publishes release notes

**Configuration:** `.github/workflows/publish.yml` and `release.config.js`

**Commit Convention:** Uses [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` → Minor version bump (new feature)
- `fix:` → Patch version bump (bug fix)
- `feat!:` or `BREAKING CHANGE:` → Major version bump

#### 4. 🤖 Dependabot

Automated dependency updates to keep your project secure and up-to-date.

**Features:**
- 📦 Weekly npm dependency updates
- 🔒 Security vulnerability patches
- 🔄 Automatic PR creation for updates

**Configuration:** `.github/dependabot.yml`

### 🛡️ Code Quality Standards

All code must pass the following before merging:
- ✅ All tests passing (unit, integration, E2E)
- ✅ TypeScript type checking
- ✅ ESLint rules
- ✅ Prettier formatting
- ✅ Successful production build

---

## 🔒 Keeping Server-only Code out of the Client Environment

Since JavaScript modules can be shared between both Server and Client Components, it's possible for server-only code to
accidentally be included in the client bundle.

### Solution: `server-only` Package

Use the [server-only](https://www.npmjs.com/package/server-only) package to give developers a build-time error if they
accidentally import server code into a Client Component.

```bash
npm install server-only
```

Then import it in any module that contains server-only code:

```typescript
import "server-only";

// The rest of your server-only code
export async function getData() {
  // This function can only be used on the server
}
```

---

## 📁 Project Structure

```
permisions-features-flags/
├── .github/
│   └── workflows/        # GitHub Actions workflows (CI/CD)
├── .storybook/           # Storybook configuration
├── app/                  # Next.js App Router (pages, layouts, API routes)
├── components/           # Reusable React components
├── data/                 # Static data and constants
├── features/             # Feature-based modules and logic
├── lib/                  # Utility functions and helpers
│   └── auth.ts           # Authentication and permission utilities
├── public/               # Static assets (images, fonts, icons)
├── stories/              # Storybook stories
├── tests/                # Test files
│   ├── e2e/              # Playwright end-to-end tests
│   └── unit/             # Vitest unit tests
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
├── .env.example          # Example environment variables template
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── playwright.config.ts  # Playwright E2E test configuration
├── postcss.config.js     # PostCSS configuration
├── prettier.config.js    # Prettier configuration
├── release.config.js     # Semantic Release configuration
├── tsconfig.json         # TypeScript configuration
├── vitest.config.ts      # Vitest test configuration
└── package.json          # Project dependencies and scripts
```

### Key Directories

- **`.github/workflows/`** - CI/CD automation (code review, PR checks, releases)
- **`.storybook/`** - Storybook setup for component development and documentation
- **`app/`** - Next.js 15 App Router with server/client components, layouts, and API routes
- **`components/`** - Shared, reusable UI components used across the application
- **`data/`** - Static data, constants, and configuration files
- **`features/`** - Feature-based modules with related components and logic (modular architecture)
- **`lib/`** - Utility functions, helpers, and third-party library configurations
- **`public/`** - Static files served directly (images, fonts, favicon, etc.)
- **`stories/`** - Storybook stories for component documentation and testing
- **`tests/e2e/`** - End-to-end tests using Playwright for full user flow testing
- **`tests/unit/`** - Unit tests using Vitest and React Testing Library
- **`types/`** - Global TypeScript type definitions and interfaces
- **`utils/`** - General utility functions and helpers

### Important Configuration Files

- **`eslint.config.mjs`** - ESLint linting rules and plugins
- **`next.config.ts`** - Next.js framework configuration (build, plugins, Turbopack, etc.)
- **`playwright.config.ts`** - Playwright E2E testing configuration
- **`postcss.config.js`** - PostCSS plugins and Tailwind CSS processing
- **`prettier.config.js`** - Code formatting rules and preferences
- **`release.config.js`** - Semantic Release automation configuration
- **`tsconfig.json`** - TypeScript compiler options and path aliases
- **`vitest.config.ts`** - Vitest unit test configuration and setup

---

## 🤝 Contributing

Contributions are always welcome! Whether it's bug reports, feature requests, or code contributions, we appreciate your help in making this project better.

### 🚀 How to Contribute

1. **Fork the repository**
   - Click the "Fork" button at the top right of the repository page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/permisions-features-flags.git
   cd permisions-features-flags
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make your changes**
   - Write clean, maintainable code
   - Add tests for new features
   - Update documentation as needed

5. **Commit using Conventional Commits**
   ```bash
   git commit -m "feat: add amazing new feature"
   ```

   **Commit types:**
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch and describe your changes

### ✅ Pull Request Guidelines

Before submitting your PR, ensure:

- ✅ All tests pass (`npm run test`)
- ✅ E2E tests pass (`npm run test:e2e`)
- ✅ Code is properly formatted (`npm run prettier:write`)
- ✅ No linting errors (`npm run lint`)
- ✅ TypeScript types are correct (`npm run type-check`)
- ✅ Build succeeds (`npm run build`)
- ✅ You've added/updated tests for your changes
- ✅ Documentation is updated if needed

### 🐛 Reporting Bugs

Found a bug? Please [open an issue](https://github.com/JanSzewczyk/permisions-features-flags/issues) with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, browser, Node version)

### 💡 Feature Requests

Have an idea? [Open an issue](https://github.com/JanSzewczyk/permisions-features-flags/issues) with:
- Clear description of the feature
- Use case and benefits
- Possible implementation approach

### 📝 Code of Conduct

Please be respectful and constructive in all interactions. We're all here to learn and build great software together!

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this software as long as you include the original copyright notice.

---

## 🙏 Acknowledgments

This project is built on the shoulders of giants. Special thanks to these amazing open-source projects and their maintainers:

### 🎯 Core Framework & Libraries
- [Next.js](https://nextjs.org/) by Vercel - The React framework for production
- [React](https://react.dev/) by Meta - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) by Microsoft - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) by Tailwind Labs - Utility-first CSS framework

### 🧪 Testing & Quality
- [Vitest](https://vitest.dev/) - Next generation testing framework
- [Playwright](https://playwright.dev/) by Microsoft - Reliable end-to-end testing
- [Testing Library](https://testing-library.com/) - User-centric testing utilities
- [Storybook](https://storybook.js.org/) - UI component development environment

### 🛠️ Development Tools
- [ESLint](https://eslint.org/) - Pluggable linting utility
- [Prettier](https://prettier.io/) - Opinionated code formatter
- [T3 Env](https://env.t3.gg/) by Theo Browne - Type-safe environment variables

### 🔐 Authentication & Security
- [Clerk](https://clerk.com/) - Modern authentication and user management
- [Zod](https://zod.dev/) - TypeScript-first schema validation

### 🚀 CI/CD & Automation
- [Semantic Release](https://semantic-release.gitbook.io/) - Automated version management
- [GitHub Actions](https://github.com/features/actions) - CI/CD automation

### 💙 Community
A huge thank you to the entire open-source community for making projects like this possible!

---

## 📧 Contact & Support

**Jan Szewczyk** - Full-Stack Developer & Open Source Enthusiast

### 🔗 Connect With Me

- 💼 **GitHub**: [@JanSzewczyk](https://github.com/JanSzewczyk)
- 🌐 **Repository**: [permisions-features-flags](https://github.com/JanSzewczyk/permisions-features-flags)

### 💬 Get Help

- 🐛 **Report Bugs**: [Create an issue](https://github.com/JanSzewczyk/permisions-features-flags/issues/new?labels=bug&template=bug_report.md)
- 💡 **Request Features**: [Create an issue](https://github.com/JanSzewczyk/permisions-features-flags/issues/new?labels=enhancement&template=feature_request.md)
- ❓ **Ask Questions**: [Start a discussion](https://github.com/JanSzewczyk/permisions-features-flags/discussions)
- ⭐ **Star the project**: [Give it a star](https://github.com/JanSzewczyk/permisions-features-flags)

---

<div align="center">

## 💖 Made with ❤️ by [Jan Szewczyk](https://github.com/JanSzewczyk)

If this project helped you, please consider giving it a ⭐ on GitHub!

---

### 🌟 **Thank you for checking out Permissions & Feature Flags!** 🌟

[![GitHub stars](https://img.shields.io/github/stars/JanSzewczyk/permisions-features-flags?style=social)](https://github.com/JanSzewczyk/permisions-features-flags/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/JanSzewczyk/permisions-features-flags?style=social)](https://github.com/JanSzewczyk/permisions-features-flags/network/members)

[⬆ Back to Top](#-permissions--feature-flags)

</div>
