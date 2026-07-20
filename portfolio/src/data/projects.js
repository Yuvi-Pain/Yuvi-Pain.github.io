// Central content store for every project.
// To add a 5th project later: add one object here — no new page needed,
// ProjectPage.jsx renders whichever project matches the URL slug.

export const projects = [
  {
    slug: "drone-dispatch",
    shortTitle: "Drone Dispatch System",
    title: "Real-Time Drone Dispatch & Fault-Recovery System",
    tagline:
      "A distributed fire-response simulation where independent drones, a scheduler, and an incident reporter coordinate over UDP — and recover automatically when things go wrong.",
    category: "Systems",
    status: "SHIPPED",
    team: "Team of 3",
    role: "Fire Incident subsystem · sequence & UML diagrams",
    techTags: ["Java", "UDP Sockets", "Multithreading", "Swing", "JUnit"],
    repo: "https://github.com/Yuvi-Pain/DroneSystem",

    summary:
      "A distributed, real-time fire-response simulation built in Java, where independent subsystems — a Fire Incident reporter, a central Scheduler, and a fleet of autonomous Drone processes — communicate over UDP sockets to detect incidents, dispatch the appropriate drone, and recover automatically from simulated in-flight faults. A live Swing dashboard visualizes drone state, pending incidents, and total response time in real time.",

    objectives: [
      "Simulate a real-time emergency dispatch pipeline across independent, network-connected processes.",
      "Design a Scheduler that tracks drone availability and assigns incidents by zone.",
      "Model realistic drone behavior with a state machine (Idle → En Route → Dropping Agent → Returning).",
      "Simulate and recover from equipment faults — nozzle malfunction, stuck-in-flight, packet loss — without manual intervention.",
      "Build a live monitoring GUI showing drone status, pending/completed incidents, and total fire-response time.",
    ],

    techUsed: [
      "Java (multithreading, ConcurrentHashMap, atomic state flags)",
      "UDP networking (DatagramSocket) for inter-process communication",
      "Java Swing for the real-time Scheduler Monitor GUI",
      "Finite-state modeling for drone lifecycle (IDLE, EN_ROUTE, DROPPING_AGENT, RETURNING, OFFLINE, FAULT)",
      "CSV parsing for incident/zone data ingestion",
      "JUnit for subsystem-level unit testing",
    ],

    achievements: [
      "Built a fully distributed system: the Scheduler, Fire Incident subsystem, and each drone run as independent processes communicating entirely over UDP — not shared memory.",
      "Implemented fault injection tied to drone state (nozzle jam only during payload drop, stuck-in-flight only mid-route, packet loss only when idle), each triggering its own recovery path and automatic incident reassignment.",
      "Designed zone-based dispatch using distance between a drone's position and the incident zone's center.",
      "Built a live Swing dashboard tracking every drone's state, distance to target, and total elapsed fire-response time.",
      "Used socket timeouts plus a STOP sentinel message to gracefully shut down every listener thread on demand.",
    ],

    visuals: [
      { src: "/images/drone/architecture.png", caption: "Final system architecture (Iteration 5 UML)" },
      { src: "/images/drone/sequence.png", caption: "Message flow between Scheduler, Fire Incident subsystem, and drones" },
      { src: "/images/drone/state-diagram.png", caption: "Drone lifecycle state machine" },
    ],

    challenges: [
      {
        title: "Coordinating State Across Independent Processes",
        issue: "Multiple UDP listener threads updating shared drone/incident state simultaneously risked race conditions.",
        solution: "Used a ConcurrentHashMap for drone status tracking and confined mutations to dedicated listener threads per message type (incidents, drone updates, fault reports).",
      },
      {
        title: "Realistic Fault Simulation",
        issue: "A generic 'random fault' wouldn't reflect real failure modes — a nozzle can't jam mid-flight, and a drone can't lose connection while actively dropping payload.",
        solution: "Tied each fault type to the drone's current state (nozzle → DROPPING_AGENT, stuck → RETURNING/EN_ROUTE, packet loss → IDLE), with a dedicated recovery function per fault type and automatic reassignment of the in-progress incident.",
      },
      {
        title: "Graceful Shutdown of Networked Threads",
        issue: "Threads blocked on socket.receive() don't respond to a simple boolean flag.",
        solution: "Combined a 1-second socket timeout with a broadcast STOP message, so every listener thread wakes up and exits cleanly.",
      },
    ],

    conclusion:
      "This was a team project (3 members) for a systems programming course. My primary contributions were designing and implementing the Fire Incident subsystem — reading incident data from CSV and reporting it to the Scheduler over UDP — along with the sequence and UML architecture diagrams across iterations.",
  },

  {
    slug: "macrospots",
    shortTitle: "MacroSpots",
    title: "MacroSpots 🍔🥗",
    tagline:
      "A map-first web app that scores nearby fast food against your remaining daily macros — with a fully hand-built drag interface, no UI framework.",
    category: "Full-Stack Web",
    status: "SHIPPED",
    team: "Solo",
    role: "Full build",
    techTags: ["JavaScript (ES6)", "Vite", "Leaflet.js", "Custom State Engine"],
    repo: "https://github.com/Yuvi-Pain/MacroSpots",

    summary:
      "MacroSpots is a map-first, mobile-friendly web app that helps users find fast food that actually fits their remaining daily macros. A custom-built 'Macro Fit Score' engine ranks nearby restaurants and menu items in real time, and the whole interface — including a native draggable bottom sheet — is built from scratch without any UI framework.",

    objectives: [
      "Build a mobile-first, map-centric interface for location-based food discovery.",
      "Design a fair scoring algorithm that ranks menu items against a user's remaining macros — not just calories.",
      "Build an app-like draggable bottom sheet UI without relying on a component library.",
      "Support priority modes (high protein, low calorie, low fat) and quick filters (drive-thru, under 500 cal, etc.).",
    ],

    techUsed: [
      "Vanilla JavaScript (ES6 modules) — no frontend framework",
      "Vite as the build tool",
      "Leaflet.js for the interactive map, with dark CARTO tiles",
      "A hand-built pub/sub state store for reactive UI updates",
      "Modular CSS system with a mobile-device frame layout for desktop viewing",
    ],

    achievements: [
      "Engineered a 0–100 Macro Fit Score algorithm weighting 4 macros (calories, protein, carbs, fat) across 3 priority modes (high-protein, low-cal, low-fat), rendered as 3-tier color-coded pins on a Leaflet.js map.",
      "Designed a modular ES6 architecture with a custom Pub/Sub state store supporting both per-key and wildcard listeners.",
      "Built a 3-state draggable bottom sheet supporting both touch and mouse input, with velocity-based snapping between collapsed/half/expanded states.",
      "Implemented three configurable priority modes that re-weight the scoring formula per user preference.",
      "Built a reactive state store from scratch to keep the map, sheet, and filters in sync without React or Vue.",
    ],

    visuals: [],

    challenges: [
      {
        title: "Scoring Fairly Across Very Different Foods",
        issue: "A naive 'closest to remaining calories' score unfairly penalizes small snacks and rewards huge meals that happen to match one number.",
        solution: "Built a multi-dimensional weighted score across all four macros with a defined 'sweet spot' ratio band, plus a variance-based bonus for meals that use macros proportionally rather than maxing out just one.",
      },
      {
        title: "Native Drag-and-Snap Without a Library",
        issue: "Building an app-like draggable sheet from raw touch events is finicky — naive implementations feel laggy or snap to the wrong state.",
        solution: "Tracked touch velocity rather than just final position, biasing the snap decision toward the direction of the gesture, combined with a custom cubic-bezier transition to mimic native sheet physics.",
      },
      {
        title: "State Sync Without a Framework",
        issue: "Keeping the map, bottom sheet, and filters in sync without React's reactivity.",
        solution: "Wrote a minimal pub/sub store where any part of the UI can subscribe to a specific state key and re-render only when that key changes.",
      },
    ],

    conclusion:
      "MacroSpots went through a real architectural pivot mid-project — from a traditional screen-based single-page app to a map-first design, closer to how modern delivery apps work. That redesign decision, and building the physics-based interactions to support it, is the part of this project I'm most proud of.",
  },

  {
    slug: "scrabble",
    shortTitle: "Scrabble",
    title: "Scrabble — Swing GUI with AI Opponent",
    tagline:
      "A full desktop implementation of Scrabble with a clickable board, an AI opponent, undo/redo, and save/load.",
    category: "Desktop / Game",
    status: "SHIPPED",
    team: "Team of 4",
    role: "See conclusion for scope",
    techTags: ["Java", "Java Swing", "MVC", "AI"],
    repo: "https://github.com/Yuvi-Pain/Scrabble-Game-",

    summary:
      "A full Java Swing implementation of Scrabble built with a strict MVC architecture across 18 classes, supporting both human and AI players on a drag-and-drop 15x15 board. Word placements are validated against a 9,999-word dictionary with live Scrabble-rule scoring, alongside undo/redo and save/load.",

    objectives: [
      "Recreate core Scrabble mechanics — tile placement, adjacency rules, scoring — with a clickable GUI.",
      "Implement an AI opponent capable of finding and playing legal words on its own.",
      "Support game-state persistence (save/load) and move history (undo/redo).",
      "Allow custom board layouts to be loaded from an external JSON file.",
    ],

    techUsed: [
      "Java Swing (JFrame, custom JButton grid) for the UI",
      "Strict MVC architecture across 18 classes: Model, View, Controller, AIPlayer, Board, Bag",
      "Dual-stack pattern for undo/redo",
      "Serializable game state for save/load",
      "JSON parsing for custom board loading",
      "JUnit for testing (12 tests across game logic, AI behavior, and board state)",
    ],

    achievements: [
      "Built a full MVC architecture in Java Swing across 18 classes (Model, View, Controller, AIPlayer, Board, Bag).",
      "Validated word placements against a 9,999-word dictionary with live Scrabble-rule scoring on a drag-and-drop 15x15 board.",
      "Built a working AI opponent: it attempts up to 2,000 randomized real words per turn, checking each against its hand and the board's existing tiles before committing — falling back to a pass if nothing valid is found.",
      "Implemented undo/redo via a dual-stack pattern, and save/load using Java Serializable.",
      "Built a custom board loader that reads a JSON layout, so games aren't limited to the standard board.",
      "Covered game logic, AI behavior, and board state with 12 JUnit tests.",
    ],

    visuals: [
      { src: "/images/scrabble/uml.jpg", caption: "MVC architecture (Milestone 4 UML)" },
    ],

    challenges: [
      {
        title: "Building a Competent but Fast AI Opponent",
        issue: "Searching for a valid, legally-placeable word is combinatorially expensive if done exhaustively.",
        solution: "Used a bounded randomized search (up to 2,000 attempts per turn) that filters against the player's current hand and required linking character before attempting placement — fast enough to feel responsive while still finding legal plays most turns.",
      },
      {
        title: "Undo/Redo Across a Stateful GUI",
        issue: "Reverting board/player state cleanly without corrupting the Swing view.",
        solution: "Routed all state changes through a central event mechanism so undo/redo could restore prior model snapshots and simply trigger a view refresh.",
      },
      {
        title: "Blank Tile Bugs",
        issue: "Blank tile letter assignment was a known source of bugs late into development.",
        solution: "Isolated blank-tile logic into its own model/controller/view trio rather than special-casing it inside the main board logic — made bugs easier to track down and fix in isolation.",
      },
    ],

    conclusion:
      "This was a 4-person team project (SYSC 3310). The game is a full desktop GUI application — not text-based — with a working AI opponent, undo/redo, and save/load built on a strict MVC foundation.",
  },

  {
    slug: "online-bookstore",
    shortTitle: "Online Bookstore",
    title: "Online Bookstore",
    tagline:
      "A full-stack Spring Boot e-commerce platform with role-based access, search, reviews, and an admin dashboard — built to formal IEEE testing standards.",
    category: "Full-Stack Web",
    status: "SHIPPED",
    team: "Team of 5",
    role: "Book catalog page · search · reviews UI",
    techTags: ["Java 21", "Spring Boot", "Spring Security", "JPA/Hibernate", "Thymeleaf"],
    repo: "https://github.com/Yuvi-Pain/SYSC4806_group_25_online_book_store",

    summary:
      "A full-stack e-commerce bookstore built with Spring Boot, supporting two roles — Customer and Admin. Customers can browse, search, review, and purchase books; admins manage inventory and view order analytics through a dedicated dashboard. The system is organized as domain-based packages (security, inventory, point-of-sale, common), each with its own MVC layers.",

    objectives: [
      "Build a role-based e-commerce flow (Customer vs Admin) with authentication and access control.",
      "Design a normalized (3NF) relational schema covering customers, books, carts, orders, and reviews.",
      "Implement search and browsing for the book catalog.",
      "Add a 1–5 star review system on book detail pages.",
      "Reach comprehensive automated test coverage across all packages.",
    ],

    techUsed: [
      "Java 21, Spring Boot 3.3, Spring Web MVC",
      "Spring Security 6 for authentication and role-based access control",
      "Spring Data JPA / Hibernate as the ORM layer",
      "Thymeleaf for server-rendered templates",
      "H2 (dev) and MySQL/Azure SQL (prod)",
      "Maven, JUnit 5, Mockito, AssertJ, JaCoCo",
      "Hosted on Microsoft Azure (SQL Database + App Service)",
    ],

    achievements: [
      "Designed RESTful endpoints using a layered architecture (controller/service/repository) across 15+ classes, integrated with JPA repositories for persistence.",
      "Configured Spring Security with role-based access control for 3 user tiers (customer/admin/staff), blocking 100% of unauthorized requests during penetration testing.",
      "Delivered a complete e-commerce flow: browsing, filtered search, cart, checkout, and order history.",
      "Built a 1–5 star review system integrated into the book details page.",
      "Shipped a 26+ class test suite (19 unit, 13 integration) following ISO/IEC/IEEE 29119-3:2021 testing standards.",
      "Deployed to Azure with a working CI/CD pipeline.",
    ],

    visuals: [
      { src: "/images/bookstore/schema.png", caption: "Database schema (ER diagram)" },
    ],

    challenges: [
      {
        title: "Searching Across Multiple Book Fields",
        issue: "Customers expect a single search box to match a title, an author's name, or a category — not three separate filters. An exact-match query would miss almost everything (searching 'tolkien' wouldn't find 'J.R.R. Tolkien').",
        solution: "Wrote a single query that checks the title, author, and category fields together, case-insensitively, using partial matching so a search stays forgiving of casing and partial input.",
      },
      {
        title: "Combining Free-Text Search with Structured Filters",
        issue: "The Shop page needed to support a keyword search and category/price-range filters at the same time, without two separate code paths.",
        solution: "Built the filtering query so each condition (keyword, category, min/max price) is only applied if it's actually provided, letting search and filters compose together instead of conflicting.",
      },
      {
        title: "Displaying Reviews Without Slowing Down the Book Details Page",
        issue: "Naively loading every review for a book alongside its details risked extra round trips and a cluttered page for books with many reviews.",
        solution: "Kept review fetching as its own dedicated service call scoped to a single book ID, so the reviews UI loads and renders independently of the core book details.",
      },
    ],

    conclusion:
      "Working within a 5-person team on a project following formal IEEE/ISTQB testing standards gave me experience with real-world collaborative development. My specific contributions were the book-viewing catalog page, the search functionality, and the reviews UI on the book details page.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
