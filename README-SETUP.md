# Rock Paper Scissors - Angular Setup

## Project Structure

This is a complete Angular implementation of the Rock, Paper, Scissors game with the following structure:

```
src/
  app/
    components/
      game/                 # Main game container
      score/                # Score display component
      choice-button/        # Individual choice buttons
      rules-button/         # Rules trigger button
      rules-modal/          # Rules modal overlay
      result-display/       # Game results display
    services/
      game.service.ts       # Game logic and state management
    app.component.ts        # Root component
    app.module.ts           # Angular module configuration
  assets/
    images/                 # Game icons and images
  styles.scss              # Global styles and design tokens
```

## Features Implemented

- **Responsive Design**: Mobile-first approach with breakpoints at 768px
- **State Management**: RxJS BehaviorSubjects for reactive state
- **Score Persistence**: LocalStorage for score retention across sessions
- **Component Architecture**: Modular, reusable components
- **SCSS Styling**: Design tokens from the style guide
- **TypeScript**: Strong typing for better development experience

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm start
   # or
   ng serve
   ```

3. **Build for Production**:
   ```bash
   npm run build
   # or
   ng build
   ```

4. **Run Tests**:
   ```bash
   npm test
   ```

## Game Logic

The game follows classic Rock, Paper, Scissors rules:
- Rock beats Scissors
- Scissors beats Paper  
- Paper beats Rock

## Architecture Decisions

**Service-Based State Management**: Used a centralized `GameService` with RxJS subjects instead of component state. This provides:
- Single source of truth for game state
- Easy score persistence with localStorage
- Reactive updates across components
- Better testability

**Component Composition**: Broke the UI into focused components:
- `GameComponent`: Main container and layout
- `ScoreComponent`: Score display with subscription to game service
- `ChoiceButtonComponent`: Reusable choice selection
- `ResultDisplayComponent`: Shows game outcomes
- `RulesModalComponent`: Overlay for game rules

**SCSS Architecture**: Used CSS custom properties for design tokens:
- Colors from the provided style guide
- Responsive breakpoints
- Consistent spacing and typography
- Component-specific stylesheets

## Bonus Features Ready

The structure is prepared for the bonus Rock, Paper, Scissors, Lizard, Spock variant:
- `Choice` type can be extended to include 'lizard' and 'spock'
- Game logic in `GameService` can be updated with new win conditions
- Component templates will automatically handle additional choices

## Next Steps

1. Run `npm install` to install Angular dependencies
2. Start the development server with `npm start`
3. Test the game functionality
4. Deploy to your preferred hosting platform

The implementation follows Angular best practices and is ready for deployment.
