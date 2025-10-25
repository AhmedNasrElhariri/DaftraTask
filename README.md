# 🧪 Pokémon Browser - Senior React Engineer Task

A modern, responsive Pokémon browser application built with React, TypeScript, and React Query. Browse and explore Pokémon with two different viewing modes: pagination and infinite scroll.

![Pokémon Browser](https://img.shields.io/badge/React-18.x-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-5.x-red) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-cyan)

## ✨ Features

### 📋 Core Features
- **Two List View Modes**:
  - **Pagination View**: Navigate through pages with page numbers and previous/next controls
  - **Infinite Scroll View**: Load more Pokémon with a "Load More" button
- **Detailed Pokémon Page**: Dedicated route showing comprehensive Pokémon information
- **Real-time API Integration**: Fetches data from the official PokéAPI
- **Advanced State Management**: Powered by TanStack Query (React Query)
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices

### 🎨 UI/UX Features
- Clean, modern interface with smooth animations
- Loading states with skeleton screens
- Error handling with retry functionality
- Type-based color gradients
- Progress bars for stat visualization
- Hover effects and transitions

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **TanStack Query v5** (React Query) - Data fetching and caching
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool
- **PokéAPI** - Data source

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/AhmedNasrElhariri/DaftraTask.git.git
cd pokemon-browser
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
pokemon-browser/
├── src/
│   ├── components/
│   │   ├── PokemonCard.tsx        # Individual Pokémon card component
│   │   ├── PaginationView.tsx     # Paginated list view
│   │   ├── LoadMoreView.tsx       # Infinite scroll view
│   │   ├── DetailPage.tsx         # Pokémon detail page
│   │   └── ErrorDisplay.tsx       # Error state component
│   ├── services/
│   │   └── pokemonService.ts      # API service layer
│   ├── hooks/
│   │   ├── usePokemonList.ts      # Hook for paginated list
│   │   ├── usePokemonInfinite.ts  # Hook for infinite scroll
│   │   └── usePokemonDetails.ts   # Hook for detail data
│   ├── types/
│   │   └── pokemon.ts             # TypeScript interfaces
│   ├── utils/
│   │   └── queryKeys.ts           # React Query key factory
│   ├── App.tsx                    # Main app component
│   └── main.tsx                   # Entry point
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎯 Key Implementation Details

### React Query Integration
- **Smart Caching**: 5-10 minute stale time for optimal performance
- **Automatic Refetching**: Background updates when data is stale
- **Pagination Support**: Built-in page state management
- **Infinite Queries**: Seamless "Load More" functionality
- **Error Handling**: Automatic retry with manual refetch option

### Query Keys Factory
Organized query key structure following best practices:

```typescript
const pokemonKeys = {
  all: ['pokemon'],
  lists: () => [...pokemonKeys.all, 'list'],
  list: (limit: number, offset: number) => [...pokemonKeys.lists(), { limit, offset }],
  infiniteList: (limit: number) => [...pokemonKeys.lists(), 'infinite', { limit }],
  details: () => [...pokemonKeys.all, 'detail'],
  detail: (id: number) => [...pokemonKeys.details(), id],
}
```

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Purple to Pink (`from-purple-400 to-pink-500`)
- **Type-based Colors**: Dynamic gradients based on Pokémon type
  - Fire: Orange to Red
  - Water: Blue shades
  - Grass: Green shades
  - Electric: Yellow shades
  - And more...

### Typography
- **Headings**: Bold, large sizes for hierarchy
- **Body**: Clean, readable font sizes
- **Stats**: Uppercase tracking for labels

### Spacing
- Consistent padding and margins using Tailwind's spacing scale
- Grid gaps: 4 (16px) for cards, 8 (32px) for sections

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

### Deploy to Netlify

1. **Install Netlify CLI**
```bash
npm i -g netlify-cli
```

2. **Build and deploy**
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to Cloudflare Pages

1. **Build the project**
```bash
npm run build
```

2. **Deploy via Cloudflare dashboard**
- Connect your Git repository
- Set build command: `npm run build`
- Set output directory: `dist`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (2 columns)
- **Tablet**: 768px - 1024px (3 columns)
- **Desktop**: > 1024px (4 columns)

## 🧪 API Endpoints Used

- **List Pokémon**: `GET https://pokeapi.co/api/v2/pokemon?limit={limit}&offset={offset}`
- **Get Details**: `GET https://pokeapi.co/api/v2/pokemon/{id}`

## ⚡ Performance Optimizations

1. **React Query Caching**: Reduces unnecessary API calls
2. **Image Optimization**: Uses official artwork for best quality
3. **Code Splitting**: Automatic with Vite
4. **Lazy Loading**: Images load on demand
5. **Debounced State Updates**: Smooth pagination transitions

## 🔒 Error Handling

- Network errors with retry functionality
- Loading states with skeletons
- Graceful fallbacks for missing data
- User-friendly error messages

## 🎓 Learning Resources

- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 📝 Development Notes

### Time Investment
- Project completed within 4-hour timeframe
- Focus on clean code and user experience
- Production-ready architecture

### Future Enhancements
- [ ] Search functionality
- [ ] Filter by type
- [ ] Favorite Pokémon (local storage)
- [ ] Comparison view
- [ ] Dark mode
- [ ] Unit tests with Vitest
- [ ] E2E tests with Playwright
- [ ] PWA capabilities
- [ ] Animation improvements
- [ ] Sound effects

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [PokéAPI](https://pokeapi.co/) for the amazing free API
- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [TanStack Query](https://tanstack.com/query) for powerful data fetching

## 📧 Contact


Project Link: [https://github.com/AhmedNasrElhariri/DaftraTask.git](https://github.com/AhmedNasrElhariri/DaftraTask.git)

Live Demo: [https://your-pokemon-browser.vercel.app](https://your-pokemon-browser.vercel.app)

---

Made with ❤️ and ⚡ by [Ahmed Nasr]