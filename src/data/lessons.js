// @bypass-validate
export const lessons = [
  {
    id: 'intro-backend',
    section: 'Foundations',
    difficulty: 'beginner',
    title: 'Introduction to Backend Development',
    content: [
      {
        type: 'text',
        text: 'Every application you use — from Instagram to Google Docs — has two sides: the frontend (what you see and touch) and the backend (everything that happens behind the scenes). Frontend code runs in the user\'s browser. Backend code runs on remote machines called servers. Understanding backend development transforms you from someone who can build webpages into someone who can build entire web applications.'
      },
      {
        type: 'heading',
        text: 'What is a Server?'
      },
      {
        type: 'text',
        text: 'A server is a computer program (or physical machine) that waits for incoming requests and sends back responses. The word "server" literally means "one that serves" — it serves data to anyone who asks.'
      },
      {
        type: 'text',
        text: 'Think of a restaurant. The kitchen (server) doesn\'t walk up to tables asking what people want. Instead, it listens for orders coming from waiters (HTTP requests). Each order specifies exactly what the customer wants, and the kitchen prepares the right dish (response). The restaurant has a specific street address (IP address) with numbered doors for different types of service (ports).'
      },
      {
        type: 'note',
        label: 'Why understanding ports matters',
        variant: 'info',
        text: 'Ports are like doors on a building. A single server can run many services simultaneously — a web server on port 80, a database on port 5432, an email server on port 25. Each service listens on its own port. This is why URLs sometimes include port numbers (like localhost:3000) — port 3000 is where your Fastify application is listening.'
      },
      {
        type: 'text',
        text: 'Behind the scenes, this communication happens over TCP/IP — the Internet\'s fundamental protocol suite. TCP (Transmission Control Protocol) guarantees that data arrives complete and in order. When your browser types a URL, it opens a TCP connection to the server\'s IP address on a specific port, sends an HTTP message over that connection, and waits for the response.'
      },
      {
        type: 'diagram',
        alt: 'Client-server architecture diagram showing browser sending HTTP request to server and receiving HTTP response',
        label: 'Client → [HTTP Request: GET /api/users] → Server → [Database Query] → [HTTP Response: JSON Data] → Client'
      },
      {
        type: 'heading',
        text: 'HTTP Requests and Responses'
      },
      {
        type: 'text',
        text: 'HTTP (Hypertext Transfer Protocol) is the language that browsers and servers speak to each other. It was invented by Tim Berners-Lee in 1989 as part of the World Wide Web project. Every single thing you do on the web — loading a page, submitting a form, watching a video — happens through HTTP requests and responses.'
      },
      {
        type: 'text',
        text: 'An HTTP request is a carefully structured message containing:'
      },
      {
        type: 'list',
        items: [
          'Method — the verb (GET = read, POST = create, PUT = replace, PATCH = update partially, DELETE = remove)',
          'URL/Path — the specific resource being addressed (e.g., /api/users/42 targets user #42)',
          'Headers — key-value metadata: what format the client accepts, authentication tokens, the type of content being sent, caching directives',
          'Body — the actual data payload (only present for POST, PUT, and PATCH methods)'
        ]
      },
      {
        type: 'text',
        text: 'The server reads this message and sends back an HTTP response:'
      },
      {
        type: 'list',
        items: [
          'Status Code — a 3-digit number in defined ranges: 2xx = success, 3xx = redirection, 4xx = client error (you messed up), 5xx = server error (we messed up)',
          'Headers — response metadata: content type, content length, caching instructions, cookies to set',
          'Body — the actual data being returned (HTML for pages, JSON for APIs, binary for files)'
        ]
      },
      {
        type: 'note',
        label: 'Why HTTP is stateless',
        variant: 'info',
        text: 'HTTP is deliberately "stateless" — each request is completely independent. The server doesn\'t remember you between requests. This was an intentional design choice: statelessness makes servers simpler, more scalable, and easier to cache. When you need state (like "keep me logged in"), we build it on top using cookies, tokens, or sessions — but HTTP itself remains stateless underneath.'
      },
      {
        type: 'heading',
        text: 'What is an API?'
      },
      {
        type: 'text',
        text: 'An API (Application Programming Interface) is a contract between two pieces of software. It says: "If you send me a request that looks like this, I promise to send you back a response that looks like that." APIs are the reason your weather app can show the forecast (it calls a weather API), your payment goes through (it calls a payment processor\'s API), and ChatGPT can answer your questions (you\'re using an API right now).'
      },
      {
        type: 'text',
        text: 'In web development, the most common API style is REST (Representational State Transfer). REST uses standard HTTP methods mapped to CRUD operations (Create, Read, Update, Delete):'
      },
      {
        type: 'list',
        items: [
          'GET /users → Retrieve a list of all users',
          'GET /users/:id → Retrieve one specific user by their ID',
          'POST /users → Create a brand new user (data sent in the request body)',
          'PUT /users/:id → Completely replace an existing user\'s data',
          'PATCH /users/:id → Partially update specific fields of an existing user',
          'DELETE /users/:id → Remove a user from the system'
        ]
      },
      {
        type: 'note',
        label: 'Why REST became dominant',
        variant: 'tip',
        text: 'REST won over alternatives like SOAP (an older, XML-heavy protocol) because it leverages HTTP itself — the same protocol browsers already use. This means REST APIs work with every programming language, every browser, and every HTTP client library ever written. No special software needed — just HTTP, which everything already understands.'
      },
      {
        type: 'heading',
        text: 'What is a Database?'
      },
      {
        type: 'text',
        text: 'A database is an organized collection of data that persists even when the server restarts. Without a database, every time your server restarted, it would forget everything — every user, every post, every transaction. Databases solve the persistence problem.'
      },
      {
        type: 'text',
        text: 'There are several major categories of databases, each designed for different use cases:'
      },
      {
        type: 'list',
        items: [
          'Relational databases (PostgreSQL, MySQL, SQLite) — store data in tables with rows and columns, like a spreadsheet. Tables can reference each other through foreign keys. Queried using SQL (Structured Query Language). They enforce strict schemas — every row must have the same columns. This rigidity is a feature: it prevents bad data from entering the system.',
          'Document databases (MongoDB, CouchDB) — store data as flexible JSON-like documents. Each document can have different fields. No strict schema enforcement. Great for rapidly evolving data models where flexibility matters more than consistency.',
          'Key-value stores (Redis, Memcached) — the simplest database: you give it a key, it gives you back a value. Extremely fast (microsecond response times) because data lives entirely in RAM. Used primarily for caching, session storage, and real-time features.'
        ]
      },
      {
        type: 'text',
        text: 'The backend sits between the client and the database. It never lets clients talk to the database directly — that would be a massive security hole. Instead, the backend validates every request, applies business rules, queries the database safely, and returns only what the client is allowed to see.'
      },
      {
        type: 'note',
        label: 'Why direct database access is dangerous',
        variant: 'warning',
        text: 'If you let a browser talk directly to your database, a malicious user could delete all your data with a single request, steal other users\' private information, or bypass any business rules you\'ve set up. The backend acts as a security guard — it checks every request, verifies permissions, and only allows safe operations through.'
      },
      {
        type: 'heading',
        text: 'Why Do We Need a Backend?'
      },
      {
        type: 'text',
        text: 'It\'s common for beginners to ask: "Can\'t I just do everything in the frontend?" It\'s a fair question. Here\'s why the answer is no — every serious application needs a backend:'
      },
      {
        type: 'list',
        items: [
          'Security — Sensitive operations (charging credit cards, verifying passwords, accessing user data) must happen on machines you control. Frontend code is 100% visible to anyone who opens the browser\'s developer tools. Your database password, your API keys, your business logic — if it lives in the frontend, it\'s public.',
          'Data Persistence — Browser storage (localStorage, sessionStorage) is wiped when users clear their data or switch devices. A database on a server persists indefinitely, accessible from any device.',
          'Authentication — "Is this person really who they claim to be?" That question requires checking passwords, tokens, and session data — all of which must be stored on a secure server, never in the browser.',
          'Business Logic — Rules like "a user can only have 3 active subscriptions" or "apply a 10% discount on orders over $100" must be enforced on the server. If these rules live in the frontend only, anyone can modify the JavaScript and bypass them.',
          'Shared State — When multiple users interact (chat apps, multiplayer games, collaborative editing), the server is the single source of truth that keeps everyone in sync.',
          'Performance — Heavy computation (image processing, data analysis, machine learning) belongs on powerful servers, not on users\' phones and laptops.'
        ]
      },
      {
        type: 'note',
        label: 'The frontend-backend boundary',
        variant: 'tip',
        text: 'A useful mental model: the frontend is for presentation and user interaction. The backend is for authority and persistence. Never trust data that comes from the frontend — always validate on the server. Never put secrets in the frontend — they\'re not secret there. This principle will save you from countless security disasters.'
      }
    ],
    quiz: [
      {
        question: 'Which HTTP method is typically used to retrieve data from a server?',
        options: ['POST', 'GET', 'DELETE', 'PATCH'],
        correct: 1
      },
      {
        question: 'What does API stand for?',
        options: [
          'Automated Programming Interface',
          'Application Programming Interface',
          'Applied Protocol Integration',
          'Application Process Interface'
        ],
        correct: 1
      },
      {
        question: 'A 404 status code means:',
        options: ['Success', 'Server error', 'Resource not found', 'Unauthorized'],
        correct: 2
      },
      {
        question: 'Which of these is NOT a backend responsibility?',
        options: ['Database queries', 'User authentication', 'Rendering CSS animations', 'Input validation'],
        correct: 2
      }
    ]
  },

  {
    id: 'what-is-fastify',
    section: 'Foundations',
    difficulty: 'beginner',
    title: 'What is Fastify?',
    content: [
      {
        type: 'text',
        text: 'Fastify is a high-performance web framework for Node.js. But that sentence alone doesn\'t explain why it matters. Let\'s unpack it: in the Node.js ecosystem, there are dozens of web frameworks. Each makes different tradeoffs. Fastify was created by Matteo Collina and Tomas Della Vedova (core Node.js contributors) to answer a specific question: "What if a framework could be both the fastest AND the most developer-friendly?"'
      },
      {
        type: 'text',
        text: 'Fastify provides a powerful plugin architecture, schema-based validation, and excellent logging capabilities — all while being one of the fastest frameworks in any language. Companies like Microsoft, NASA, and BBC use Fastify in production because it scales to millions of requests without falling over.'
      },
      {
        type: 'note',
        label: 'Why "Fastify" instead of just optimizing Express?',
        variant: 'info',
        text: 'The creators tried to optimize Express for years. They eventually realized that Express\'s architecture — particularly its middleware chain and lack of schema awareness — fundamentally limits performance. Fastify was a clean-slate design: every internal decision was made with performance as a first-class constraint. The result is a framework that can handle ~65,000 requests/second on modest hardware versus Express\'s ~15,000. That\'s a 4x difference in throughput — meaning you need 4x fewer servers to handle the same traffic.'
      },
      {
        type: 'heading',
        text: 'Framework vs Runtime: The Crucial Distinction'
      },
      {
        type: 'text',
        text: 'Node.js is a JavaScript runtime — it\'s the engine that executes your JavaScript code. Fastify is a framework — it\'s a set of patterns and utilities built on top of that engine. Understanding this distinction is critical because it explains what you get for free and what you\'d have to build yourself.'
      },
      {
        type: 'text',
        text: 'Without any framework, building a web server in raw Node.js requires you to manually:'
      },
      {
        type: 'list',
        items: [
          'Parse raw HTTP request bytes into meaningful data structures (headers, body, URL)',
          'Build a routing table to match incoming URLs to the right handler functions',
          'Handle URL parameters (/users/:id needs to extract "id" from the URL)',
          'Parse query strings (?page=1&limit=10) into usable key-value objects',
          'Parse request bodies — which arrive as streams — and handle different content types (JSON, form data, multipart)',
          'Serialize response data into properly formatted HTTP responses with correct headers',
          'Handle errors gracefully without crashing the entire server process',
          'Manage CORS headers, authentication, rate limiting, and dozens of other cross-cutting concerns'
        ]
      },
      {
        type: 'text',
        text: 'Fastify handles all of this for you, and does it faster than you could do it yourself. Each of these features represents hundreds of lines of carefully optimized code that you don\'t have to write, test, or maintain.'
      },
      {
        type: 'heading',
        text: 'Key Characteristics That Matter'
      },
      {
        type: 'text',
        text: 'What sets Fastify apart from the dozens of other Node.js frameworks? These characteristics define its identity:'
      },
      {
        type: 'list',
        items: [
          'Extreme performance — Fastify uses a radix tree (compressed trie) for routing instead of iterating through an array of routes like Express does. This means routing speed stays constant (O(k) where k is URL length) regardless of how many routes you have. Express gets slower (O(n)) as you add routes.',
          'Plugin-based architecture — Everything in Fastify is a plugin. Routes, middleware, database connections, authentication — all plugins. Each plugin creates an encapsulated scope, meaning code in one plugin cannot accidentally interfere with code in another. This is the secret to building large applications without creating a tangled mess.',
          'Schema-first validation — Instead of manually checking "is this field a number? is this email valid?", you describe your data shapes using JSON Schema. Fastify validates every incoming request automatically before it reaches your handler. If validation fails, the request is rejected with a detailed error message — your handler never sees bad data.',
          'First-class TypeScript support — Fastify\'s core is written in TypeScript. Schema definitions automatically infer TypeScript types, so your IDE provides autocompletion for request.body, request.params, etc. No manual type assertions needed.',
          'Rich official plugin ecosystem — @fastify/cors, @fastify/jwt, @fastify/postgres, @fastify/swagger, and dozens more. These plugins are maintained by the Fastify team itself, so they\'re reliable, well-tested, and follow consistent patterns.',
          'Pino logger built-in — Logging is not an afterthought. Fastify includes Pino, one of the fastest JSON loggers available, by default. Structured logging means every log line is a JSON object that can be parsed, searched, and analyzed by log aggregation tools.'
        ]
      },
      {
        type: 'note',
        label: 'How the radix tree routing works',
        variant: 'info',
        text: 'A radix tree (also called a compressed trie or Patricia trie) is a space-optimized tree data structure where each node that is an only child is merged with its parent. When Fastify receives a request, it walks down the tree character by character through the URL path. This means /users/42 and /users/999 both share the /users/ prefix in the tree, making lookup extremely fast regardless of how many routes you\'ve registered. Express, by contrast, iterates through an array testing each route\'s regex pattern one by one.'
      },
      {
        type: 'heading',
        text: 'Real-World Use Cases'
      },
      {
        type: 'text',
        text: 'Fastify excels in scenarios where performance and reliability matter:'
      },
      {
        type: 'list',
        items: [
          'RESTful APIs and microservices — Fastify is the ideal foundation for API servers. Its schema validation doubles as API documentation (via @fastify/swagger), and its performance means you can serve more traffic with fewer resources.',
          'Real-time applications — With @fastify/websocket, you can handle thousands of simultaneous WebSocket connections, enabling chat apps, live dashboards, and collaborative tools.',
          'API gateways — Fastify\'s speed makes it perfect for API gateways that sit in front of multiple backend services, handling routing, authentication, and rate limiting in a single layer.',
          'Serverless functions — Fastify\'s fast cold start time (under 100ms) makes it suitable for AWS Lambda, Vercel, and other serverless platforms where startup time directly impacts user experience.',
          'Backend for mobile apps — Mobile apps make many small API calls. Fastify\'s low latency per request means snappier app experiences.',
          'Any application where performance equals cost savings — Fewer servers handling the same load means lower cloud bills. Fastify\'s efficiency translates directly to money saved.'
        ]
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// A minimal Fastify server in 10 lines
import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  await fastify.listen({ port: 3000 });
};

start();`
      },
      {
        type: 'note',
        label: 'What you just saw',
        variant: 'tip',
        text: 'Those 10 lines create a fully functional HTTP server with structured request/response logging, automatic JSON content-type headers, and async error handling. In raw Node.js, achieving the same would require ~50 lines of code and you\'d still be missing proper error handling and logging.'
      }
    ],
    quiz: [
      {
        question: 'Fastify is built on top of which runtime?',
        options: ['Python', 'Node.js', 'Ruby', 'Go'],
        correct: 1
      },
      {
        question: 'What logging library does Fastify use by default?',
        options: ['Winston', 'Morgan', 'Pino', 'Bunyan'],
        correct: 2
      },
      {
        question: 'Fastify uses a ____ architecture for extending functionality.',
        options: ['Middleware', 'Plugin', 'Module', 'Component'],
        correct: 1
      },
      {
        question: 'What is the time complexity of route matching in Fastify\'s radix tree?',
        options: ['O(n) — linear with number of routes', 'O(k) — constant with URL length', 'O(n²) — quadratic', 'O(log n) — logarithmic'],
        correct: 1
      }
    ]
  },

  {
    id: 'why-fastify',
    section: 'Foundations',
    difficulty: 'beginner',
    title: 'Why Use Fastify?',
    content: [
      {
        type: 'heading',
        text: 'Speed and Performance: The Numbers Don\'t Lie'
      },
      {
        type: 'text',
        text: 'Fastify is one of the fastest Node.js web frameworks in existence. In the TechEmpower Web Framework Benchmarks (the industry standard for framework performance comparison), Fastify consistently ranks near the top among all frameworks — not just JavaScript frameworks.'
      },
      {
        type: 'text',
        text: 'The secret to this speed isn\'t one big optimization — it\'s hundreds of small ones, each engineered with performance as a first-class constraint:'
      },
      {
        type: 'list',
        items: [
          'Radix tree routing — Instead of iterating through an array of routes checking regex patterns (Express\'s approach), Fastify builds a compressed prefix tree. Route matching happens in O(k) time where k is the URL length, regardless of how many routes you have. This means adding 10,000 routes doesn\'t slow down route matching at all.',
          'Schema-based JSON serialization — When you define a response schema, Fastify generates a specialized serializer function that is 2-3x faster than JSON.stringify(). It knows exactly what fields to include and their types, so it skips the reflection and type-checking that JSON.stringify() does on every call.',
          'Reused string buffers — Fastify pre-allocates and reuses internal buffers for headers and small responses, avoiding the garbage collection pressure that plagues high-throughput Node.js servers.',
          'Minimal middleware overhead — Express middleware wraps every handler in layers of function calls. Fastify\'s hook system executes only the hooks you\'ve registered, with minimal indirection.',
          'Async-first from the ground up — Fastify was designed in the async/await era, not retrofitted to support it. This means cleaner stack traces, simpler error handling, and better performance through native Promise microtasks.'
        ]
      },
      {
        type: 'diagram',
        alt: 'Performance comparison bar chart: Fastify ~65k req/sec, Express ~15k req/sec, Hapi ~12k req/sec',
        label: 'Requests/sec (higher is better):\nFastify ████████████████████████████████ 65,000\nKoa     ██████████ 20,000\nExpress ███████ 15,000\nHapi    ██████ 12,000'
      },
      {
        type: 'note',
        label: 'Why should you care about 4x performance?',
        variant: 'info',
        text: 'A 4x performance difference means you need 4x fewer servers to handle the same traffic. If your cloud bill is $2,000/month running Express, the same application on Fastify could cost $500/month. At scale (thousands of servers), the difference is measured in millions of dollars. Performance is a feature that saves real money.'
      },
      {
        type: 'heading',
        text: 'Minimal Overhead: Pay for What You Use'
      },
      {
        type: 'text',
        text: 'Fastify follows a "pay for what you use" philosophy. The core framework is a lean ~15KB — minimal enough that it starts instantly. Everything beyond basic routing (authentication, CORS, compression, file uploads) is an opt-in plugin.'
      },
      {
        type: 'text',
        text: 'This matters because every kilobyte of unnecessary code is code that could have bugs, needs maintenance, increases your attack surface, and slows down startup. Fastify gives you a tight core and lets you choose exactly what you add on top.'
      },
      {
        type: 'note',
        label: 'The framework bloat problem',
        variant: 'warning',
        text: 'Many frameworks take the opposite approach: bundle everything you might ever need into the core. The result is frameworks that take seconds to start, include features you\'ll never use, and have security vulnerabilities in code paths you didn\'t even know existed. Fastify\'s plugin model means you only install what you actually need, and you know exactly what\'s running in your application.'
      },
      {
        type: 'heading',
        text: 'Plugin System: The Secret to Maintainable Code'
      },
      {
        type: 'text',
        text: 'Fastify\'s plugin system is arguably its most important architectural feature. It\'s not just a way to add features — it\'s a way to organize your entire application into isolated, testable, reusable pieces.'
      },
      {
        type: 'text',
        text: 'Unlike Express where middleware is a flat chain (every middleware function can see and modify everything), Fastify plugins create encapsulated scopes. A hook registered inside a plugin only affects routes in that plugin. A decorator created in a plugin doesn\'t leak to the parent. This prevents the "spooky action at a distance" problem that makes large Express applications difficult to maintain.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Plugins are encapsulated — routes defined here are scoped
import fp from 'fastify-plugin';

async function userRoutes(fastify, opts) {
  fastify.get('/users', async (req, reply) => {
    return [{ id: 1, name: 'Alice' }];
  });

  // Child plugin — inherits encapsulation from parent
  fastify.register(adminRoutes, { prefix: '/admin' });
}

// Export as a reusable plugin
export default fp(userRoutes);`
      },
      {
        type: 'heading',
        text: 'Schema Validation: Why It Changes Everything'
      },
      {
        type: 'text',
        text: 'In most frameworks, validation is something you add yourself — usually with a library like Joi or Zod, called manually in every route handler. This is repetitive, error-prone, and easy to forget.'
      },
      {
        type: 'text',
        text: 'Fastify integrates validation directly into its core. You describe your data shapes using JSON Schema in the route options, and Fastify validates every request automatically before your handler runs. If validation fails, the request is rejected with a 400 status code and a detailed error message — your handler never even sees bad data.'
      },
      {
        type: 'text',
        text: 'This approach provides five critical benefits:'
      },
      {
        type: 'list',
        items: [
          'Automatic type coercion — string "42" becomes integer 42, ISO date strings become Date objects — all handled before your code runs',
          'Detailed error messages — failed validation returns exactly which field failed and why, in a structured format the client can understand',
          'Faster JSON serialization — response schemas generate specialized serializers that are 2-3x faster than JSON.stringify() because they know the exact shape of the data',
          'Automatic Swagger/OpenAPI documentation — your schemas become your API documentation, always in sync because they\'re the same source of truth',
          'Protection against injection and malformed input — validation rejects unexpected fields, oversized values, and malicious payloads before they can do harm'
        ]
      },
      {
        type: 'heading',
        text: 'Comparison with Other Frameworks'
      },
      {
        type: 'text',
        text: 'Choosing a framework is one of the most consequential decisions in a project. Let\'s compare Fastify honestly against the alternatives:'
      },
      {
        type: 'text',
        text: 'Express (2010) — The most popular Node.js framework with over 30 million weekly downloads. Express is simple, battle-tested, and has an enormous middleware ecosystem. However, Express was designed in the callback era (pre-2017), so async error handling requires wrapper libraries. It has no built-in validation, slow route matching (linear array scan), and its middleware chain creates deep call stacks. Express is a fine choice when you need maximum ecosystem compatibility, but it shows its age in performance and developer experience.'
      },
      {
        type: 'text',
        text: 'Hapi (2011) — A configuration-driven framework by the Walmart Labs team, designed for large enterprise teams. Hapi has excellent built-in features (validation, caching, authentication) and a strong plugin system. However, Hapi is heavier, slower, and has a steeper learning curve due to its configuration-over-code philosophy. Fastify took inspiration from Hapi\'s plugin system but implemented it with a focus on speed and simplicity.'
      },
      {
        type: 'text',
        text: 'Koa (2013) — Created by the Express team as a modern reimagining using async/await. Koa is extremely minimal — it\'s essentially just a middleware runner with context objects. This minimalism means you need many third-party libraries for basic features. Fastify offers a more complete out-of-the-box experience with significantly better performance.'
      },
      {
        type: 'text',
        text: 'NestJS (2017) — A full-featured framework using decorators and dependency injection, heavily inspired by Angular. NestJS is excellent for large enterprise applications but adds significant abstraction overhead. Fastify can actually be used as the underlying HTTP engine in NestJS, giving you both NestJS\'s structure and Fastify\'s performance.'
      },
      {
        type: 'note',
        label: 'The right tool for the right job',
        variant: 'tip',
        text: 'No framework is universally "best." Express has the largest ecosystem and simplest learning curve. NestJS has the most structure for large teams. But when performance, developer experience, and production readiness are your top priorities — which they should be for most new projects — Fastify is the strongest choice in the Node.js ecosystem today.'
      }
    ],
    quiz: [
      {
        question: 'What data structure does Fastify use for efficient routing?',
        options: ['Binary tree', 'Radix tree', 'Hash table', 'Linked list'],
        correct: 1
      },
      {
        question: 'Fastify\'s JSON serialization is faster than JSON.stringify() because:',
        options: [
          'It uses a different encoding',
          'It skips validation',
          'It pre-compiles schemas for serialization',
          'It runs in a separate thread'
        ],
        correct: 2
      },
      {
        question: 'The "pay for what you use" philosophy means:',
        options: [
          'Fastify requires a paid license',
          'You install features as opt-in plugins',
          'Each request costs money',
          'Only large companies should use it'
        ],
        correct: 1
      },
      {
        question: 'Which framework can use Fastify as its underlying HTTP engine?',
        options: ['Express', 'Koa', 'NestJS', 'Hapi'],
        correct: 2
      }
    ]
  },

  {
    id: 'core-concepts',
    section: 'Core Concepts',
    difficulty: 'intermediate',
    title: 'Core Concepts: Routes, Hooks, and the Request Lifecycle',
    content: [
      {
        type: 'heading',
        text: 'Routes: The Foundation of Every API'
      },
      {
        type: 'text',
        text: 'Routes are the public face of your application. Each route is a promise: "If you send an HTTP request to this URL with this method, I will process it and return a response." Understanding routes deeply is essential because they define the contract between your server and every client that will ever use it.'
      },
      {
        type: 'text',
        text: 'In Fastify, routes are defined using method-specific functions: fastify.get(), fastify.post(), fastify.put(), fastify.patch(), fastify.delete(), fastify.options(), and fastify.head(). You can also use fastify.route() for more complex configurations or fastify.all() to match any HTTP method.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Basic route — the simplest possible endpoint
fastify.get('/hello', async (request, reply) => {
  return { message: 'Hello, World!' };
});

// Route with URL parameters — dynamic path segments
fastify.get('/users/:id', async (request, reply) => {
  const { id } = request.params;  // Extracted from the URL
  return { userId: id };
});

// Route with query string — optional filtering parameters
fastify.get('/search', async (request, reply) => {
  const { q, page, limit } = request.query;
  return { results: [], query: q, page, limit };
});

// Route with JSON body — data sent by the client
fastify.post('/users', async (request, reply) => {
  const { name, email } = request.body;
  // request.body is automatically parsed from JSON
  return { created: { name, email } };
});`
      },
      {
        type: 'note',
        label: 'Why method-specific functions exist',
        variant: 'info',
        text: 'You might wonder: why fastify.get() instead of fastify.route({ method: "GET" })? The answer is readability and type safety. Each method function restricts the HTTP method at the function level, making your code self-documenting. If you\'re in a fastify.get(), you know without looking that this is a read operation. In TypeScript, the return type can also be inferred differently per method. Plus, it\'s simply faster to type and read.'
      },
      {
        type: 'text',
        text: 'Routes are matched in the order they are registered. This means more specific routes should come before less specific ones. For example, /users/search should be registered before /users/:id, because :id would match the literal string "search" as a parameter.'
      },
      {
        type: 'diagram',
        alt: 'Request lifecycle diagram showing: Request → URL Parsing → Route Matching → Schema Validation → Pre-handler Hooks → Handler → Serialization → Response',
        label: 'Request Lifecycle:\n1. Raw TCP data arrives at the server\n2. HTTP parser extracts method, URL, headers\n3. Radix tree matches URL to a registered route\n4. Body parser reads and parses the request body\n5. Content-Type parser handles JSON, form data, etc.\n6. JSON Schema validates request against the route schema\n7. onRequest hooks fire\n8. preParsing hooks fire\n9. preValidation hooks fire\n10. preHandler hooks fire (auth typically goes here)\n11. Your route handler executes\n12. preSerialization hooks fire\n13. Response body serialized (using schema if provided)\n14. onSend hooks fire (last chance to modify response)\n15. HTTP response sent to client\n16. onResponse hooks fire (for logging/metrics)\n17. If any error occurred: onError hook fires'
      },
      {
        type: 'heading',
        text: 'Hooks: The Lifecycle Control Points'
      },
      {
        type: 'text',
        text: 'Hooks are functions that execute at specific moments in the request lifecycle. They are Fastify\'s equivalent of middleware, but far more structured: each hook has a defined purpose and a guaranteed execution order. You can never accidentally register hooks in the wrong order.'
      },
      {
        type: 'text',
        text: 'There are 8 hook types, each firing at a precisely defined moment:'
      },
      {
        type: 'list',
        items: [
          'onRequest — Fires as soon as a request is received, before any parsing. Ideal for request-level logging, IP-based blocking, or timing the full request lifecycle.',
          'preParsing — Fires before the body is parsed. Use this to modify the raw request stream or add custom body parsers.',
          'preValidation — Fires after the body is parsed but before JSON Schema validation. Use this to add custom validation logic or modify the parsed body.',
          'preHandler — Fires after validation succeeds but before the route handler. This is where authentication and authorization belong — the request is fully parsed and validated, but not yet processed.',
          'preSerialization — Fires after your handler returns but before the response is serialized to JSON. Use this to transform, filter, or redact fields from your response data.',
          'onSend — Fires immediately before the response bytes are written to the socket. The last opportunity to set headers or modify the raw payload.',
          'onResponse — Fires after the full response has been sent. Cannot modify the response — use this for metrics logging and cleanup.',
          'onError — Fires whenever an error occurs at any point in the lifecycle. Use this for centralized error logging and formatting.'
        ]
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Timing every request — a practical example
fastify.addHook('onRequest', async (request, reply) => {
  request.startTime = Date.now();
});

// Authentication guard — runs before the handler
fastify.addHook('preHandler', async (request, reply) => {
  if (!request.headers.authorization) {
    throw fastify.httpErrors.unauthorized();
  }
});

// Add response time header — runs before sending
fastify.addHook('onSend', async (request, reply, payload) => {
  reply.header('X-Response-Time', Date.now() - request.startTime);
  return payload; // Must return the payload
});`
      },
      {
        type: 'note',
        label: 'Express middleware vs Fastify hooks',
        variant: 'warning',
        text: 'In Express, middleware is a linear chain — every middleware function runs for every request unless it calls next() with an error. If you mount middleware in the wrong order, authentication might run after the handler. Fastify\'s named hooks eliminate this entire class of bugs: you can\'t put preHandler logic in an onSend hook because they\'re different APIs. The framework enforces correct ordering.'
      },
      {
        type: 'heading',
        text: 'Request & Reply Objects: Everything You Can Access and Control'
      },
      {
        type: 'text',
        text: 'Fastify provides two objects in every route handler and hook: request and reply. These are enhanced versions of Node.js\'s native IncomingMessage and ServerResponse, with Fastify-specific properties and methods added.'
      },
      {
        type: 'text',
        text: 'The request object gives you access to everything the client sent:'
      },
      {
        type: 'list',
        items: [
          'request.params — URL parameters extracted from dynamic path segments (/users/:id). These are always strings, even if the segment looks like a number.',
          'request.query — Query string parameters parsed into key-value pairs (?name=Alice&age=30). Fastify uses a fast custom parser with automatic type coercion.',
          'request.body — The parsed request body. Fastify automatically handles JSON, URL-encoded form data, and (with @fastify/multipart) file uploads. Content-Type header determines which parser is used.',
          'request.headers — All HTTP headers sent by the client. Header names are lowercased for consistency. Access authorization as request.headers.authorization, never request.headers.Authorization.',
          'request.cookies — Parsed cookies (requires @fastify/cookie plugin). Each cookie becomes a property on this object.',
          'request.ip — The client\'s IP address, respecting X-Forwarded-For headers when behind a proxy.',
          'request.hostname — The hostname the client used to reach your server.',
          'request.protocol — "http" or "https", useful for building absolute URLs.',
          'request.log — A Pino logger instance scoped to this specific request, automatically including the request ID.'
        ]
      },
      {
        type: 'text',
        text: 'The reply object controls exactly what gets sent back to the client:'
      },
      {
        type: 'list',
        items: [
          'reply.send(data) — Send a response explicitly. Useful when you need to send non-JSON data or when the response depends on async operations.',
          'reply.code(statusCode) — Set the HTTP status code fluently. Example: reply.code(201).send({ id: "new" })',
          'reply.status(statusCode) — Alias for reply.code() — sets the status and returns reply for chaining.',
          'reply.header(key, value) — Set a single response header.',
          'reply.headers(object) — Set multiple response headers at once.',
          'reply.redirect(url, code) — Send an HTTP redirect (301, 302, 307, 308).',
          'reply.type(contentType) — Set the Content-Type header (e.g., "text/html").',
          'Returning a value from the handler — The most common pattern. Fastify automatically serializes the return value to JSON, sets Content-Type to application/json, and sends it. If you return a string, it is sent as text/html.'
        ]
      },
      {
        type: 'heading',
        text: 'Error Handling: Why Fastify\'s Approach is Superior'
      },
      {
        type: 'text',
        text: 'Error handling is where many web frameworks fail. Express requires you to wrap every async handler in try/catch or use wrapper libraries. If an error occurs in a non-async callback deep in the middleware chain, it might crash your entire server.'
      },
      {
        type: 'text',
        text: 'Fastify solves this completely: any error thrown anywhere in the request lifecycle — in hooks, handlers, or even in your response serialization — is caught by Fastify\'s error handling system. It logs the error, formats a proper HTTP error response, and continues processing other requests. No crashes, no missed errors.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Fastify provides built-in HTTP error classes via fastify.httpErrors
// No need to install @fastify/sensible — it\'s included by default!
fastify.get('/protected', async (request, reply) => {
  if (!request.headers.authorization) {
    throw fastify.httpErrors.unauthorized('Missing auth token');
    // Automatically becomes: { statusCode: 401, error: "Unauthorized", message: "Missing auth token" }
  }
  return { secret: 'data' };
});

// Custom error handler — format all errors consistently
fastify.setErrorHandler(async (error, request, reply) => {
  // Log the full error with request context
  request.log.error({ err: error, url: request.url }, 'Request failed');

  // Always return a consistent error shape
  reply.status(error.statusCode || 500).send({
    error: error.message,
    statusCode: error.statusCode || 500,
    // In development, include the stack trace for debugging
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  });
});`
      },
      {
        type: 'note',
        label: 'Why never expose stack traces in production',
        variant: 'warning',
        text: 'Stack traces reveal your file structure, library versions, and potentially business logic. An attacker who sees a stack trace learns far more about your system than you want them to. Always check NODE_ENV before including error details in responses.'
      },
      {
        type: 'heading',
        text: 'Validation: Why Schema-First Changes Everything'
      },
      {
        type: 'text',
        text: 'In most frameworks, validation is something you manually add to each route handler. This leads to duplicated validation code, inconsistent error messages, and routes that forget to validate entirely. Fastify inverts this: you describe what valid data looks like, and the framework enforces it.'
      },
      {
        type: 'text',
        text: 'JSON Schema is the language you use to describe your data. It\'s an IETF standard (not Fastify-specific), so the same schemas can be used across different tools and languages. When you attach a schema to a route, Fastify automatically:'
      },
      {
        type: 'list',
        items: [
          'Validates the request body, query string, URL params, and headers against your schemas',
          'Rejects invalid requests with a 400 status code and a structured error detailing exactly what was wrong',
          'Coerces types automatically (string "42" → number 42) when possible',
          'Strips unexpected fields from the request (preventing mass assignment attacks)',
          'Pre-compiles response serializers that are 2-3x faster than JSON.stringify()',
          'Makes your schemas available for Swagger/OpenAPI documentation generation'
        ]
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Route with full schema validation
fastify.post('/users', {
  schema: {
    body: {
      type: 'object',
      required: ['name', 'email'],
      additionalProperties: false,  // Reject unexpected fields
      properties: {
        name: { type: 'string', minLength: 2, maxLength: 100 },
        email: { type: 'string', format: 'email' },
        age: { type: 'integer', minimum: 0, maximum: 150 }
      }
    },
    response: {
      201: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          email: { type: 'string' }
        }
      }
    }
  }
}, async (request, reply) => {
  const { name, email, age } = request.body;
  // At this point, validation has already passed
  // name: guaranteed string, 2-100 chars
  // email: guaranteed valid email format
  // age: guaranteed integer, 0-150 (or undefined if not provided)
  reply.code(201);
  return { id: 'abc123', name, email };
});`
      },
      {
        type: 'note',
        label: 'The security benefit of additionalProperties: false',
        variant: 'tip',
        text: 'Without additionalProperties: false, a client could send { "name": "Alice", "email": "alice@example.com", "isAdmin": true }. Fastify would validate name and email, silently ignore isAdmin, and your handler would run. But what if your code does { ...request.body } and passes it to a database insert? The attacker just set themselves as admin. Setting additionalProperties: false rejects any field not explicitly defined in your schema — a critical security practice.'
      }
    ],
    quiz: [
      {
        question: 'In Fastify, where do URL parameters like /:id get stored?',
        options: ['request.query', 'request.body', 'request.params', 'request.headers'],
        correct: 2
      },
      {
        question: 'Which hook runs before the route handler but after validation?',
        options: ['onRequest', 'preHandler', 'onSend', 'onResponse'],
        correct: 1
      },
      {
        question: 'JSON Schema validation in Fastify provides all of the following EXCEPT:',
        options: ['Input validation', 'Faster serialization', 'Automatic database migration', 'OpenAPI documentation'],
        correct: 2
      },
      {
        question: 'If you throw an error in a route handler, Fastify will:',
        options: ['Crash the server', 'Catch it and format the response', 'Ignore it', 'Retry the request'],
        correct: 1
      }
    ]
  },

  {
    id: 'getting-started',
    section: 'Core Concepts',
    difficulty: 'intermediate',
    title: 'Getting Started with Fastify',
    content: [
      {
        type: 'heading',
        text: 'Prerequisites'
      },
      {
        type: 'list',
        items: [
          'Node.js 18 or later installed on your machine',
          'A code editor (VS Code recommended)',
          'Basic JavaScript knowledge (async/await, arrow functions)',
          'A terminal/command prompt'
        ]
      },
      {
        type: 'heading',
        text: 'Step 1: Create a Project'
      },
      {
        type: 'code',
        lang: 'bash',
        code: `mkdir my-fastify-app
cd my-fastify-app
npm init -y`
      },
      {
        type: 'heading',
        text: 'Step 2: Install Fastify'
      },
      {
        type: 'code',
        lang: 'bash',
        code: 'npm install fastify'
      },
      {
        type: 'heading',
        text: 'Step 3: Create Your Server'
      },
      {
        type: 'text',
        text: 'Create a file called server.js (or use ES modules with .mjs):'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import Fastify from 'fastify';

// Initialize Fastify with logger enabled
const fastify = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: { colorize: true }
    }
  }
});

// Declare a route
fastify.get('/', async (request, reply) => {
  return { message: 'Welcome to Fastify!' };
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server running at http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();`
      },
      {
        type: 'text',
        text: 'Add "type": "module" to your package.json to use ES modules, or use CommonJS with require().'
      },
      {
        type: 'heading',
        text: 'Step 4: Run the Server'
      },
      {
        type: 'code',
        lang: 'bash',
        code: `node server.js
# Output: Server running at http://localhost:3000`
      },
      {
        type: 'heading',
        text: 'Step 5: Test Your Endpoint'
      },
      {
        type: 'text',
        text: 'Open your browser and navigate to http://localhost:3000. You should see:'
      },
      {
        type: 'code',
        lang: 'json',
        code: `{ "message": "Welcome to Fastify!" }`
      },
      {
        type: 'heading',
        text: 'Project Structure Best Practices'
      },
      {
        type: 'text',
        text: 'As your application grows, organize it with a clear structure:'
      },
      {
        type: 'code',
        lang: '',
        code: `my-fastify-app/
├── src/
│   ├── routes/        # Route definitions (one file per resource)
│   │   ├── users.js
│   │   └── posts.js
│   ├── plugins/       # Custom Fastify plugins
│   │   ├── auth.js
│   │   └── database.js
│   ├── schemas/       # JSON Schemas for validation
│   │   └── user.json
│   ├── services/      # Business logic
│   │   └── userService.js
│   └── app.js         # Fastify app factory
├── server.js          # Entry point
├── package.json
└── .env               # Environment variables`
      }
    ],
    quiz: [
      {
        question: 'Which Node.js version is the minimum recommended for Fastify?',
        options: ['Node 10', 'Node 14', 'Node 18', 'Node 20'],
        correct: 2
      },
      {
        question: 'To use ES module imports (import/export) in Node.js with Fastify, you must:',
        options: [
          'Use .mjs extension or add "type": "module" to package.json',
          'Install a transpiler like Babel',
          'ES modules are not supported in Fastify',
          'Use require() instead'
        ],
        correct: 0
      },
      {
        question: 'What does the logger option provide when enabled?',
        options: [
          'File-based logging only',
          'Structured request/response logging via Pino',
          'Console.warn statements',
          'No logging, it just looks nicer'
        ],
        correct: 1
      }
    ]
  },

  {
    id: 'practical-crud',
    section: 'Practical',
    difficulty: 'advanced',
    title: 'Building a CRUD API',
    content: [
      {
        type: 'heading',
        text: 'Overview'
      },
      {
        type: 'text',
        text: 'In this lesson, we\'ll build a complete REST API for managing a collection of books. This covers all CRUD operations with proper validation, error handling, and structure.'
      },
      {
        type: 'note',
        label: 'Why CRUD is the foundation of every API',
        variant: 'info',
        text: 'Every web application — whether it\'s a social network, an e-commerce site, or a banking system — revolves around CRUD operations at its core. A tweet is Created, Read by followers, Updated (edit button), and Deleted. An order on Amazon goes through the exact same four operations. Understanding CRUD deeply means understanding the fundamental building block of every API you will ever build. Master this pattern, and you\'ve mastered 80% of backend development.'
      },
      {
        type: 'heading',
        text: 'Understanding HTTP Semantics in CRUD'
      },
      {
        type: 'text',
        text: 'Before writing code, it\'s essential to understand the theory behind the HTTP methods. Each method has specific semantics — guarantees about what happens when you call it — and violating these guarantees leads to unreliable APIs.'
      },
      {
        type: 'list',
        items: [
          'GET — Safe and Idempotent. "Safe" means it doesn\'t change server state (read-only). "Idempotent" means calling it 1 time or 100 times produces the same result. A GET request should never create, update, or delete anything. Browsers, caches, and proxies rely on this guarantee.',
          'POST — Neither Safe nor Idempotent. Creates a new resource. Calling POST twice creates two resources (non-idempotent). This is the only HTTP method that is not idempotent — a critical distinction that affects retry logic and error handling.',
          'PUT — Not Safe but Idempotent. Completely replaces a resource. Calling PUT 5 times with the same data produces the same result as calling it once. PUT requires sending the entire resource — every field, not just the ones you want to change.',
          'PATCH — Not Safe but may or may not be Idempotent. Partially updates a resource. Unlike PUT, PATCH only requires the fields that changed. However, idempotence depends on the patch format — JSON Merge Patch is idempotent, JSON Patch (with operations like "increment") is not.',
          'DELETE — Not Safe but Idempotent. Removes a resource. Deleting something that\'s already deleted should return 404 the first time and 404 every subsequent time — the end state is the same, so it\'s idempotent.'
        ]
      },
      {
        type: 'note',
        label: 'Why idempotency matters in production',
        variant: 'warning',
        text: 'Network failures happen. A client sends a POST request, the server processes it successfully, but the response gets lost in transit. The client retries, and suddenly you have two charges on a credit card, two orders created, or two users registered with the same email. Idempotency keys are a solution: the client generates a unique key per operation, sends it in a header, and the server deduplicates requests with the same key. This is why Stripe, PayPal, and every payment processor require idempotency keys on POST requests. For PUT and DELETE, idempotency is built into the HTTP semantics — retry safely.'
      },
      {
        type: 'heading',
        text: 'API Design: Resource Naming Conventions'
      },
      {
        type: 'text',
        text: 'The way you name your endpoints is a form of documentation. Consistent naming conventions make your API intuitive and predictable:'
      },
      {
        type: 'list',
        items: [
          'Use plural nouns for collections: /books, not /book or /getBooks',
          'Use hierarchical paths for relationships: /authors/:authorId/books for an author\'s books',
          'Use query parameters for filtering, sorting, and pagination: /books?genre=fiction&sort=year&page=2',
          'Use HTTP methods as verbs (GET, POST, PUT, DELETE) — never put verbs in the URL',
          'Keep URLs lowercase with hyphens as word separators: /book-reviews, not /bookReviews or /BookReviews',
          'Version your API from day one: /v1/books. It\'s far easier to start with versioning than to add it later when you need to make breaking changes.'
        ]
      },
      {
        type: 'heading',
        text: 'Define the Schema'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `const bookSchema = {
  type: 'object',
  required: ['title', 'author'],
  properties: {
    id: { type: 'string' },
    title: { type: 'string', minLength: 1 },
    author: { type: 'string', minLength: 1 },
    year: { type: 'integer', minimum: 1000, maximum: 2100 },
    genre: { type: 'string' }
  }
};

const bookParams = {
  type: 'object',
  required: ['id'],
  properties: {
    id: { type: 'string' }
  }
};`
      },
      {
        type: 'heading',
        text: 'In-Memory Data Store'
      },
      {
        type: 'text',
        text: 'For this example we\'ll use an in-memory array. In production, you\'d use a database like PostgreSQL with @fastify/postgres.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import { randomUUID } from 'node:crypto';

const books = [
  { id: randomUUID(), title: '1984', author: 'George Orwell', year: 1949, genre: 'Dystopian' }
];`
      },
      {
        type: 'heading',
        text: 'GET /books — List All Books'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `fastify.get('/books', {
  schema: {
    response: {
      200: {
        type: 'array',
        items: bookSchema
      }
    }
  }
}, async (request, reply) => {
  return books;
});`
      },
      {
        type: 'heading',
        text: 'GET /books/:id — Get Single Book'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `fastify.get('/books/:id', {
  schema: { params: bookParams, response: { 200: bookSchema } }
}, async (request, reply) => {
  const book = books.find(b => b.id === request.params.id);
  if (!book) {
    throw fastify.httpErrors.notFound('Book not found');
  }
  return book;
});`
      },
      {
        type: 'heading',
        text: 'POST /books — Create a Book'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `fastify.post('/books', {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'author'],
      properties: {
        title: { type: 'string' },
        author: { type: 'string' },
        year: { type: 'integer' },
        genre: { type: 'string' }
      }
    },
    response: { 201: bookSchema }
  }
}, async (request, reply) => {
  const newBook = {
    id: randomUUID(),
    ...request.body
  };
  books.push(newBook);
  reply.code(201);
  return newBook;
});`
      },
      {
        type: 'heading',
        text: 'PUT /books/:id — Update a Book'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `fastify.put('/books/:id', {
  schema: {
    params: bookParams,
    body: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        author: { type: 'string' },
        year: { type: 'integer' },
        genre: { type: 'string' }
      }
    },
    response: { 200: bookSchema }
  }
}, async (request, reply) => {
  const index = books.findIndex(b => b.id === request.params.id);
  if (index === -1) {
    throw fastify.httpErrors.notFound('Book not found');
  }
  books[index] = { ...books[index], ...request.body };
  return books[index];
});`
      },
      {
        type: 'heading',
        text: 'DELETE /books/:id — Delete a Book'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `fastify.delete('/books/:id', {
  schema: { params: bookParams }
}, async (request, reply) => {
  const index = books.findIndex(b => b.id === request.params.id);
  if (index === -1) {
    throw fastify.httpErrors.notFound('Book not found');
  }
  books.splice(index, 1);
  reply.code(204);
});`
      },
      {
        type: 'heading',
        text: 'Understanding HTTP Status Codes in CRUD Operations'
      },
      {
        type: 'text',
        text: 'The status codes in this API aren\'t arbitrary — each one carries specific meaning that clients rely on:'
      },
      {
        type: 'list',
        items: [
          '200 OK — Used for GET (single and list) and PUT. The response body contains the requested or updated resource. This is the most common success code.',
          '201 Created — Used specifically for POST. Tells the client "a new resource was created." Best practice is to include a Location header with the URL of the newly created resource, and the created resource in the response body.',
          '204 No Content — Used for DELETE. Indicates the operation succeeded but there\'s nothing to return. The client should not expect a response body. Some APIs return 200 with a confirmation message instead — both are valid, but 204 is more semantically correct for deletions.',
          '400 Bad Request — Automatically returned by Fastify when schema validation fails. The client sent data that doesn\'t match the expected shape.',
          '404 Not Found — Returned when a specific resource ID doesn\'t exist. Critical distinction: 404 means "the endpoint is valid but this specific item doesn\'t exist" — different from a generic "this route doesn\'t exist" 404.',
          '500 Internal Server Error — Returned when something unexpected goes wrong. A 500 should never happen in normal operation — every 500 is a bug that needs investigation.'
        ]
      },
      {
        type: 'note',
        label: 'Why status codes are a contract, not decoration',
        variant: 'info',
        text: 'HTTP clients — browsers, mobile apps, API consumers — make decisions based on status codes. A 401 tells the client to redirect to login. A 429 tells the client to back off and retry later (rate limiting). A 301 tells the client to permanently update its bookmarked URL. If you return 200 for errors with {"error": "not found"} in the body, HTTP caches will cache your error responses, automated retry logic won\'t work, and API consumers will hate you. Use correct status codes. Your future self (and everyone who uses your API) will thank you.'
      },
      {
        type: 'heading',
        text: 'Error Handling Patterns: Defensive Programming for APIs'
      },
      {
        type: 'text',
        text: 'Every route in this API checks if the resource exists before operating on it. This pattern — "check existence, return 404, otherwise proceed" — is perhaps the most important pattern in API development. Without it:'
      },
      {
        type: 'list',
        items: [
          'findIndex returns -1, and books[-1] is undefined — spreading undefined creates an empty object, silently corrupting your data',
          'Deleting a non-existent resource succeeds silently, giving the client false confidence that their data was removed',
          'Updating a non-existent resource with a database (not in-memory like here) could create phantom records or trigger cascading errors'
        ]
      },
      {
        type: 'text',
        text: 'Fastify\'s httpErrors factory makes this pattern clean: one line to throw, and Fastify catches it, formats it, and logs it. But the pattern — check before acting — must be in your code. No framework can check business logic for you.'
      },
      {
        type: 'heading',
        text: 'The Complete Application',
      },
      {
        type: 'text',
        text: 'Here\'s the full application combining all the pieces:'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import Fastify from 'fastify';
import { randomUUID } from 'node:crypto';

const fastify = Fastify({ logger: true });

// In-memory store
const books = [
  { id: randomUUID(), title: '1984', author: 'George Orwell', year: 1949, genre: 'Dystopian' }
];

// Schema definitions
const bookParams = {
  type: 'object',
  required: ['id'],
  properties: { id: { type: 'string' } }
};

// GET all books
fastify.get('/books', async () => books);

// GET single book
fastify.get('/books/:id', { schema: { params: bookParams } },
  async (request) => {
    const book = books.find(b => b.id === request.params.id);
    if (!book) throw fastify.httpErrors.notFound('Book not found');
    return book;
  }
);

// POST create book
fastify.post('/books', {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'author'],
      properties: {
        title: { type: 'string' },
        author: { type: 'string' },
        year: { type: 'integer' },
        genre: { type: 'string' }
      }
    }
  }
}, async (request, reply) => {
  const book = { id: randomUUID(), ...request.body };
  books.push(book);
  reply.code(201);
  return book;
});

// PUT update book
fastify.put('/books/:id', {
  schema: {
    params: bookParams,
    body: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        author: { type: 'string' },
        year: { type: 'integer' },
        genre: { type: 'string' }
      }
    }
  }
}, async (request) => {
  const idx = books.findIndex(b => b.id === request.params.id);
  if (idx === -1) throw fastify.httpErrors.notFound('Book not found');
  books[idx] = { ...books[idx], ...request.body };
  return books[idx];
});

// DELETE remove book
fastify.delete('/books/:id', { schema: { params: bookParams } },
  async (request, reply) => {
    const idx = books.findIndex(b => b.id === request.params.id);
    if (idx === -1) throw fastify.httpErrors.notFound('Book not found');
    books.splice(idx, 1);
    reply.code(204);
  }
);

// Start server
await fastify.listen({ port: 3000 });`
      },
      {
        type: 'heading',
        text: 'The Decorator Pattern: Extending Fastify Safely'
      },
      {
        type: 'text',
        text: 'fastify.decorate() is one of Fastify\'s most important but least understood features. It lets you add custom properties and methods to the Fastify instance, request, and reply objects — and critically, it prevents accidental overwrites.'
      },
      {
        type: 'text',
        text: 'Consider what happens without decorators. If you write fastify.authenticate = myFunction, there\'s nothing stopping another plugin from writing fastify.authenticate = otherFunction, silently breaking your auth system. fastify.decorate() throws an error if you try to overwrite an existing decorator. This is crash-early behavior: better to fail at startup with a clear error message than to have mysterious auth failures at runtime.'
      },
      {
        type: 'note',
        label: 'Why the decorator pattern beats monkey-patching',
        variant: 'info',
        text: 'In Express, the common pattern is to attach stuff to the request object directly: req.user = userData. This works until two middleware functions try to use the same property name, or until you\'re debugging and can\'t figure out where req.user came from. Fastify\'s decorators are named, typed (in TypeScript), and panic on conflicts. They make the implicit explicit, turning "where did this property come from?" into "ah, it\'s a decorator registered by the auth plugin." For large codebases, this discoverability is invaluable.'
      },
      {
        type: 'heading',
        text: 'Hook Patterns: Composing Behaviors Like Building Blocks'
      },
      {
        type: 'text',
        text: 'The real power of hooks emerges when you compose multiple hooks to create sophisticated behaviors. Each hook is a single responsibility, and combined they form a processing pipeline.'
      },
      {
        type: 'text',
        text: 'Consider a production-ready request pipeline:'
      },
      {
        type: 'list',
        items: [
          'onRequest: Rate limiting (reject if too many requests from this IP), request ID generation (attach a unique ID for tracing)',
          'preParsing: Body size limit check (reject if payload exceeds max size before parsing it)',
          'preValidation: Request sanitization (trim strings, normalize emails), custom business rule validation that JSON Schema can\'t express',
          'preHandler: Authentication (verify JWT), Authorization (check roles/permissions), Audit logging (record who did what)',
          'preSerialization: Response filtering (remove internal fields before sending), Data transformation',
          'onSend: Add security headers (CSP, HSTS, X-Content-Type-Options), Compression (gzip/brotli)',
          'onResponse: Metrics (record response time, status code for dashboards), Cleanup (release resources)',
          'onError: Error normalization (consistent error shape), Alerting (notify on-call for 5xx errors), Sanitization (never leak stack traces to clients)'
        ]
      },
      {
        type: 'text',
        text: 'Each of these is a separate, testable function. None of them know about the others. The order is enforced by the hook type, not by manual sequencing. This is the opposite of Express middleware, where app.use(auth) must come before app.use(routes) and if you get the order wrong, nothing warns you.'
      },
      {
        type: 'heading',
        text: 'Context Propagation: Passing Data Through the Lifecycle'
      },
      {
        type: 'text',
        text: 'A common pattern in web applications is passing data from one hook to another. For example, an auth hook extracts the user and stores it on the request, then the route handler uses it. But how do you do this safely and with type support?'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Pattern 1: request-scoped decorators (the recommended approach for per-request data)
// In your auth plugin:
fastify.decorateRequest('user', null);

fastify.addHook('preHandler', async (request, reply) => {
  const token = request.headers.authorization;
  // Verify and decode...
  request.user = { id: 'user-1', role: 'admin', name: 'Alice' };
  // Now every subsequent hook and handler can access request.user
});

// In any route handler:
fastify.get('/profile', async (request) => {
  return { user: request.user }; // request.user is available and typed
});

// Pattern 2: Shared context via AsyncLocalStorage (for cross-plugin data sharing)
import { AsyncLocalStorage } from 'node:async_hooks';

const requestContext = new AsyncLocalStorage();

fastify.addHook('onRequest', (request, reply, done) => {
  const context = { requestId: crypto.randomUUID(), startTime: Date.now() };
  requestContext.run(context, () => done());
});

// Later, in any function (even deeply nested without request/reply access):
fastify.get('/deeply-nested', async () => {
  const ctx = requestContext.getStore();
  console.log(ctx.requestId); // Same request ID, even without access to request object
});`
      },
      {
        'type': 'note',
        label: 'Why AsyncLocalStorage matters for observability',
        variant: 'tip',
        text: 'AsyncLocalStorage is Node.js\'s built-in solution to the "context propagation problem." In a multi-threaded language like Java, you\'d use thread-local storage (each thread has its own context). Node.js is single-threaded but asynchronous — thousands of "virtual threads" (async operations) interleave. AsyncLocalStorage gives each async operation its own context that flows through callbacks, promises, and async/await automatically. This is how tools like Datadog and OpenTelemetry attach trace IDs to every log line and span without requiring you to pass a context object through every function parameter. It\'s one of Node.js\'s most powerful and underused features.'
      }
    ],
    quiz: [
      {
        question: 'In the CRUD example, what status code is returned when a book is successfully created?',
        options: ['200', '201', '204', '404'],
        correct: 1
      },
      {
        question: 'What does reply.code(204) in the DELETE handler do?',
        options: [
          'Redirects to a different page',
          'Sets the response to "No Content" (success, no body)',
          'Encodes the response in base64',
          'Returns an error code'
        ],
        correct: 1
      },
      {
        question: 'Why do we use randomUUID() instead of incrementing integers for IDs?',
        options: [
          'It is required by Fastify',
          'UUIDs are more readable',
          'UUIDs prevent ID collisions in distributed systems',
          'Integers are not supported in JSON'
        ],
        correct: 2
      }
    ],
    exercise: {
      instruction: 'Add a GET /books/search endpoint that filters books by genre using a query parameter. The endpoint should accept ?genre=Dystopian and return matching books.',
      hints: [
        'Use request.query to access query parameters',
        'Use Array.filter() to filter the books array',
        'Return an empty array if no books match'
      ],
      solution: `fastify.get('/books/search', async (request, reply) => {
  const { genre } = request.query;
  if (!genre) {
    return books;
  }
  return books.filter(book =>
    book.genre?.toLowerCase() === genre.toLowerCase()
  );
});`
    }
  },

  {
    id: 'middleware-hooks',
    section: 'Practical',
    difficulty: 'advanced',
    title: 'Middleware and Hooks in Depth',
    content: [
      {
        type: 'heading',
        text: 'Understanding Hooks'
      },
      {
        type: 'text',
        text: 'Fastify hooks are functions that execute at specific points during the request-response lifecycle. Unlike Express middleware (which is a chain), Fastify hooks are typed and have well-defined execution order.'
      },
      {
        type: 'diagram',
        alt: 'Fastify hook lifecycle diagram showing execution order of all hooks',
        label: 'Hook Execution Order:\n1. onRequest — Before request parsing\n2. preParsing — Before body parsing\n3. preValidation — Before JSON Schema validation\n4. preHandler — After validation, before handler\n5. preSerialization — Before response serialization\n6. onSend — Before response is sent\n7. onResponse — After response is sent\n8. onError — When an error occurs anywhere'
      },
      {
        type: 'heading',
        text: 'Creating a Request Logger Hook'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Log every request with timing
fastify.addHook('onRequest', async (request) => {
  request.log.info({ url: request.url, method: request.method }, 'incoming request');
});

fastify.addHook('onResponse', async (request, reply) => {
  request.log.info({ 
    url: request.url, 
    statusCode: reply.statusCode,
    responseTime: reply.elapsedTime 
  }, 'request completed');
});`
      },
      {
        type: 'heading',
        text: 'Building an Authentication Middleware'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Authentication hook using preHandler
fastify.decorate('authenticate', async function (request, reply) {
  const token = request.headers.authorization;
  
  if (!token || !token.startsWith('Bearer ')) {
    throw fastify.httpErrors.unauthorized('Missing or invalid token');
  }
  
  try {
    // In production: verify JWT token
    const payload = JSON.parse(
      Buffer.from(token.slice(7), 'base64').toString()
    );
    request.user = payload;
  } catch (err) {
    throw fastify.httpErrors.unauthorized('Invalid token');
  }
});

// Apply to all routes under /api
fastify.register(async (protectedRoutes) => {
  protectedRoutes.addHook('preHandler', fastify.authenticate);
  
  protectedRoutes.get('/api/profile', async (request) => {
    return { user: request.user };
  });
  
  protectedRoutes.get('/api/data', async (request) => {
    return { message: 'Protected data', user: request.user };
  });
});`
      },
      {
        type: 'heading',
        text: 'Rate Limiting with Hooks'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Simple in-memory rate limiter
const rateLimit = new Map();

fastify.addHook('onRequest', async (request) => {
  const ip = request.ip;
  const now = Date.now();
  const windowMs = 60_000; // 1 minute
  const maxRequests = 100;
  
  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, []);
  }
  
  const timestamps = rateLimit.get(ip)
    .filter(ts => now - ts < windowMs);
  
  if (timestamps.length >= maxRequests) {
    throw fastify.httpErrors.tooManyRequests('Rate limit exceeded');
  }
  
  timestamps.push(now);
  rateLimit.set(ip, timestamps);
});`
      },
      {
        type: 'heading',
        text: 'Encapsulation with Plugins'
      },
      {
        type: 'text',
        text: 'Fastify plugins create encapsulated contexts. Hooks registered inside a plugin only affect routes registered in that plugin. This is a powerful pattern for scoping behavior.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Public routes — no auth required
fastify.get('/public', async () => ({ access: 'public' }));

// Admin routes — auth hook applies only here
fastify.register(async (adminScope) => {
  adminScope.addHook('preHandler', async (request, reply) => {
    const { role } = request.user || {};
    if (role !== 'admin') {
      throw fastify.httpErrors.forbidden('Admin access required');
    }
  });
  
  adminScope.get('/admin/dashboard', async () => {
    return { stats: { users: 1000, revenue: 50000 } };
  });
  
  adminScope.delete('/admin/users/:id', async (request) => {
    const { id } = request.params;
    return { deleted: id };
  });
});`
      }
    ],
    quiz: [
      {
        question: 'Which hook runs BEFORE body parsing?',
        options: ['onRequest', 'preHandler', 'preParsing', 'preValidation'],
        correct: 2
      },
      {
        question: 'If you register a hook inside a plugin (using fastify.register), it:',
        options: [
          'Applies to all routes in the entire application',
          'Only applies to routes registered within that plugin',
          'Replaces all existing hooks',
          'Does not work — hooks must be global'
        ],
        correct: 1
      },
      {
        question: 'fastify.decorate() is used to:',
        options: [
          'Style the server UI',
          'Add custom properties/methods to the Fastify instance',
          'Compress responses',
          'Generate documentation'
        ],
        correct: 1
      }
    ],
    exercise: {
      instruction: 'Create a request validation hook that rejects requests without a Content-Type: application/json header for POST and PUT routes.',
      hints: [
        'Check request.method inside the hook',
        'Use request.headers to access the Content-Type',
        'Only validate POST and PUT methods'
      ],
      solution: `fastify.addHook('preHandler', async (request, reply) => {
  const methods = ['POST', 'PUT', 'PATCH'];
  if (methods.includes(request.method)) {
    const contentType = request.headers['content-type'];
    if (!contentType || !contentType.includes('application/json')) {
      throw fastify.httpErrors.unsupportedMediaType(
        'Content-Type must be application/json'
      );
    }
  }
});`
    }
  },
  {
    id: 'nodejs-deep-dive',
    section: 'Node.js & JavaScript',
    difficulty: 'intermediate',
    title: 'Node.js Fundamentals for Backend',
    content: [
      {
        type: 'heading',
        text: 'Why Understanding Node.js Matters'
      },
      {
        type: 'text',
        text: 'Fastify is built on Node.js, and understanding the underlying runtime makes you a far more effective backend developer. Many performance issues, bugs, and architectural mistakes come from not understanding how Node.js works under the hood.'
      },
      {
        type: 'heading',
        text: 'The Event Loop'
      },
      {
        type: 'text',
        text: 'The event loop is the heart of Node.js. It is a single-threaded loop that handles all asynchronous operations. Understanding it is essential for writing performant Fastify applications.'
      },
      {
        type: 'diagram',
        alt: 'Node.js Event Loop phases diagram',
        label: 'Event Loop Phases:\n1. Timers — setTimeout, setInterval callbacks\n2. Pending Callbacks — deferred I/O callbacks\n3. Idle/Prepare — internal use\n4. Poll — retrieve new I/O events, execute I/O callbacks\n5. Check — setImmediate callbacks\n6. Close Callbacks — socket.on("close") handlers\n\nThen back to phase 1 (iteration complete)'
      },
      {
        type: 'text',
        text: 'The event loop has six phases, and each phase has a FIFO queue of callbacks. Fastify uses async/await, which runs on the microtask queue — processed after each phase of the event loop.'
      },
      {
        type: 'note',
        label: 'Why single-threaded was a deliberate choice',
        variant: 'info',
        text: 'When Ryan Dahl created Node.js in 2009, he made a counterintuitive decision: use a single thread instead of the multi-threaded model that Java and Python servers used. The insight was that most web server work is I/O-bound (waiting for databases, files, and network), not CPU-bound. A single event loop can handle thousands of concurrent connections because it never blocks waiting for I/O — it registers a callback and moves on. Multi-threaded servers waste most of their time with threads sleeping. Node.js wastes nothing.'
      },
      {
        type: 'heading',
        text: 'Blocking vs Non-Blocking Operations'
      },
      {
        type: 'text',
        text: 'A blocking operation prevents the event loop from processing other requests until it completes. Since Node.js is single-threaded, blocking the event loop is the most common performance killer.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// BLOCKING — worst thing you can do in a Fastify route
fastify.get('/bad', async () => {
  // crypto operations, JSON.parse on huge data, sync file reads
  const data = fs.readFileSync('/path/to/huge-file.json');
  return JSON.parse(data); // Blocks the entire server!
});

// NON-BLOCKING — always do this
fastify.get('/good', async () => {
  const data = await fs.promises.readFile('/path/to/huge-file.json');
  return JSON.parse(data); // Event loop free for other requests
});`
      },
      {
        type: 'heading',
        text: 'Streams and Buffers'
      },
      {
        type: 'text',
        text: 'Streams are one of Node.js\'s most powerful features — they let you process data piece by piece without loading the entire thing into memory. Fastify uses streams internally for request body parsing.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

fastify.post('/upload', async (request, reply) => {
  // Fastify handles streaming internally — request.body is just the parsed result
  // But you can also work with raw streams:
  const writeStream = createWriteStream('./uploads/file.bin');
  await pipeline(request.raw, writeStream);
  return { status: 'uploaded' };
});`
      },
      {
        type: 'heading',
        text: 'The Module System'
      },
      {
        type: 'text',
        text: 'Node.js supports two module systems: CommonJS (require/module.exports) and ES Modules (import/export). Fastify supports both, but ESM is the modern standard.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// CommonJS (legacy, still widely used)
const Fastify = require('fastify');
module.exports = async function (fastify, opts) { ... };

// ES Modules (modern, recommended)
import Fastify from 'fastify';
export default async function (fastify, opts) { ... };`
      },
      {
        type: 'heading',
        text: 'Process Management'
      },
      {
        type: 'text',
        text: 'Node.js runs as a single process. For production, you typically run multiple instances using the cluster module or PM2 to utilize all CPU cores.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import cluster from 'node:cluster';
import { availableParallelism } from 'node:os';

if (cluster.isPrimary) {
  const numCPUs = availableParallelism();
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(\`Worker \${worker.process.pid} died, restarting\`);
    cluster.fork();
  });
} else {
  // Fastify server starts here — each worker runs its own instance
  const fastify = Fastify({ logger: true });
  await fastify.listen({ port: 3000 });
}`
      }
    ],
    quiz: [
      {
        question: 'How many threads does Node.js use for JavaScript execution by default?',
        options: ['One per CPU core', 'One (single-threaded)', 'Four', 'Unlimited'],
        correct: 1
      },
      {
        question: 'Which operation would block the event loop?',
        options: ['await fetch(url)', 'fs.readFileSync(path)', 'setTimeout(fn, 1000)', 'promise.then(fn)'],
        correct: 1
      },
      {
        question: 'What processes microtasks (async/await continuations) in the event loop?',
        options: [
          'They run in their own phase',
          'They run after each phase of the event loop',
          'They run only in the timers phase',
          'They run in a separate thread'
        ],
        correct: 1
      },
      {
        question: 'The cluster module is used to:',
        options: [
          'Connect to a database cluster',
          'Run multiple Node.js processes across CPU cores',
          'Group routes together',
          'Create child Fastify plugins'
        ],
        correct: 1
      }
    ]
  },

  {
    id: 'plugins-ecosystem',
    section: 'Plugins & Ecosystem',
    difficulty: 'intermediate',
    title: 'Fastify Plugins and Ecosystem',
    content: [
      {
        type: 'heading',
        text: 'The Plugin Philosophy'
      },
      {
        type: 'text',
        text: 'Fastify\'s plugin system is its most powerful architectural feature. Everything — from routes to middleware to database connections — is a plugin. This creates a consistent, composable, and testable codebase.'
      },
      {
        type: 'note',
        label: 'Why plugins matter at scale',
        variant: 'info',
        text: 'In small applications (under 5 routes), any architecture works. The problems start when your application grows to 50 routes, 10 middleware functions, 3 databases, and a team of 5 developers. Express\'s flat middleware chain becomes a nightmare: middleware registered in one file affects routes in another file, ordering bugs are subtle and hard to debug, and "just add another app.use()" leads to a tangled dependency graph. Fastify\'s encapsulated plugins solve this by giving each feature its own namespace. User-related code lives in a user plugin, auth code in an auth plugin, and they cannot accidentally interfere with each other. This is the same principle that makes React components and npm packages work — isolation and explicit interfaces.'
      },
      {
        type: 'heading',
        text: 'How Plugins Work'
      },
      {
        type: 'text',
        text: 'A plugin is simply an async function that receives the Fastify instance, options, and a done callback. Plugins create encapsulated contexts — routes, hooks, and decorators registered inside a plugin do not leak to the parent scope.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Basic plugin pattern
async function myPlugin(fastify, opts) {
  // opts = { prefix: '/v1', greeting: 'Hello' }

  fastify.decorate('utils', {
    greet: (name) => \`\${opts.greeting}, \${name}!\`
  });

  fastify.get('/greet/:name', async (request) => {
    const { name } = request.params;
    return { message: fastify.utils.greet(name) };
  });
}

// Register with options and prefix
fastify.register(myPlugin, {
  greeting: 'Hi',
  prefix: '/api/v1'
});`
      },
      {
        type: 'heading',
        text: 'Encapsulation in Depth'
      },
      {
        type: 'text',
        text: 'Encapsulation is what makes Fastify applications maintainable at scale. Each plugin is like a mini-application with its own scope. This prevents naming collisions and unintended side effects.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Parent scope
fastify.decorate('appName', 'MyApp');

fastify.register(async (childScope) => {
  // childScope can READ parent decorators
  console.log(childScope.appName); // 'MyApp'

  // But decorations here do NOT leak to parent
  childScope.decorate('secret', 'only-in-child');

  // Routes here are scoped
  childScope.get('/child', async () => ({ scope: 'child' }));
});

// This route does NOT exist — it\'s locked inside the plugin
// fastify.get('/child') would 404

// This decorator does NOT exist in parent
// fastify.secret would be undefined`
      },
      {
        type: 'heading',
        text: 'fastify-plugin (fp)'
      },
      {
        type: 'text',
        text: 'The fastify-plugin module wraps a plugin so it does NOT create an encapsulated context. Decorators, hooks, and routes from an fp-wrapped plugin are applied to the parent scope. This is essential for shared utilities like database connectors.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import fp from 'fastify-plugin';

async function databasePlugin(fastify, opts) {
  const db = await createConnection(opts.connectionString);
  fastify.decorate('db', db);

  // Cleanup on server shutdown
  fastify.addHook('onClose', async () => {
    await db.close();
  });
}

// fp() breaks encapsulation — 'db' decorator is available everywhere
export default fp(databasePlugin, {
  name: 'database',
  dependencies: [] // Can list plugins that must load first
});`
      },
      {
        type: 'heading',
        text: 'Essential Official Plugins'
      },
      {
        type: 'text',
        text: 'Fastify maintains a curated set of official plugins that cover the most common needs:'
      },
      {
        type: 'list',
        items: [
          '@fastify/cors — Cross-Origin Resource Sharing configuration',
          '@fastify/rate-limit — Rate limiting to protect against abuse',
          '@fastify/jwt — JSON Web Token authentication',
          '@fastify/cookie — Cookie parsing and serialization',
          '@fastify/multipart — File upload handling',
          '@fastify/websocket — WebSocket support for real-time communication',
          '@fastify/swagger — OpenAPI/Swagger documentation generation',
          '@fastify/postgres — PostgreSQL database integration',
          '@fastify/redis — Redis cache integration',
          '@fastify/static — Serve static files',
          '@fastify/env — Environment variable schema validation',
          '@fastify/compress — Response compression (gzip/brotli)'
        ]
      },
      {
        type: 'heading',
        text: 'Plugin Loading Order'
      },
      {
        type: 'text',
        text: 'Plugins load in the order they are registered. Fastify waits for each plugin\'s async function to resolve before loading the next one. Use the dependencies array in fp() to declare ordering requirements.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import fp from 'fastify-plugin';

// This plugin needs the database to be loaded first
const userRoutes = fp(async (fastify) => {
  fastify.get('/users', async () => {
    return fastify.db.query('SELECT * FROM users');
  });
}, {
  name: 'userRoutes',
  dependencies: ['database'] // Ensures database plugin loads first
});

await fastify.register(databasePlugin);
await fastify.register(userRoutes); // Safe — db decorator exists`
      }
    ],
    quiz: [
      {
        question: 'What does fastify-plugin (fp) do?',
        options: [
          'It optimizes the plugin for speed',
          'It breaks encapsulation so the plugin shares the parent scope',
          'It converts the plugin to CommonJS format',
          'It adds TypeScript types to the plugin'
        ],
        correct: 1
      },
      {
        question: 'Routes registered inside a plugin (without fp):',
        options: [
          'Are available globally',
          'Are scoped to that plugin\'s encapsulated context',
          'Override any existing routes',
          'Are only available in development mode'
        ],
        correct: 1
      },
      {
        question: 'Which plugin would you use for JWT authentication?',
        options: ['@fastify/cors', '@fastify/jwt', '@fastify/cookie', '@fastify/auth'],
        correct: 1
      },
      {
        question: 'What happens if a plugin\'s async function throws an error during registration?',
        options: [
          'The server starts without that plugin',
          'The server fails to start and the error is logged',
          'The plugin is silently skipped',
          'Fastify retries the registration automatically'
        ],
        correct: 1
      }
    ]
  },

  {
    id: 'typescript-fastify',
    section: 'Advanced Topics',
    difficulty: 'advanced',
    title: 'TypeScript with Fastify',
    content: [
      {
        type: 'heading',
        text: 'Why TypeScript?'
      },
      {
        type: 'text',
        text: 'TypeScript adds static type checking to JavaScript, catching entire categories of bugs at compile time. Fastify is built with TypeScript and provides excellent type inference, making your backend code more reliable and self-documenting.'
      },
      {
        type: 'note',
        label: 'Why TypeScript for backend development',
        variant: 'info',
        text: 'JavaScript\'s dynamic typing is convenient for quick scripts but dangerous for backend code that handles money, user data, and security. A typo in a property name (request.bdoy instead of request.body) silently produces undefined — no error, just corrupted data. TypeScript catches these at compile time, before a single line of your server runs. The investment in types pays back exponentially as your codebase grows: types serve as living documentation, enable safe refactoring (rename a field and TypeScript tells you every place that needs updating), and make onboarding new team members dramatically faster. Fastify\'s type inference from JSON Schemas means you get these benefits with surprisingly little additional code.'
      },
      {
        type: 'heading',
        text: 'Setup'
      },
      {
        type: 'code',
        lang: 'bash',
        code: `npm install -D typescript @types/node tsx
npx tsc --init`
      },
      {
        type: 'text',
        text: 'Use tsx for running TypeScript directly in development — no separate compilation step needed.'
      },
      {
        type: 'code',
        lang: 'json',
        code: `// package.json scripts
{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}`
      },
      {
        type: 'heading',
        text: 'Type Providers and Generics'
      },
      {
        type: 'text',
        text: 'Fastify uses the TypeProvider pattern to infer types from JSON Schemas. This means your route handlers get automatic type information for params, query, body, and response.'
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `import Fastify, { FastifyRequest, FastifyReply } from 'fastify';
import { Type, type Static } from '@sinclair/typebox';

const fastify = Fastify({ logger: true });

// Define schema with TypeBox (recommended over raw JSON Schema)
const UserBody = Type.Object({
  name: Type.String({ minLength: 2 }),
  email: Type.String({ format: 'email' }),
  age: Type.Optional(Type.Integer({ minimum: 0, maximum: 150 }))
});

type UserBodyType = Static<typeof UserBody>;

const UserResponse = Type.Object({
  id: Type.String(),
  name: Type.String(),
  email: Type.String()
});

fastify.post('/users', {
  schema: {
    body: UserBody,
    response: { 201: UserResponse }
  }
}, async (request: FastifyRequest<{ Body: UserBodyType }>, reply: FastifyReply) => {
  // request.body is fully typed — name: string, email: string, age?: number
  const { name, email, age } = request.body;

  reply.code(201);
  return {
    id: crypto.randomUUID(),
    name,
    email
  };
  // Return type is checked against UserResponse schema
});`
      },
      {
        type: 'heading',
        text: 'TypeBox vs JSON Schema'
      },
      {
        type: 'text',
        text: 'TypeBox is a TypeScript-first schema builder that compiles to JSON Schema. It provides better autocompletion, type inference, and composability than raw JSON Schema objects.'
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `import { Type } from '@sinclair/typebox';

// Composition with TypeBox
const Address = Type.Object({
  street: Type.String(),
  city: Type.String(),
  zipCode: Type.String({ pattern: '^[0-9]{5}$' })
});

const User = Type.Object({
  name: Type.String(),
  address: Address // Compose schemas like building blocks
});

// This compiles to valid JSON Schema that Fastify can use
console.log(JSON.stringify(User, null, 2));`
      },
      {
        type: 'heading',
        text: 'Typed Plugins'
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

interface DbPluginOptions {
  connectionString: string;
}

// Extend Fastify\'s type system with our custom decorator
declare module 'fastify' {
  interface FastifyInstance {
    db: Database;
  }
}

const dbPlugin: FastifyPluginAsync<DbPluginOptions> = async (fastify, opts) => {
  const db = await createDatabase(opts.connectionString);
  fastify.decorate('db', db);

  fastify.addHook('onClose', async () => {
    await db.close();
  });
};

export default fp(dbPlugin, { name: 'database' });`
      },
      {
        type: 'heading',
        text: 'Typed Hooks and Decorators'
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Type-safe request decoration
declare module 'fastify' {
  interface FastifyRequest {
    user?: { id: string; role: string };
  }
}

// Type-safe authenticate decorator
fastify.decorate('authenticate', async function (
  this: FastifyInstance,
  request: FastifyRequest,
  reply: FastifyReply
) {
  const token = request.headers.authorization;
  if (!token) throw fastify.httpErrors.unauthorized();

  // Verify JWT...
  request.user = { id: 'user-123', role: 'admin' };
});

// Now request.user is typed in all route handlers
fastify.get('/profile', {
  preHandler: [fastify.authenticate]
}, async (request) => {
  return { user: request.user }; // request.user is typed!
});`
      }
    ],
    quiz: [
      {
        question: 'What does TypeBox do in Fastify contexts?',
        options: [
          'It provides a UI for building forms',
          'It generates type-safe JSON Schema definitions for Fastify',
          'It compiles TypeScript to JavaScript',
          'It manages database connections'
        ],
        correct: 1
      },
      {
        question: 'The `declare module \'fastify\'` pattern is used to:',
        options: [
          'Create a new Fastify instance',
          'Extend Fastify\'s type declarations for custom decorators',
          'Import Fastify from npm',
          'Override existing Fastify methods'
        ],
        correct: 1
      },
      {
        question: 'Static<typeof Schema> gives you:',
        options: [
          'A copy of the schema',
          'The TypeScript type inferred from a TypeBox schema',
          'A static method on the schema',
          'The JSON Schema string representation'
        ],
        correct: 1
      }
    ]
  },

  {
    id: 'advanced-validation',
    section: 'Advanced Topics',
    difficulty: 'advanced',
    title: 'Advanced Validation Patterns',
    content: [
      {
        type: 'heading',
        text: 'Beyond Basic Validation'
      },
      {
        type: 'text',
        text: 'Fastify\'s schema validation goes far beyond simple type checking. You can define complex constraints, custom keywords, conditional validation, and even transform data during validation.'
      },
      {
        type: 'note',
        label: 'Why validation depth matters in production',
        variant: 'info',
        text: 'Basic validation (is this a string?) prevents crashes. Advanced validation (if the order type is "physical", a shipping address must exist, and the zip code must match the country format) prevents business logic errors that corrupt your database. Every constraint you can express in JSON Schema is a constraint you don\'t have to check manually in your handler. This makes your handlers simpler, more focused on business logic, and less likely to contain validation bugs. It also means your API documentation (generated from schemas) accurately reflects every constraint — clients know exactly what\'s required without reading your source code.'
      },
      {
        type: 'heading',
        text: 'Custom Validation Keywords'
      },
      {
        type: 'text',
        text: 'Fastify uses Ajv (Another JSON Schema Validator) under the hood. You can add custom keywords for domain-specific validation rules.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import Fastify from 'fastify';
import Ajv from 'ajv';

const fastify = Fastify({
  ajv: {
    customOptions: {
      keywords: ['isEven'] // Register a custom keyword
    }
  }
});

fastify.post('/numbers', {
  schema: {
    body: {
      type: 'object',
      properties: {
        value: { type: 'integer', isEven: true }
      }
    }
  }
}, async (request) => {
  return { valid: true, value: request.body.value };
});
// Only even numbers will pass validation`
      },
      {
        type: 'heading',
        text: 'Conditional Validation (if/then/else)'
      },
      {
        type: 'text',
        text: 'JSON Schema supports conditional logic — validate different fields based on the values of other fields.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `const orderSchema = {
  body: {
    type: 'object',
    required: ['type'],
    properties: {
      type: { enum: ['physical', 'digital'] },
      shippingAddress: { type: 'string' },
      email: { type: 'string', format: 'email' }
    },
    if: {
      properties: { type: { const: 'physical' } }
    },
    then: {
      required: ['shippingAddress'] // Physical orders NEED shipping
    },
    else: {
      required: ['email'] // Digital orders NEED email
    }
  }
};

fastify.post('/orders', { schema: orderSchema }, async (request) => {
  const { type, shippingAddress, email } = request.body;
  // Validation ensures the right fields exist based on type
  return { orderCreated: true };
});`
      },
      {
        type: 'heading',
        text: 'Multiple Response Schemas'
      },
      {
        type: 'text',
        text: 'Fastify can serialize different response shapes based on the status code, and it validates that your handler returns the correct shape.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `fastify.get('/users/:id', {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          email: { type: 'string' }
        }
      },
      404: {
        type: 'object',
        properties: {
          error: { type: 'string' },
          statusCode: { type: 'integer' }
        }
      }
    }
  }
}, async (request, reply) => {
  const user = await findUser(request.params.id);
  if (!user) {
    reply.code(404);
    return { error: 'User not found', statusCode: 404 };
  }
  return user; // Validated against 200 schema
});`
      },
      {
        type: 'heading',
        text: 'Shared Schemas via $ref'
      },
      {
        type: 'text',
        text: 'Define schemas once with addSchema() and reference them across routes using $ref — keeping your validation DRY.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Register shared schemas
fastify.addSchema({
  $id: 'user',
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string', format: 'email' }
  }
});

fastify.addSchema({
  $id: 'errorResponse',
  type: 'object',
  properties: {
    error: { type: 'string' },
    statusCode: { type: 'integer' }
  }
});

// Reference them with $ref
fastify.get('/api/users', {
  schema: {
    response: {
      200: {
        type: 'array',
        items: { $ref: 'user#' }
      }
    }
  }
}, async () => {
  return [{ id: '1', name: 'Alice', email: 'alice@example.com' }];
});`
      },
      {
        type: 'heading',
        text: 'Validation Error Formatting'
      },
      {
        type: 'text',
        text: 'Customize how validation errors appear in responses for better API developer experience.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `const fastify = Fastify({
  schemaErrorFormatter: (errors, dataVar) => {
    return {
      statusCode: 400,
      error: 'Validation Failed',
      message: \`Invalid \${dataVar}\`,
      details: errors.map(err => ({
        field: err.instancePath.slice(1),
        message: err.message,
        params: err.params
      }))
    };
  }
});

// Now validation errors return clean, structured responses:
// {
//   "statusCode": 400,
//   "error": "Validation Failed",
//   "message": "Invalid body",
//   "details": [{ "field": "email", "message": "must match format 'email'" }]
// }`
      }
    ],
    quiz: [
      {
        question: 'What does the if/then/else construct in JSON Schema do?',
        options: [
          'It is not valid JSON Schema',
          'It conditionally applies validation based on field values',
          'It runs server-side logic conditionally',
          'It creates branching routes'
        ],
        correct: 1
      },
      {
        question: 'addSchema() with $id is used to:',
        options: [
          'Add a route handler',
          'Register a shared schema that can be referenced with $ref',
          'Create a database table',
          'Install a npm package'
        ],
        correct: 1
      },
      {
        question: 'schemaErrorFormatter allows you to:',
        options: [
          'Skip validation entirely',
          'Customize the shape of validation error responses',
          'Change the JSON Schema specification',
          'Disable schema validation'
        ],
        correct: 1
      }
    ],
    exercise: {
      instruction: 'Write a route that validates a product creation request where the product type must be "book", "electronics", or "clothing". If the type is "book", pages is required (integer >= 1). If "electronics", warrantyMonths is required (integer >= 1). If "clothing", size is required (enum: S, M, L, XL).',
      hints: [
        'Use enum for the product type',
        'Use if/then with const matching for each type',
        'This uses allOf with multiple if/then blocks, or oneOf for exhaustive checking'
      ],
      solution: `const productSchema = {
  body: {
    type: 'object',
    required: ['type', 'name', 'price'],
    properties: {
      type: { enum: ['book', 'electronics', 'clothing'] },
      name: { type: 'string', minLength: 1 },
      price: { type: 'number', minimum: 0 },
      pages: { type: 'integer', minimum: 1 },
      warrantyMonths: { type: 'integer', minimum: 1 },
      size: { enum: ['S', 'M', 'L', 'XL'] }
    },
    allOf: [
      {
        if: { properties: { type: { const: 'book' } } },
        then: { required: ['pages'] }
      },
      {
        if: { properties: { type: { const: 'electronics' } } },
        then: { required: ['warrantyMonths'] }
      },
      {
        if: { properties: { type: { const: 'clothing' } } },
        then: { required: ['size'] }
      }
    ]
  }
};

fastify.post('/products', { schema: productSchema }, async (request, reply) => {
  reply.code(201);
  return { created: request.body };
});`
    }
  },

  {
    id: 'database-integration',
    section: 'Databases',
    difficulty: 'advanced',
    title: 'Database Integration with Fastify',
    content: [
      {
        type: 'heading',
        text: 'Connecting to Databases'
      },
      {
        type: 'text',
        text: 'Real applications need persistent storage. Fastify has official plugins for PostgreSQL and Redis, plus community plugins for MongoDB, MySQL, SQLite, and more. The pattern is always the same: create a plugin, decorate the Fastify instance, and use it in routes.'
      },
      {
        type: 'note',
        label: 'Why connection pooling matters',
        variant: 'info',
        text: 'Opening a database connection is expensive — it involves a TCP handshake, TLS negotiation, and authentication. Doing this for every request would add 50-100ms of latency per request and overwhelm your database with connection overhead. A connection pool maintains a set of persistent connections that are reused across requests. When a request needs the database, it borrows a connection from the pool, executes its queries, and returns the connection. This turns a 100ms connection cost into a sub-millisecond checkout. The pool size should match your database\'s connection limit — typically 20 for PostgreSQL. Too few connections and requests queue up. Too many and you exhaust database resources.'
      },
      {
        type: 'note',
        label: 'Why parameterized queries ($1, $2) are mandatory',
        variant: 'warning',
        text: 'SQL injection is the #3 most critical web application security risk according to OWASP. It happens when you concatenate user input directly into SQL strings: \x60SELECT * FROM users WHERE email = \'${email}\'\x60. A malicious user can input \x60\' OR 1=1 --\x60 and suddenly the query returns every user in the database. Parameterized queries (\x60$1, $2\x60) separate the SQL structure from the data values. The database knows exactly what is code and what is data, making injection impossible. This is not optional — every single database query in your application must use parameterized queries. Fastify doesn\'t enforce this (it can\'t — SQL is just a string to JavaScript), so it\'s your responsibility.'
      },
      {
        type: 'heading',
        text: 'PostgreSQL with @fastify/postgres'
      },
      {
        type: 'code',
        lang: 'bash',
        code: 'npm install @fastify/postgres pg'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import Fastify from 'fastify';
import postgresPlugin from '@fastify/postgres';
import fp from 'fastify-plugin';

const fastify = Fastify({ logger: true });

// Register the PostgreSQL plugin
await fastify.register(postgresPlugin, {
  connectionString: process.env.DATABASE_URL,
  // Connection pooling is automatic
  max: 20, // Maximum pool size
  idleTimeoutMillis: 30000,
});

// Now fastify.pg is available — a pg Pool instance
fastify.get('/users', async (request) => {
  const { rows } = await fastify.pg.query(
    'SELECT id, name, email FROM users WHERE active = $1',
    [true]
  );
  return rows;
});

fastify.post('/users', async (request) => {
  const { name, email } = request.body;
  const { rows } = await fastify.pg.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email',
    [name, email]
  );
  reply.code(201);
  return rows[0];
});`
      },
      {
        type: 'heading',
        text: 'Database Migrations'
      },
      {
        type: 'text',
        text: 'For managing database schema changes, use a migration tool like Postgrator or node-pg-migrate. Migrations let you version-control your database schema alongside your code.'
      },
      {
        type: 'code',
        lang: 'bash',
        code: `npm install postgrator

# Migrations directory structure:
# migrations/
#   001.do.create-users.sql
#   001.undo.create-users.sql
#   002.do.add-email-index.sql
#   002.undo.add-email-index.sql`
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import Postgrator from 'postgrator';
import pg from 'pg';

async function runMigrations() {
  const client = new pg.Client(process.env.DATABASE_URL);
  await client.connect();

  const postgrator = new Postgrator({
    migrationDirectory: './migrations',
    driver: 'pg',
    database: process.env.DATABASE_NAME,
    execQuery: (query) => client.query(query),
  });

  await postgrator.migrate();
  await client.end();
}

// Run migrations before starting Fastify
await runMigrations();
await fastify.listen({ port: 3000 });`
      },
      {
        type: 'heading',
        text: 'Transaction Pattern'
      },
      {
        type: 'text',
        text: 'Database transactions ensure data consistency — if any operation fails, all changes are rolled back.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `fastify.post('/orders', async (request, reply) => {
  const { userId, items } = request.body;
  const client = await fastify.pg.connect();

  try {
    await client.query('BEGIN');

    const orderResult = await client.query(
      'INSERT INTO orders (user_id, total) VALUES ($1, $2) RETURNING id',
      [userId, calculateTotal(items)]
    );
    const orderId = orderResult.rows[0].id;

    for (const item of items) {
      await client.query(
        'INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1, $2, $3)',
        [orderId, item.productId, item.quantity]
      );

      await client.query(
        'UPDATE inventory SET quantity = quantity - $1 WHERE product_id = $2',
        [item.quantity, item.productId]
      );
    }

    await client.query('COMMIT');
    reply.code(201);
    return { orderId };
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release(); // Return the client to the pool
  }
});`
      },
      {
        type: 'heading',
        text: 'Redis for Caching'
      },
      {
        type: 'text',
        text: 'Redis is an in-memory data store perfect for caching, session management, and rate limiting. Fastify has an official @fastify/redis plugin.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import redisPlugin from '@fastify/redis';

await fastify.register(redisPlugin, {
  host: 'localhost',
  port: 6379,
});

fastify.get('/posts/:id', async (request, reply) => {
  const { id } = request.params;
  const cacheKey = \`post:\${id}\`;

  // Check cache first
  const cached = await fastify.redis.get(cacheKey);
  if (cached) {
    reply.header('X-Cache', 'HIT');
    return JSON.parse(cached);
  }

  // Cache miss — fetch from database
  const { rows } = await fastify.pg.query(
    'SELECT * FROM posts WHERE id = $1', [id]
  );
  if (rows.length === 0) {
    throw fastify.httpErrors.notFound('Post not found');
  }

  // Store in cache for 5 minutes
  await fastify.redis.set(
    cacheKey,
    JSON.stringify(rows[0]),
    'EX', 300
  );

  reply.header('X-Cache', 'MISS');
  return rows[0];
});`
      }
    ],
    quiz: [
      {
        question: 'In PostgreSQL transactions, what does ROLLBACK do?',
        options: [
          'Saves only some of the changes',
          'Undoes all changes made since BEGIN',
          'Deletes the transaction log',
          'Restarts the database connection'
        ],
        correct: 1
      },
      {
        question: 'client.release() in the pg pool pattern is used to:',
        options: [
          'Delete the client connection',
          'Return the client to the connection pool for reuse',
          'Close the database',
          'Reset the transaction'
        ],
        correct: 1
      },
      {
        question: 'Why use Redis alongside PostgreSQL?',
        options: [
          'Redis replaces PostgreSQL for all operations',
          'Redis provides fast in-memory caching to reduce database load',
          'PostgreSQL cannot handle queries without Redis',
          'Redis is required by Fastify'
        ],
        correct: 1
      }
    ],
    exercise: {
      instruction: 'Write a Fastify route that increments a view counter in Redis and returns the current count. The route should be GET /posts/:id/views.',
      hints: [
        'Use fastify.redis.incr() to atomically increment a counter',
        'The Redis key can be posts:{id}:views',
        'incr returns the new value — use it directly'
      ],
      solution: `fastify.get('/posts/:id/views', async (request) => {
  const { id } = request.params;
  const views = await fastify.redis.incr(\`posts:\${id}:views\`);
  return { postId: id, views };
});`
    }
  },

  {
    id: 'authentication-security',
    section: 'Security',
    difficulty: 'advanced',
    title: 'Authentication and Security',
    content: [
      {
        type: 'heading',
        text: 'Security First'
      },
      {
        type: 'text',
        text: 'Security is not optional — it must be built into every layer of your application. Fastify provides official plugins for authentication, CORS, rate limiting, and more.'
      },
      {
        type: 'note',
        label: 'Why security is never "someone else\'s problem"',
        variant: 'warning',
        text: 'Every backend developer is a security engineer whether they like it or not. In 2024 alone, data breaches exposed over 5 billion records. The root cause is almost always the same: developers who assumed security was handled elsewhere. The OWASP Top 10 (the definitive list of web application security risks) hasn\'t changed materially in a decade — the same vulnerabilities keep appearing because the same mistakes keep being made. Broken authentication, SQL injection, and overly permissive CORS configurations are among the most common and most preventable vulnerabilities. Fastify\'s schema validation and plugin ecosystem make it harder to make these mistakes — but you still need to understand them.'
      },
      {
        type: 'heading',
        text: 'JWT Authentication'
      },
      {
        type: 'text',
        text: 'JSON Web Tokens (JWT) are the most common authentication mechanism for APIs. The @fastify/jwt plugin makes JWT handling straightforward.'
      },
      {
        type: 'note',
        label: 'Why JWT instead of sessions',
        variant: 'info',
        text: 'Traditional session-based auth stores a session ID in a cookie and looks up the user on every request from a database. This works fine but requires a database read for every authenticated request. JWTs are stateless: all the user information (who they are, what permissions they have, when the token expires) is encoded in the token itself and cryptographically signed. The server just verifies the signature — no database lookup needed. This makes JWTs ideal for microservices (any service can verify the token independently) and high-throughput APIs. The tradeoff: JWTs can\'t be invalidated individually (unless you maintain a blocklist), so keep expiry times short (15-60 minutes) and use refresh tokens for longer sessions.'
      },
      {
        type: 'code',
        lang: 'bash',
        code: 'npm install @fastify/jwt'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import jwtPlugin from '@fastify/jwt';

await fastify.register(jwtPlugin, {
  secret: process.env.JWT_SECRET, // Must be a strong, unique value
  sign: { expiresIn: '1h' }
});

fastify.decorate('authenticate', async function (request, reply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.send(err);
  }
});

// Login endpoint — issue a token
fastify.post('/auth/login', {
  schema: {
    body: {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        email: { type: 'string', format: 'email' },
        password: { type: 'string', minLength: 8 }
      }
    }
  }
}, async (request) => {
  const { email, password } = request.body;

  // Verify credentials against database
  const user = await fastify.pg.query(
    'SELECT id, email, password_hash FROM users WHERE email = $1',
    [email]
  );
  if (!user.rows.length || !await bcrypt.compare(password, user.rows[0].password_hash)) {
    throw fastify.httpErrors.unauthorized('Invalid credentials');
  }

  const token = fastify.jwt.sign({
    sub: user.rows[0].id,
    email: user.rows[0].email,
  });

  return { token };
});

// Protected route
fastify.get('/profile', {
  onRequest: [fastify.authenticate]
}, async (request) => {
  const userId = request.user.sub;
  const { rows } = await fastify.pg.query(
    'SELECT id, name, email FROM users WHERE id = $1',
    [userId]
  );
  return rows[0];
});`
      },
      {
        type: 'heading',
        text: 'Password Hashing with bcrypt'
      },
      {
        type: 'text',
        text: 'Never store plain-text passwords. Always hash them with a deliberately slow algorithm like bcrypt to resist brute-force attacks.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12; // Higher = more secure but slower

// Registration
fastify.post('/auth/register', async (request) => {
  const { name, email, password } = request.body;

  const existing = await fastify.pg.query(
    'SELECT id FROM users WHERE email = $1', [email]
  );
  if (existing.rows.length > 0) {
    throw fastify.httpErrors.conflict('Email already registered');
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  const { rows } = await fastify.pg.query(
    'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email',
    [name, email, passwordHash]
  );

  reply.code(201);
  return rows[0];
});`
      },
      {
        type: 'heading',
        text: 'CORS Configuration'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import corsPlugin from '@fastify/cors';

await fastify.register(corsPlugin, {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400, // Cache preflight for 24 hours
});`
      },
      {
        type: 'heading',
        text: 'Rate Limiting'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import rateLimitPlugin from '@fastify/rate-limit';

await fastify.register(rateLimitPlugin, {
  max: 100, // Max requests per window
  timeWindow: '1 minute',
  keyGenerator: (request) => {
    // Rate limit by IP or by authenticated user ID
    return request.user?.sub || request.ip;
  },
  errorResponseBuilder: (request, context) => {
    return {
      statusCode: 429,
      error: 'Too Many Requests',
      message: \`Rate limit exceeded. Try again in \${Math.ceil(context.ttl / 1000)} seconds\`,
    };
  },
});`
      },
      {
        type: 'heading',
        text: 'Security Best Practices Checklist'
      },
      {
        type: 'list',
        items: [
          'Never store secrets (API keys, passwords) in code — use environment variables',
          'Hash passwords with bcrypt (never SHA/MD5)',
          'Use HTTPS in production (TLS certificates)',
          'Set short JWT expiry times and use refresh tokens for long sessions',
          'Validate all input — assume every request is malicious',
          'Set restrictive CORS origins — never use * in production',
          'Rate limit all public endpoints',
          'Use Helmet to set secure HTTP headers: Helmet is available via @fastify/helmet',
          'Keep dependencies updated — run npm audit regularly',
          'Log security events but never log sensitive data (passwords, tokens)'
        ]
      }
    ],
    quiz: [
      {
        question: 'Which plugin provides JWT support in Fastify?',
        options: ['@fastify/auth', '@fastify/jwt', '@fastify/token', '@fastify/session'],
        correct: 1
      },
      {
        question: 'Why use bcrypt for password hashing instead of SHA-256?',
        options: [
          'bcrypt is faster',
          'bcrypt is deliberately slow to resist brute-force attacks',
          'SHA-256 is not available in Node.js',
          'bcrypt produces shorter hashes'
        ],
        correct: 1
      },
      {
        question: 'CORS configuration should NEVER use which origin value in production?',
        options: ['http://localhost:3000', '*', 'https://myapp.com', '[\'https://myapp.com\']'],
        correct: 1
      },
      {
        question: 'What does request.jwtVerify() do?',
        options: [
          'Creates a new JWT token',
          'Verifies the JWT from the Authorization header and decodes the payload',
          'Encrypts the JWT for storage',
          'Generates a refresh token'
        ],
        correct: 1
      }
    ],
    exercise: {
      instruction: 'Write a route handler for refreshing a JWT. It should accept a valid (possibly expired) JWT, verify it with a different secret (REFRESH_SECRET), and return a new access token.',
      hints: [
        'Register jwt twice: once for access tokens, once for refresh tokens',
        'Check if the refresh token is in the database or a valid list',
        'Sign a new access token but do NOT sign a new refresh token (rotation)'
      ],
      solution: `// Register two JWT instances
await fastify.register(jwtPlugin, {
  secret: process.env.JWT_SECRET,
  namespace: 'access',
  sign: { expiresIn: '15m' }
});

await fastify.register(jwtPlugin, {
  secret: process.env.REFRESH_SECRET,
  namespace: 'refresh',
  sign: { expiresIn: '7d' }
});

fastify.post('/auth/refresh', async (request) => {
  const { refreshToken } = request.body;
  try {
    const decoded = fastify.refresh.verify(refreshToken);
    const newAccessToken = fastify.access.sign({
      sub: decoded.sub,
      email: decoded.email
    });
    return { accessToken: newAccessToken };
  } catch {
    throw fastify.httpErrors.unauthorized('Invalid refresh token');
  }
});`
    }
  },

  {
    id: 'testing-with-fastify',
    section: 'Testing & DevOps',
    difficulty: 'advanced',
    title: 'Testing Fastify Applications',
    content: [
      {
        type: 'heading',
        text: 'Why Testing Matters'
      },
      {
        type: 'text',
        text: 'Testing ensures your API behaves correctly, catches regressions, and documents expected behavior. Fastify makes testing easy with its inject() method, which simulates HTTP requests without starting a real server.'
      },
      {
        type: 'note',
        label: 'Why testing is non-negotiable in backend development',
        variant: 'warning',
        text: 'Frontend bugs are visible — a button doesn\'t work, a page looks wrong. Backend bugs are invisible and catastrophic — silently corrupting data, double-charging customers, leaking private information. The only way to catch backend bugs before they reach production is testing. Fastify\'s inject() method makes testing so fast (sub-millisecond per test) that there\'s no excuse not to write tests. A test suite that runs in under a second can be run on every file save, catching bugs within seconds of writing them. The alternative — manually testing every endpoint with curl or Postman — scales linearly with the number of endpoints. Tests scale logarithmically.'
      },
      {
        type: 'heading',
        text: 'The inject() Method'
      },
      {
        type: 'text',
        text: 'fastify.inject() lets you send fake HTTP requests to your routes and get the response — all in-memory, no network involved. This is much faster than starting a server and making real HTTP calls.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildApp } from '../src/app.js';

test('GET /health returns 200', async (t) => {
  const app = buildApp();

  const response = await app.inject({
    method: 'GET',
    url: '/health',
  });

  assert.strictEqual(response.statusCode, 200);
  assert.deepStrictEqual(JSON.parse(response.body), { status: 'ok' });

  await app.close();
});`
      },
      {
        type: 'heading',
        text: 'App Factory Pattern'
      },
      {
        type: 'text',
        text: 'The key to testable Fastify apps is separating app creation from server startup. Your app.js exports a function that creates and configures the Fastify instance, while server.js just calls it and starts listening.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// src/app.js — reusable app factory
import Fastify from 'fastify';

export function buildApp(opts = {}) {
  const app = Fastify({
    logger: opts.logger ?? false, // Disable logging in tests
  });

  // Register plugins
  app.register(routes);

  return app;
}

// server.js — entry point for production
import { buildApp } from './src/app.js';

const app = buildApp({ logger: true });
await app.listen({ port: 3000 });

// Now tests can import buildApp and call inject()
import { buildApp } from './app.js';

test('integration test', async () => {
  const app = buildApp();
  const res = await app.inject({ method: 'GET', url: '/users' });
  assert.strictEqual(res.statusCode, 200);
  await app.close();
});`
      },
      {
        type: 'heading',
        text: 'Testing with Databases'
      },
      {
        type: 'text',
        text: 'For database-dependent tests, create a test database, run migrations, and clean up after each test suite.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `test('CRUD user flow', async (t) => {
  const app = buildApp();

  // Clean state
  await app.pg.query('DELETE FROM users');

  // CREATE
  const createRes = await app.inject({
    method: 'POST',
    url: '/users',
    payload: { name: 'Test User', email: 'test@example.com' },
  });
  assert.strictEqual(createRes.statusCode, 201);
  const created = JSON.parse(createRes.body);

  // READ
  const getRes = await app.inject({
    method: 'GET',
    url: \`/users/\${created.id}\`,
  });
  assert.strictEqual(getRes.statusCode, 200);
  assert.strictEqual(JSON.parse(getRes.body).name, 'Test User');

  // DELETE
  const deleteRes = await app.inject({
    method: 'DELETE',
    url: \`/users/\${created.id}\`,
  });
  assert.strictEqual(deleteRes.statusCode, 204);

  // Verify deleted
  const notFoundRes = await app.inject({
    method: 'GET',
    url: \`/users/\${created.id}\`,
  });
  assert.strictEqual(notFoundRes.statusCode, 404);

  await app.close();
});`
      },
      {
        type: 'heading',
        text: 'Mocking Dependencies'
      },
      {
        type: 'text',
        text: 'Use dependency injection to replace external services with mocks during testing.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// src/app.js — accept a mock database for testing
export function buildApp(opts = {}) {
  const app = Fastify({ logger: false });

  if (opts.mockDb) {
    app.decorate('pg', opts.mockDb);
  } else {
    app.register(postgresPlugin, { connectionString: process.env.DATABASE_URL });
  }

  app.register(routes);
  return app;
}

// test
const mockDb = {
  query: async (text, params) => {
    if (text.includes('SELECT')) {
      return { rows: [{ id: '1', name: 'Mock User' }] };
    }
    return { rows: [{ id: 'new-id' }] };
  },
};

const app = buildApp({ mockDb });
const res = await app.inject({ method: 'GET', url: '/users' });
assert.deepStrictEqual(JSON.parse(res.body), [{ id: '1', name: 'Mock User' }]);
await app.close();`
      },
      {
        type: 'heading',
        text: 'Running Tests'
      },
      {
        type: 'code',
        lang: 'json',
        code: `// package.json
{
  "scripts": {
    "test": "node --test",
    "test:watch": "node --test --watch",
    "test:coverage": "node --test --experimental-test-coverage"
  }
}`
      },
      {
        type: 'text',
        text: 'Node.js 18+ has a built-in test runner. No Jest, no Mocha — just node --test. It supports subtests, describe/it syntax, mocking, and coverage.'
      },
      {
        type: 'heading',
        text: 'Testing Strategy: What to Test and What to Skip'
      },
      {
        type: 'text',
        text: 'Not all tests are equal. A comprehensive testing strategy combines multiple levels of testing, each with a specific purpose:'
      },
      {
        type: 'list',
        items: [
          'Unit tests — Test individual functions in isolation. Fastify\'s plugin structure makes unit testing easy: extract business logic into pure functions, test them directly. Example: a function that calculates order totals should be tested without Fastify at all.',
          'Integration tests (inject tests) — Test the full request-response cycle including hooks, validation, and serialization. These are the sweet spot for Fastify: they\'re nearly as fast as unit tests but test the real system. Every route should have at least one happy-path integration test and one error-path test.',
          'Contract tests — Verify that your API responses match your schemas. Fastify does this automatically if you define response schemas — the serializer actually validates the shape. But you should also test that your OpenAPI docs match reality (@fastify/swagger).',
          'End-to-end tests — Test the entire system including external dependencies (real database, real Redis). These are slower and more brittle but catch integration issues that mock-based tests miss. Run these in CI, not on every save.',
          'Load tests — Verify your API can handle expected traffic. Tools like autocannon (built by the Fastify team!) can generate thousands of requests per second. Set performance budgets: "GET /users must respond in under 50ms at 1000 concurrent requests."'
        ]
      },
      {
        type: 'heading',
        text: 'Testing Async Operations and Error Scenarios'
      },
      {
        type: 'text',
        text: 'The most common and most important tests in backend development are error tests: "what happens when a user sends bad data, requests a non-existent resource, or has an expired token?" These are the scenarios that actually break in production.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import { test } from 'node:test';
import assert from 'node:assert/strict';

test('comprehensive error handling tests', async (t) => {
  const app = buildApp();

  await t.test('POST /users with missing required fields returns 400', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/users',
      payload: { name: 'Alice' }, // Missing required 'email'
    });
    assert.strictEqual(res.statusCode, 400);
    const body = JSON.parse(res.body);
    assert.ok(body.error);
    assert.ok(body.message.includes('body'));
  });

  await t.test('POST /users with invalid email format returns 400', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/users',
      payload: { name: 'Alice', email: 'not-an-email' },
    });
    assert.strictEqual(res.statusCode, 400);
  });

  await t.test('GET /users/:id with non-existent ID returns 404', async () => {
    const res = await app.inject({
      method: 'GET',
      url: '/users/non-existent-id-12345',
      headers: { authorization: 'Bearer valid-token' },
    });
    assert.strictEqual(res.statusCode, 404);
  });

  await t.test('GET /users without auth token returns 401', async () => {
    const res = await app.inject({
      method: 'GET',
      url: '/users',
      // No authorization header
    });
    assert.strictEqual(res.statusCode, 401);
  });

  await t.test('POST /users with unexpected fields returns 400', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/users',
      payload: { name: 'Alice', email: 'a@b.com', isAdmin: true },
    });
    // If additionalProperties: false is set, this should be 400
    assert.strictEqual(res.statusCode, 400);
  });

  await app.close();
});`,
        lang: 'javascript'
      },
      {
        type: 'heading',
        text: 'Test Fixtures and Database Setup'
      },
      {
        type: 'text',
        text: 'Tests need predictable data. Hard-coding test data inline (like the examples above) works for simple cases but becomes unmanageable as your schema grows. A better approach:'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// test/fixtures.js
export const fixtures = {
  users: {
    alice: { name: 'Alice Johnson', email: 'alice@example.com', password: 'securePass123!' },
    bob: { name: 'Bob Smith', email: 'bob@example.com', password: 'anotherPass456!' },
  },
  // Generated on test run so IDs are predictable
  createTestUser: async (app, userData) => {
    const res = await app.inject({
      method: 'POST',
      url: '/users',
      payload: userData,
    });
    return JSON.parse(res.body);
  },
};

// test/users.test.js
import { fixtures } from './fixtures.js';
import { buildApp, buildTestDb } from '../src/app.js';

test('user CRUD flow', async (t) => {
  await buildTestDb(); // Run migrations on test database
  const app = buildApp();

  // Setup: create a user to work with
  const user = await fixtures.createTestUser(app, fixtures.users.alice);
  assert.ok(user.id);

  // Test: retrieve the created user
  const getRes = await app.inject({
    method: 'GET',
    url: \`/users/\${user.id}\`,
  });
  assert.strictEqual(getRes.statusCode, 200);
  assert.strictEqual(JSON.parse(getRes.body).email, fixtures.users.alice.email);

  await app.close();
});`
      },
      {
        type: 'note',
        label: 'Why test fixtures and factories beat hard-coded data',
        variant: 'tip',
        text: 'Hard-coded test data decays over time. Your schema changes (add a required field) and suddenly every test breaks because the hard-coded data is missing the new field. Fixture factories — functions that create test data with sensible defaults — localize schema changes. When you add a new required field, you update the factory once, and all tests automatically get valid data. This is the single biggest productivity improvement in backend testing, and it costs almost nothing to implement from the start.'
      },
      {
        type: 'heading',
        text: 'The Test Pyramid Applied to Fastify'
      },
      {
        type: 'text',
        text: 'The test pyramid is a classic software engineering concept: lots of fast unit tests at the bottom, fewer integration tests in the middle, and a small number of slow end-to-end tests at the top. Fastify\'s inject() method collapses the pyramid: integration tests are nearly as fast as unit tests (sub-millisecond), so you can afford to write many more of them. A Fastify test suite should be:'
      },
      {
        type: 'list',
        items: [
          '10% pure unit tests — for complex business logic functions extracted from route handlers',
          '80% inject() integration tests — for every route, covering happy path, validation errors, auth errors, and edge cases',
          '5% database integration tests — using a real test database, run in CI but not on every save',
          '5% contract and load tests — verifying schemas match OpenAPI docs and performance budgets are met'
        ]
      }
    ],
    quiz: [
      {
        question: 'What does fastify.inject() do?',
        options: [
          'Injects dependencies into route handlers',
          'Simulates an HTTP request without starting a server',
          'Injects SQL into database queries',
          'Loads plugins dynamically'
        ],
        correct: 1
      },
      {
        question: 'Why separate app.js and server.js?',
        options: [
          'It is required by Fastify',
          'It allows the app to be created without listening, making it testable via inject()',
          'It improves startup performance',
          'It is just a convention with no practical benefit'
        ],
        correct: 1
      },
      {
        question: 'Which command runs Node.js built-in test runner?',
        options: ['npm test', 'node --test', 'jest', 'mocha'],
        correct: 1
      }
    ]
  },

  {
    id: 'deployment-production',
    section: 'Testing & DevOps',
    difficulty: 'advanced',
    title: 'Deployment and Production',
    content: [
      {
        type: 'heading',
        text: 'From Development to Production'
      },
      {
        type: 'text',
        text: 'Moving a Fastify application from your laptop to production involves configuration, process management, containerization, monitoring, and CI/CD. This lesson covers the essential steps.'
      },
      {
        type: 'note',
        label: 'Why the "it works on my machine" problem exists',
        variant: 'info',
        text: 'The gap between development and production is where most failures happen. In development, you have your exact Node.js version, your local PostgreSQL with test data, your .env file with secrets, and no traffic. In production, you have a different environment, different database (with real data and 100x more of it), secrets managed differently, and thousands of concurrent users. Docker solves the "works on my machine" problem by packaging everything — Node.js, your code, dependencies, even the operating system — into a single immutable container. Environment validation with @fastify/env catches missing configuration at startup (not 3 AM when a user hits the broken endpoint). Health checks tell your load balancer which instances are alive. Graceful shutdown prevents dropped requests during deploys. These aren\'t nice-to-haves — they\'re the difference between a hobby project and production software.'
      },
      {
        type: 'heading',
        text: 'Environment Configuration'
      },
      {
        type: 'text',
        text: 'Use @fastify/env to validate environment variables at startup — catch configuration errors before they cause runtime failures.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `import envPlugin from '@fastify/env';

const schema = {
  type: 'object',
  required: ['PORT', 'DATABASE_URL', 'JWT_SECRET'],
  properties: {
    PORT: { type: 'integer', default: 3000 },
    DATABASE_URL: { type: 'string' },
    JWT_SECRET: { type: 'string', minLength: 32 },
    NODE_ENV: { type: 'string', enum: ['development', 'production', 'test'] },
    LOG_LEVEL: { type: 'string', default: 'info' },
  },
};

await fastify.register(envPlugin, {
  schema,
  dotenv: true, // Load .env file automatically
});

// Now fastify.config is typed and validated
fastify.listen({ port: fastify.config.PORT });`
      },
      {
        type: 'heading',
        text: 'Docker Containerization'
      },
      {
        type: 'code',
        lang: 'dockerfile',
        code: `# Dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]`
      },
      {
        type: 'code',
        lang: 'yaml',
        code: `# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
      - JWT_SECRET=\${JWT_SECRET}
      - NODE_ENV=production
    depends_on:
      db:
        condition: service_healthy

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: myapp
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d myapp"]
      interval: 5s
      timeout: 5s
      retries: 5

volumes:
  pgdata:`
      },
      {
        type: 'heading',
        text: 'Process Management with PM2'
      },
      {
        type: 'text',
        text: 'PM2 keeps your application running, restarts it if it crashes, and runs multiple instances for load balancing.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// ecosystem.config.cjs
module.exports = {
  apps: [{
    name: 'fastify-api',
    script: './server.js',
    instances: 'max',     // Use all CPU cores
    exec_mode: 'cluster', // Enable cluster mode
    env: {
      NODE_ENV: 'production',
    },
    max_memory_restart: '500M',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
  }]
};`
      },
      {
        type: 'code',
        lang: 'bash',
        code: `pm2 start ecosystem.config.cjs
pm2 save          # Save the process list
pm2 startup       # Auto-start PM2 on system boot
pm2 monit         # Real-time monitoring dashboard`
      },
      {
        type: 'heading',
        text: 'Health Checks and Graceful Shutdown'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Health check endpoint — vital for load balancers and orchestration
fastify.get('/health', async () => ({
  status: 'healthy',
  uptime: process.uptime(),
  timestamp: new Date().toISOString(),
}));

// Graceful shutdown — finish in-flight requests before exiting
const signals = ['SIGINT', 'SIGTERM'];
signals.forEach(signal => {
  process.on(signal, async () => {
    fastify.log.info(\`Received \${signal}, shutting down gracefully\`);
    await fastify.close();
    process.exit(0);
  });
});`
      },
      {
        type: 'heading',
        text: 'Logging in Production'
      },
      {
        type: 'text',
        text: 'Fastify\'s built-in Pino logger supports structured JSON logging, perfect for log aggregation tools like ELK, Datadog, or Grafana Loki.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `const fastify = Fastify({
  logger: {
    level: process.env.LOG_LEVEL || 'info',
    // In production, output JSON (parseable by log aggregators)
    // In development, use pino-pretty for readability
    ...(process.env.NODE_ENV === 'production'
      ? {}
      : { transport: { target: 'pino-pretty' } }
    ),
    redact: ['req.headers.authorization', 'req.headers.cookie'],
  },
});`
      },
      {
        type: 'heading',
        text: 'CI/CD Pipeline Example'
      },
      {
        type: 'code',
        lang: 'yaml',
        code: `# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16-alpine
        env:
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
          POSTGRES_DB: testdb
        ports:
          - 5432:5432
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm test
        env:
          DATABASE_URL: postgresql://test:test@localhost:5432/testdb

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: |
          docker build -t myapp .
          docker tag myapp registry.example.com/myapp:latest
          docker push registry.example.com/myapp:latest`
      },
      {
        type: 'heading',
        text: 'Monitoring and Observability: Knowing What Your Server is Doing'
      },
      {
        type: 'text',
        text: 'In development, when something goes wrong, you look at the console. In production, you have 20 instances running across 5 machines, each handling hundreds of requests per second. You cannot SSH into each one. You need centralized monitoring.'
      },
      {
        type: 'text',
        text: 'Observability has three pillars, and Fastify supports all three natively:'
      },
      {
        type: 'list',
        items: [
          'Logs — Structured JSON logs via Pino. Every request, error, and significant event generates a log line with a request ID, timestamp, and context. Ship these to a log aggregator (ELK, Datadog, Grafana Loki) to search and correlate across instances.',
          'Metrics — Quantitative measurements over time: request rate, error rate, response time percentiles (p50, p95, p99), database query time, memory usage. Fastify metrics can be exposed via @fastify/metrics (Prometheus-compatible) and visualized in Grafana dashboards.',
          'Traces — A trace follows a single request as it travels through multiple services (API gateway → auth service → user service → database). @fastify/opentelemetry adds OpenTelemetry support, generating traces that show exactly where time is spent and where failures occur.'
        ]
      },
      {
        type: 'note',
        label: 'Why the three pillars together',
        variant: 'info',
        text: 'Logs tell you WHAT happened ("user 42 failed login"). Metrics tell you HOW MUCH ("login failures spiked to 500/minute at 3:14 AM"). Traces tell you WHERE ("the login failure happened because the auth service timed out after 5 seconds waiting for the database"). Each pillar answers a different question about the same event. Without all three, you\'re debugging production issues with one hand tied behind your back.'
      },
      {
        type: 'heading',
        text: 'Scaling Strategies: From 10 to 10 Million Users'
      },
      {
        type: 'text',
        text: 'Fastify\'s performance means you can go surprisingly far on a single server. But eventually, you need to scale horizontally (add more servers). Understanding the strategies is essential:'
      },
      {
        type: 'list',
        items: [
          'Vertical scaling (scale up) — Buy a bigger server. More RAM, more CPU cores, faster SSDs. Fastify\'s single-threaded event loop means it only uses one core per process, so vertical scaling without horizontal scaling wastes CPU. Up to a point: bigger servers cost exponentially more.',
          'Horizontal scaling with PM2 cluster — Run multiple Fastify instances on one machine (one per CPU core). PM2 load-balances between them. Zero code changes needed. This is the first step when you outgrow a single process.',
          'Horizontal scaling with containers — Run multiple identical Docker containers across multiple machines. A load balancer (nginx, HAProxy, or a cloud load balancer) distributes traffic. Each container is stateless — any instance can serve any request.',
          'Database scaling — This is typically where you hit limits before Fastify does. Start with read replicas (write to primary, read from replicas), then consider sharding (split data across multiple databases by a partition key like user ID). Connection pooling becomes critical at this scale.',
          'Caching at every layer — Browser caching (Cache-Control headers), CDN caching (Cloudflare, Fastly), application caching (Redis), database query caching. Every millisecond you save at a lower layer is a millisecond Fastify doesn\'t have to spend.'
        ]
      },
      {
        type: 'heading',
        text: 'Zero-Downtime Deployments'
      },
      {
        type: 'text',
        text: 'Deploying a new version of your application while users are actively using it without them noticing any interruption is one of the hardest problems in operations. Fastify\'s graceful shutdown makes it achievable:'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Zero-downtime deployment with PM2 reload
// pm2 reload ecosystem.config.cjs --update-env

// What happens during reload:
// 1. PM2 spawns new worker processes with the updated code
// 2. New workers start and begin accepting connections
// 3. Old workers receive SIGINT but DON'T exit immediately
// 4. Old workers close their HTTP servers (stop accepting new connections)
// 5. Old workers finish processing in-flight requests
// 6. Old workers close database connections and exit
// 7. All traffic is now served by new workers

// In your Fastify app, the graceful shutdown hook:
const signals = ['SIGINT', 'SIGTERM'];
signals.forEach(signal => {
  process.on(signal, async () => {
    fastify.log.info('Starting graceful shutdown...');

    // 1. Stop accepting new connections
    await fastify.close();

    // 2. Close database connection pool
    if (fastify.pg) {
      await fastify.pg.end();
    }

    // 3. Close Redis connection
    if (fastify.redis) {
      await fastify.redis.quit();
    }

    fastify.log.info('Shutdown complete');
    process.exit(0);
  });
});`
      },
      {
        type: 'heading',
        text: 'Deployment Checklist'
      },
      {
        type: 'text',
        text: 'Before deploying to production, verify every item on this list. Most production incidents are caused by missing one of these:'
      },
      {
        type: 'list',
        items: [
          'Environment variables validated at startup (not runtime) via @fastify/env',
          'All secrets in environment variables or a secrets manager (never in code or Dockerfile)',
          'HTTPS/TLS enabled with valid certificates (Let\'s Encrypt via Certbot, or cloud-managed)',
          'Health check endpoint returning 200 when all dependencies (DB, Redis) are reachable',
          'Readiness check endpoint — separate from health, signals when the instance is ready for traffic (all plugins loaded, DB connected)',
          'Graceful shutdown handling SIGTERM with connection draining',
          'Rate limiting on all public endpoints',
          'CORS set to specific origins (never wildcard in production)',
          'Helmet security headers configured',
          'Request size limits (body limit, query string limit) to prevent DoS',
          'Structured logging in JSON format with request IDs',
          'Centralized log aggregation configured and tested',
          'Monitoring dashboards for key metrics: request rate, error rate, p95 latency, memory/CPU',
          'Alerts configured: >1% error rate, >200ms p95 latency, >80% memory usage',
          'Database backups configured and tested (you test restores, not just backups)',
          'CI/CD pipeline with automated tests blocking deployment on failure',
          'Rollback plan documented and tested: know exactly what command reverts to the previous version'
        ]
      }
    ],
    quiz: [
      {
        question: 'PM2 in cluster mode does what?',
        options: [
          'Connects to a database cluster',
          'Runs one Fastify instance per CPU core for load balancing',
          'Creates a Kubernetes cluster',
          'Merges multiple servers into one'
        ],
        correct: 1
      },
      {
        question: 'A health check endpoint is used by:',
        options: [
          'End users checking if the site works',
          'Load balancers and orchestrators to determine if the instance is healthy',
          'The Fastify framework internally',
          'npm during package installation'
        ],
        correct: 1
      },
      {
        question: 'Graceful shutdown means:',
        options: [
          'Immediately killing the process',
          'Stopping new connections and finishing in-flight requests before closing',
          'Restarting the server automatically',
          'Logging all errors before exit'
        ],
        correct: 1
      }
    ]
  },

  {
    id: 'capstone-project',
    section: 'Capstone',
    difficulty: 'advanced',
    title: 'Capstone: Build a Task Management API',
    content: [
      {
        type: 'heading',
        text: 'Overview'
      },
      {
        type: 'text',
        text: 'In this capstone project, we\'ll build a complete Task Management API from scratch — applying everything learned: routes, plugins, validation, authentication, database integration, testing, and deployment. This is not a simplified tutorial project. It\'s designed to mirror the architecture and patterns used in production Fastify applications.'
      },
      {
        type: 'note',
        label: 'Why building a full project matters',
        variant: 'tip',
        text: 'Tutorials teach individual concepts in isolation. But real applications are not collections of isolated features — they\'re interconnected systems where every decision affects every other part. Building a complete project from scratch forces you to confront the integration challenges that tutorials skip: how does authentication flow through every route? How do you organize 20+ files without creating spaghetti? How do you handle errors consistently across authentication, validation, and database operations? This capstone answers all of these questions by walking through a complete, production-pattern application. After completing it, you\'ll have a template you can use as the starting point for any Fastify project.'
      },
      {
        type: 'heading',
        text: 'Requirements'
      },
      {
        type: 'text',
        text: 'The API should support:'
      },
      {
        type: 'list',
        items: [
          'User registration and login with JWT authentication',
          'CRUD operations on tasks (create, read, update, delete)',
          'Each task has: title, description, status (todo/in-progress/done), priority (low/medium/high), due date',
          'Users can only see and modify their own tasks',
          'Filter tasks by status, priority, or search by title',
          'Input validation on all endpoints',
          'Proper error handling and status codes',
          'API documentation via Swagger'
        ]
      },
      {
        type: 'heading',
        text: 'Project Structure'
      },
      {
        type: 'code',
        lang: '',
        code: `task-api/
├── src/
│   ├── plugins/
│   │   ├── database.js    — PostgreSQL connection
│   │   ├── auth.js         — JWT authentication setup
│   │   └── swagger.js      — OpenAPI documentation
│   ├── routes/
│   │   ├── auth.js         — Registration, login, refresh
│   │   └── tasks.js        — Task CRUD, filtering
│   ├── schemas/
│   │   ├── user.json       — User validation schemas
│   │   └── task.json       — Task validation schemas
│   ├── services/
│   │   ├── userService.js  — User business logic
│   │   └── taskService.js  — Task business logic
│   └── app.js              — App factory
├── migrations/             — Database migrations
├── server.js               — Entry point
├── Dockerfile
├── docker-compose.yml
└── package.json`
      },
      {
        type: 'heading',
        text: 'Database Schema'
      },
      {
        type: 'code',
        lang: 'sql',
        code: `-- migrations/001.do.create-tables.sql
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(20) NOT NULL DEFAULT 'todo'
    CHECK (status IN ('todo', 'in-progress', 'done')),
  priority VARCHAR(10) NOT NULL DEFAULT 'medium'
    CHECK (priority IN ('low', 'medium', 'high')),
  due_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_tasks_user_id ON tasks(user_id);
CREATE INDEX idx_tasks_status ON tasks(status);`
      },
      {
        type: 'heading',
        text: 'Core Implementation: Plugins'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// src/plugins/auth.js
import fp from 'fastify-plugin';
import jwtPlugin from '@fastify/jwt';

async function authPlugin(fastify) {
  await fastify.register(jwtPlugin, {
    secret: fastify.config.JWT_SECRET,
  });

  fastify.decorate('authenticate', async function (request, reply) {
    try {
      await request.jwtVerify();
    } catch (err) {
      throw fastify.httpErrors.unauthorized('Invalid or expired token');
    }
  });
}

export default fp(authPlugin, { name: 'auth', dependencies: ['env'] });`
      },
      {
        type: 'heading',
        text: 'Core Implementation: Task Routes'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// src/routes/tasks.js
export default async function taskRoutes(fastify) {
  // All task routes require authentication
  fastify.addHook('onRequest', fastify.authenticate);

  // List tasks with filtering
  fastify.get('/tasks', {
    schema: {
      querystring: {
        type: 'object',
        properties: {
          status: { enum: ['todo', 'in-progress', 'done'] },
          priority: { enum: ['low', 'medium', 'high'] },
          search: { type: 'string' },
        }
      }
    }
  }, async (request) => {
    const { status, priority, search } = request.query;
    let query = 'SELECT * FROM tasks WHERE user_id = $1';
    const params = [request.user.sub];
    let paramCount = 1;

    if (status) {
      paramCount++;
      query += \` AND status = $\${paramCount}\`;
      params.push(status);
    }
    if (priority) {
      paramCount++;
      query += \` AND priority = $\${paramCount}\`;
      params.push(priority);
    }
    if (search) {
      paramCount++;
      query += \` AND title ILIKE $\${paramCount}\`;
      params.push(\`%\${search}%\`);
    }

    query += ' ORDER BY created_at DESC';
    const { rows } = await fastify.pg.query(query, params);
    return rows;
  });

  // Create task
  fastify.post('/tasks', {
    schema: {
      body: {
        type: 'object',
        required: ['title'],
        properties: {
          title: { type: 'string', minLength: 1, maxLength: 255 },
          description: { type: 'string' },
          status: { enum: ['todo', 'in-progress', 'done'] },
          priority: { enum: ['low', 'medium', 'high'] },
          dueDate: { type: 'string', format: 'date' },
        }
      }
    }
  }, async (request, reply) => {
    const { title, description, status, priority, dueDate } = request.body;
    const { rows } = await fastify.pg.query(
      \`INSERT INTO tasks (user_id, title, description, status, priority, due_date)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *\`,
      [request.user.sub, title, description, status || 'todo', priority || 'medium', dueDate]
    );
    reply.code(201);
    return rows[0];
  });

  // Update task — ensure user owns it
  fastify.put('/tasks/:id', async (request) => {
    const { rows } = await fastify.pg.query(
      \`UPDATE tasks SET title = $1, description = $2, status = $3,
        priority = $4, due_date = $5, updated_at = NOW()
       WHERE id = $6 AND user_id = $7
       RETURNING *\`,
      [request.body.title, request.body.description, request.body.status,
       request.body.priority, request.body.dueDate,
       request.params.id, request.user.sub]
    );
    if (rows.length === 0) {
      throw fastify.httpErrors.notFound('Task not found');
    }
    return rows[0];
  });

  // Delete task
  fastify.delete('/tasks/:id', async (request, reply) => {
    const { rowCount } = await fastify.pg.query(
      'DELETE FROM tasks WHERE id = $1 AND user_id = $2',
      [request.params.id, request.user.sub]
    );
    if (rowCount === 0) {
      throw fastify.httpErrors.notFound('Task not found');
    }
    reply.code(204);
  });
}`
      },
      {
        type: 'heading',
        text: 'Putting It All Together'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// src/app.js
import Fastify from 'fastify';
import envPlugin from '@fastify/env';
import corsPlugin from '@fastify/cors';
import rateLimitPlugin from '@fastify/rate-limit';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import databasePlugin from './plugins/database.js';
import authPlugin from './plugins/auth.js';
import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';

export function buildApp(opts = {}) {
  const app = Fastify({ logger: opts.logger ?? true });

  app.register(envPlugin, { schema: envSchema, dotenv: true });
  app.register(corsPlugin, { origin: true });
  app.register(rateLimitPlugin, { max: 100, timeWindow: '1 minute' });
  app.register(swagger, { openapi: { info: { title: 'Task API', version: '1.0.0' } } });
  app.register(swaggerUi, { routePrefix: '/docs' });

  app.register(databasePlugin);
  app.register(authPlugin);
  app.register(authRoutes, { prefix: '/auth' });
  app.register(taskRoutes, { prefix: '/api' });

  // Global error handler
  app.setErrorHandler(async (error, request, reply) => {
    reply.status(error.statusCode || 500).send({
      error: error.message,
      statusCode: error.statusCode || 500,
    });
  });

  return app;
}`
      },
      {
        type: 'heading',
        text: 'What You\'ve Built'
      },
      {
        type: 'text',
        text: 'This task management API demonstrates: user authentication with JWT, full CRUD with proper ownership checks, input validation with JSON Schema, PostgreSQL integration with parameterized queries, filtering and search, error handling, rate limiting, CORS, Swagger documentation, and a clean testable architecture. These are the patterns used in production Fastify applications at companies worldwide.'
      },
      {
        type: 'heading',
        text: 'Architectural Decisions: Why We Built It This Way'
      },
      {
        type: 'text',
        text: 'This capstone makes deliberate architectural choices. Understanding why we chose each pattern is just as important as understanding the code itself:'
      },
      {
        type: 'list',
        items: [
          'Why app factory (buildApp) instead of a singleton? — A single global Fastify instance cannot be tested: you can\'t create a fresh instance for each test without restarting the process. The factory pattern returns a new instance on every call, enabling parallel test execution and allowing tests to configure different plugins/mocks.',
          'Why service-based architecture instead of inline logic? — Placing business logic directly in route handlers works for 5 routes but becomes a maintenance nightmare at 50. Services are pure functions that can be unit-tested without Fastify at all. Routes become thin controllers that parse input, call services, and format output.',
          'Why UUIDs instead of auto-incrementing IDs? — Auto-incrementing IDs leak information (a competitor can estimate your user count by signing up twice and seeing the ID gap). They\'re predictable (an attacker can guess IDs by incrementing). UUIDs are unguessable, globally unique, and client-generated — the frontend can assign an ID before the POST request even reaches the server.',
          'Why ownership checks (\'WHERE user_id = $1\') in every query? — This is defense in depth. Even if a bug allows a user to access another user\'s task (broken auth, misconfigured middleware), the database query itself enforces ownership. The WHERE clause is the last line of defense that cannot be bypassed by client-side manipulation.',
          'Why filtering via query parameters instead of a /search endpoint? — GET /tasks is the canonical endpoint for retrieving tasks. Filtering via query parameters (/tasks?status=done&priority=high) keeps the API surface small and intuitive. A separate /search endpoint would duplicate routing, validation, and auth logic for no benefit.'
        ]
      },
      {
        type: 'heading',
        text: 'Extensions: Growing This Project'
      },
      {
        type: 'text',
        text: 'This API is deliberately minimal — a solid foundation, not a finished product. Here\'s a roadmap of features you can add, each building on what you already have:'
      },
      {
        type: 'heading',
        text: 'Extension 1: Pagination'
      },
      {
        type: 'text',
        text: 'Returning every task a user has ever created will eventually break. Pagination limits results and allows clients to request specific pages. The cursor-based approach is more reliable than offset-based for data that changes frequently.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Add pagination to GET /tasks
fastify.get('/tasks', {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        status: { enum: ['todo', 'in-progress', 'done'] },
        priority: { enum: ['low', 'medium', 'high'] },
        search: { type: 'string' },
        limit: { type: 'integer', minimum: 1, maximum: 100, default: 20 },
        cursor: { type: 'string' }, // ID of the last item from the previous page
      }
    }
  }
}, async (request) => {
  const { status, priority, search, limit, cursor } = request.query;
  let query = 'SELECT * FROM tasks WHERE user_id = $1';
  const params = [request.user.sub];
  let paramCount = 1;

  if (status) { paramCount++; query += \` AND status = $\${paramCount}\`; params.push(status); }
  if (priority) { paramCount++; query += \` AND priority = $\${paramCount}\`; params.push(priority); }
  if (search) { paramCount++; query += \` AND title ILIKE $\${paramCount}\`; params.push(\`%\${search}%\`); }
  if (cursor) { paramCount++; query += \` AND created_at < (SELECT created_at FROM tasks WHERE id = $\${paramCount})\`; params.push(cursor); }

  query += \` ORDER BY created_at DESC LIMIT $\${++paramCount}\`;
  params.push(limit + 1); // Fetch one extra to detect if there\'s a next page

  const { rows } = await fastify.pg.query(query, params);
  const hasMore = rows.length > limit;
  const items = hasMore ? rows.slice(0, limit) : rows;

  return {
    data: items,
    pagination: {
      hasMore,
      nextCursor: hasMore ? items[items.length - 1].id : null,
      limit,
    }
  };
});`
      },
      {
        type: 'heading',
        text: 'Extension 2: Batch Operations'
      },
      {
        type: 'text',
        text: 'Single-resource CRUD is fine for simple apps, but real applications need batch operations: mark multiple tasks as done, delete a selection of tasks, assign multiple tasks to a user. Batch operations must be atomic — all or nothing.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// POST /tasks/batch — perform multiple task operations atomically
fastify.post('/tasks/batch', {
  schema: {
    body: {
      type: 'object',
      required: ['operations'],
      properties: {
        operations: {
          type: 'array',
          items: {
            type: 'object',
            required: ['action', 'taskId'],
            properties: {
              action: { enum: ['complete', 'delete', 'update'] },
              taskId: { type: 'string', format: 'uuid' },
              data: {
                type: 'object',
                properties: {
                  status: { enum: ['todo', 'in-progress', 'done'] },
                  priority: { enum: ['low', 'medium', 'high'] },
                }
              }
            }
          }
        }
      }
    }
  }
}, async (request, reply) => {
  const { operations } = request.body;
  const client = await fastify.pg.connect();

  try {
    await client.query('BEGIN');

    const results = [];
    for (const op of operations) {
      const { rowCount } = await client.query(
        'SELECT id FROM tasks WHERE id = $1 AND user_id = $2',
        [op.taskId, request.user.sub]
      );
      if (rowCount === 0) {
        throw fastify.httpErrors.notFound(\`Task \${op.taskId} not found\`);
      }

      switch (op.action) {
        case 'complete':
          await client.query(
            'UPDATE tasks SET status = $1, updated_at = NOW() WHERE id = $2',
            ['done', op.taskId]
          );
          break;
        case 'delete':
          await client.query('DELETE FROM tasks WHERE id = $1', [op.taskId]);
          break;
        case 'update':
          await client.query(
            'UPDATE tasks SET status = $1, priority = $2, updated_at = NOW() WHERE id = $3',
            [op.data.status, op.data.priority, op.taskId]
          );
          break;
      }
      results.push({ taskId: op.taskId, action: op.action, success: true });
    }

    await client.query('COMMIT');
    return { processed: operations.length, results };
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
});`
      },
      {
        type: 'heading',
        text: 'Extension 3: WebSocket Real-Time Updates'
      },
      {
        type: 'text',
        text: 'REST is request-response: the client asks, the server answers. But what if you want the server to push updates to the client? WebSockets enable persistent, bidirectional connections.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Install @fastify/websocket
// npm install @fastify/websocket

import websocketPlugin from '@fastify/websocket';

await fastify.register(websocketPlugin);

// Maintain a set of connected clients
const connections = new Set();

fastify.register(async function (fastify) {
  fastify.get('/ws/tasks', { websocket: true }, (socket, req) => {
    // Verify authentication via query param or first message
    connections.add(socket);

    socket.on('message', (message) => {
      const { type, data } = JSON.parse(message);
      // Handle client messages (subscribe, unsubscribe, etc.)
    });

    socket.on('close', () => {
      connections.delete(socket);
    });
  });
});

// In your task route handlers, broadcast changes:
// After creating a task, notify all connected clients
function broadcastTaskUpdate(task) {
  const message = JSON.stringify({ type: 'task:created', data: task });
  for (const socket of connections) {
    socket.send(message);
  }
}

// Now clients receive real-time updates:
// { "type": "task:created", "data": { "id": "...", "title": "New Task" } }`
      },
      {
        type: 'heading',
        text: 'Extension 4: Soft Deletes and Audit Logging'
      },
      {
        type: 'text',
        text: 'Hard deletes (completely removing data) are permanent. Soft deletes (marking data as "deleted" with a timestamp while keeping it in the database) provide an undo mechanism and an audit trail.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Add soft delete support to the tasks table
// Migration: ALTER TABLE tasks ADD COLUMN deleted_at TIMESTAMP;

// Modified delete route — soft delete instead of hard delete
fastify.delete('/tasks/:id', async (request, reply) => {
  const { rowCount } = await fastify.pg.query(
    'UPDATE tasks SET deleted_at = NOW(), updated_at = NOW() WHERE id = $1 AND user_id = $2 AND deleted_at IS NULL',
    [request.params.id, request.user.sub]
  );
  if (rowCount === 0) {
    throw fastify.httpErrors.notFound('Task not found or already deleted');
  }
  reply.code(204);
});

// Add audit logging table
// CREATE TABLE audit_log (
//   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//   user_id UUID NOT NULL,
//   action VARCHAR(50) NOT NULL,
//   resource_type VARCHAR(50) NOT NULL,
//   resource_id UUID NOT NULL,
//   changes JSONB,
//   created_at TIMESTAMP DEFAULT NOW()
// );

// Add audit logging hook
fastify.addHook('onResponse', async (request, reply) => {
  if (reply.statusCode >= 200 && reply.statusCode < 300) {
    // Log successful mutations
    const actions = { POST: 'create', PUT: 'update', DELETE: 'delete' };
    const action = actions[request.method];
    if (action && request.user) {
      await fastify.pg.query(
        'INSERT INTO audit_log (user_id, action, resource_type, resource_id, changes) VALUES ($1, $2, $3, $4, $5)',
        [request.user.sub, action, request.url.split('/')[2], request.params.id, JSON.stringify(request.body)]
      );
    }
  }
});`
      },
      {
        type: 'heading',
        text: 'Your Next Steps'
      },
      {
        type: 'text',
        text: 'This capstone has covered the full lifecycle of building a production-grade Fastify application: architecture design, authentication, CRUD operations with ownership enforcement, input validation, database integration with pooling and transactions, filtering and search, API documentation, and extension patterns for pagination, batch operations, real-time updates, and audit logging.'
      },
      {
        type: 'text',
        text: 'You now have the skills to build backend applications that handle real users, real data, and real scale. The patterns in this capstone — not the specific code, but the architectural thinking behind it — will serve you across any framework, any language, and any project. Fastify is your tool; what you\'ve learned here is your craft.'
      },
      {
        type: 'note',
        label: 'A final word on learning',
        variant: 'tip',
        text: 'The best way to internalize these patterns is to rebuild this project from scratch without looking at the solution. You\'ll get stuck. You\'ll make mistakes. That\'s the point. Every bug you fix, every architectural decision you wrestle with, cements the knowledge far deeper than reading ever could. Pick a domain you care about — recipes, workouts, movie collections — and build a Fastify API for it using these exact patterns. That project will teach you more than any tutorial.'
      }
    ],
    quiz: [
      {
        question: 'In the task API, why do we include user_id in the WHERE clause for updates and deletes?',
        options: [
          'It is required by PostgreSQL syntax',
          'To ensure users can only modify their own tasks (ownership check)',
          'To improve query performance',
          'Fastify requires it'
        ],
        correct: 1
      },
      {
        question: 'What pattern does this API use for creating the Fastify instance?',
        options: ['Singleton', 'Factory (buildApp)', 'Decorator', 'Observer'],
        correct: 1
      },
      {
        question: 'Parameterized queries ($1, $2) are used instead of string concatenation to:',
        options: [
          'Make queries run faster',
          'Prevent SQL injection attacks',
          'Support multiple databases',
          'Reduce code length'
        ],
        correct: 1
      },
      {
        question: 'Swagger/OpenAPI docs are served at which route by default in this setup?',
        options: ['/swagger', '/docs', '/api-docs', '/openapi'],
        correct: 1
      }
    ]
  }
];

export const sections = [
  { id: 'foundations', name: 'Foundations', lessons: ['intro-backend', 'what-is-fastify', 'why-fastify'] },
  { id: 'nodejs', name: 'Node.js & JavaScript', lessons: ['nodejs-deep-dive'] },
  { id: 'core', name: 'Core Concepts', lessons: ['core-concepts', 'getting-started'] },
  { id: 'practical', name: 'Practical', lessons: ['practical-crud', 'middleware-hooks'] },
  { id: 'plugins', name: 'Plugins & Ecosystem', lessons: ['plugins-ecosystem'] },
  { id: 'advanced', name: 'Advanced Topics', lessons: ['typescript-fastify', 'advanced-validation'] },
  { id: 'databases', name: 'Databases', lessons: ['database-integration'] },
  { id: 'security', name: 'Security', lessons: ['authentication-security'] },
  { id: 'testing', name: 'Testing & DevOps', lessons: ['testing-with-fastify', 'deployment-production'] },
  { id: 'capstone', name: 'Capstone', lessons: ['capstone-project'] }
];

export const glossary = [
  { term: 'API', definition: 'Application Programming Interface — a set of rules and protocols for building and interacting with software applications.' },
  { term: 'Async/Await', definition: 'A syntax in JavaScript for handling asynchronous operations, making asynchronous code look and behave like synchronous code.' },
  { term: 'Backend', definition: 'The server-side of an application that handles business logic, database operations, authentication, and serves data to the frontend.' },
  { term: 'CRUD', definition: 'Create, Read, Update, Delete — the four basic operations of persistent storage in web applications.' },
  { term: 'Decorator', definition: 'In Fastify, a decorator adds custom properties or methods to the Fastify instance, request, or reply objects.' },
  { term: 'Encapsulation', definition: 'In Fastify plugins, encapsulation means routes, hooks, and decorators registered inside a plugin are scoped to that plugin and do not leak to other parts of the application.' },
  { term: 'Endpoint', definition: 'A specific URL path on a server that handles a particular type of request, such as /api/users or /login.' },
  { term: 'Framework', definition: 'A pre-built structure that provides a foundation for developing software applications, offering reusable components and conventions.' },
  { term: 'Hook', definition: 'In Fastify, a function that executes at a specific point in the request-response lifecycle (e.g., onRequest, preHandler, onSend).' },
  { term: 'HTTP', definition: 'Hypertext Transfer Protocol — the foundation of data communication on the World Wide Web, defining how messages are formatted and transmitted.' },
  { term: 'JSON', definition: 'JavaScript Object Notation — a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse.' },
  { term: 'JSON Schema', definition: 'A vocabulary that allows you to annotate and validate JSON documents, used by Fastify for request validation and response serialization.' },
  { term: 'Logger', definition: 'A component that records events, errors, and information about an application\'s execution. Fastify uses Pino for structured logging.' },
  { term: 'Middleware', definition: 'Software that sits between the operating system and applications, or between different applications, providing common services. In web frameworks, functions that process requests before they reach route handlers.' },
  { term: 'Node.js', definition: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine, allowing JavaScript to run on servers outside the browser.' },
  { term: 'npm', definition: 'Node Package Manager — the default package manager for Node.js, used to install and manage project dependencies.' },
  { term: 'Plugin', definition: 'In Fastify, a reusable module that adds functionality to the server, such as authentication, database connections, or route collections.' },
  { term: 'Port', definition: 'A communication endpoint on a computer. Servers listen on specific ports (e.g., port 3000) for incoming connections.' },
  { term: 'REST', definition: 'Representational State Transfer — an architectural style for designing networked applications using stateless operations and standard HTTP methods.' },
  { term: 'Route', definition: 'A mapping between an HTTP method + URL path and a handler function that processes requests matching that pattern.' },
  { term: 'Serialization', definition: 'The process of converting data structures or objects into a format that can be transmitted (usually JSON for web APIs).' },
  { term: 'Server', definition: 'A computer program that provides services to other programs (clients), typically listening for and responding to network requests.' },
  { term: 'Status Code', definition: 'A three-digit number returned by a server in an HTTP response indicating the result of the request (e.g., 200 = success, 404 = not found).' },
  { term: 'TypeScript', definition: 'A typed superset of JavaScript that compiles to plain JavaScript, adding static type definitions and improved tooling.' },
  { term: 'Ajv', definition: 'Another JSON Schema Validator — the library Fastify uses under the hood for schema-based validation. It pre-compiles schemas for maximum performance.' },
  { term: 'bcrypt', definition: 'A password hashing function designed to be deliberately slow, making brute-force attacks computationally expensive. Always use it (never SHA/MD5) for storing user passwords.' },
  { term: 'Cache', definition: 'A high-speed data storage layer that stores frequently accessed data in memory (e.g., Redis) to reduce database load and improve response times.' },
  { term: 'CI/CD', definition: 'Continuous Integration / Continuous Deployment — automating the testing and deployment of code changes to catch issues early and ship quickly.' },
  { term: 'Cluster (Node.js)', definition: 'A Node.js module that spawns multiple worker processes, each running an instance of your server, to utilize all CPU cores for improved throughput.' },
  { term: 'Connection Pool', definition: 'A cache of database connections that are reused across requests, avoiding the overhead of creating a new connection for each request.' },
  { term: 'CORS', definition: 'Cross-Origin Resource Sharing — a browser security mechanism that controls which origins can access a server\'s resources. Configured via @fastify/cors.' },
  { term: 'Docker', definition: 'A platform for packaging applications into standardized units called containers, ensuring consistent behavior across development, testing, and production.' },
  { term: 'Docker Compose', definition: 'A tool for defining and running multi-container Docker applications, typically used to run an app alongside its database, cache, and other services.' },
  { term: 'Environment Variable', definition: 'A key-value pair set outside the application (in .env files or the operating system) used for configuration like database URLs and secrets.' },
  { term: 'Event Loop', definition: 'The single-threaded mechanism in Node.js that handles asynchronous operations by processing callbacks in a continuous loop across six phases.' },
  { term: 'Graceful Shutdown', definition: 'The process of stopping a server by first refusing new connections, completing in-flight requests, closing database connections, and then exiting cleanly.' },
  { term: 'Health Check', definition: 'A special endpoint (typically GET /health) that returns the server status, used by load balancers and orchestrators to route traffic only to healthy instances.' },
  { term: 'Helmet', definition: 'A middleware that sets secure HTTP headers (CSP, HSTS, X-Frame-Options, etc.) to protect against common web vulnerabilities. Available via @fastify/helmet.' },
  { term: 'inject()', definition: 'A Fastify method that simulates HTTP requests in-memory without starting a real server — essential for fast integration testing.' },
  { term: 'JWT', definition: 'JSON Web Token — a compact, URL-safe token format used for authentication and information exchange. Contains a header, payload, and cryptographic signature.' },
  { term: 'Migration', definition: 'A script that modifies the database schema (creating/altering tables) in a version-controlled, repeatable way, keeping the schema in sync with application code.' },
  { term: 'OpenAPI (Swagger)', definition: 'A specification for describing REST APIs in a machine-readable format, allowing automatic documentation generation and client SDK creation.' },
  { term: 'Parameterized Query', definition: 'A database query where user input is passed as parameters ($1, $2, etc.) rather than concatenated into the SQL string, preventing SQL injection attacks.' },
  { term: 'PM2', definition: 'A production process manager for Node.js that keeps applications running, handles crashes, runs instances across CPU cores, and provides monitoring.' },
  { term: 'Rate Limiting', definition: 'Restricting the number of requests a client can make in a given time window, protecting the server from abuse and ensuring fair resource usage.' },
  { term: 'Redis', definition: 'An open-source, in-memory data structure store used as a database, cache, and message broker. Extremely fast with sub-millisecond response times.' },
  { term: 'Rollback (Database)', definition: 'Undoing all changes made within a transaction if any operation fails, ensuring the database remains in a consistent state.' },
  { term: 'SQL Injection', definition: 'A code injection attack where malicious SQL statements are inserted into application queries. Prevented by using parameterized queries and never concatenating user input into SQL.' },
  { term: 'Stream', definition: 'A sequence of data elements made available over time, allowing processing of large datasets piece by piece without loading everything into memory at once.' },
  { term: 'Transaction', definition: 'A sequence of database operations treated as a single unit — either all succeed (COMMIT) or all fail (ROLLBACK), ensuring data consistency.' },
  { term: 'TypeBox', definition: 'A TypeScript-first schema builder that compiles to JSON Schema. It provides type-safe schema definitions with full IDE autocompletion and type inference.' },
  { term: 'Type Provider', definition: 'In Fastify + TypeScript, a pattern where JSON Schema types are automatically inferred for request.params, request.body, etc., eliminating manual type assertions.' }
];
