# Pokemon Details Page

This project displays detailed information about Pokémon fetched dynamically from the [PokéAPI](https://pokeapi.co/). It also implements user authentication using [Reqres](https://reqres.in/) for login validation.

## Features
- Fetches Pokémon details including name, type, and stats from PokéAPI.
- Displays Pokémon type distribution with progress bars.
- User authentication via Reqres API.
- Responsive UI with a clean design.

## API Integrations
### PokéAPI
- Endpoint: `https://pokeapi.co/api/v2/pokemon`
- Fetches Pokémon details such as name, type, and abilities.

### Reqres API (User Authentication)
- Endpoint: `https://reqres.in/api/login`
- Sample Credentials:
  - **Email:** `george.bluth@reqres.in`
  - **Password:** *(any password works)*

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/NajimuddinS/CyberHopAssignment.git
   ```
2. Navigate to the project directory:
   ```sh
   cd CyberHopAssignment
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the application:
   ```sh
   npm run dev
   ```

## Deployment
- The project is deployed at: [CyberHop](https://cybhop.netlify.app)

## Technologies Used
- **React.js** for UI development.
- **PokéAPI** for fetching Pokémon data.
- **Reqres API** for user authentication.
- **CSS** for styling and responsiveness.

## Links
- **GitHub Repository:** [CyberHopAssignment](https://github.com/NajimuddinS/CyberHopAssignment)
- **Live Demo:** [CyberHop](https://cybhop.netlify.app/login)

---

### Future Enhancements
- Implement search functionality for Pokémon.
- Add individual Pokémon detail pages.
- Improve authentication with JWT.

---

Feel free to contribute or provide feedback! 🚀

