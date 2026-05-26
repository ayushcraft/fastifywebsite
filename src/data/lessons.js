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
        text: 'Every application you use — from Instagram to Google Docs — has two sides: the frontend (what you see) and the backend (what happens behind the scenes). Understanding backend development is essential for building complete, functional applications.'
      },
      {
        type: 'heading',
        text: 'What is a Server?'
      },
      {
        type: 'text',
        text: 'A server is a computer program or device that provides functionality to other programs called "clients." Think of it like a restaurant: the kitchen (server) prepares meals based on orders from customers (clients) via waiters (HTTP requests). The server listens for incoming requests on a specific port (like a restaurant door number) and responds with the requested data.'
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
        text: 'HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. Every interaction between a client and server follows a request-response pattern:'
      },
      {
        type: 'text',
        text: 'An HTTP request contains:'
      },
      {
        type: 'list',
        items: [
          'Method — the action to perform (GET, POST, PUT, DELETE, etc.)',
          'URL — the address of the resource (e.g., /api/users/42)',
          'Headers — metadata like content type and authentication tokens',
          'Body — the data being sent (for POST/PUT requests)'
        ]
      },
      {
        type: 'text',
        text: 'An HTTP response contains:'
      },
      {
        type: 'list',
        items: [
          'Status Code — indicates result (200 OK, 404 Not Found, 500 Server Error)',
          'Headers — response metadata',
          'Body — the data returned (JSON, HTML, plain text, etc.)'
        ]
      },
      {
        type: 'heading',
        text: 'What is an API?'
      },
      {
        type: 'text',
        text: 'An API (Application Programming Interface) is a set of rules that allows programs to talk to each other. In web development, a REST API defines endpoints (URLs) that clients can call to create, read, update, or delete data — known as CRUD operations.'
      },
      {
        type: 'text',
        text: 'REST (Representational State Transfer) is the most common architectural style for designing networked applications. It uses standard HTTP methods:'
      },
      {
        type: 'list',
        items: [
          'GET /users → Retrieve all users',
          'GET /users/:id → Retrieve a specific user',
          'POST /users → Create a new user',
          'PUT /users/:id → Update an existing user',
          'DELETE /users/:id → Delete a user'
        ]
      },
      {
        type: 'heading',
        text: 'What is a Database?'
      },
      {
        type: 'text',
        text: 'A database is an organized collection of data stored and accessed electronically. Backend applications use databases to persist information beyond a single request. Common types include:'
      },
      {
        type: 'list',
        items: [
          'Relational databases (PostgreSQL, MySQL) — data organized in tables with rows and columns, using SQL for queries',
          'Document databases (MongoDB) — data stored as flexible JSON-like documents',
          'Key-value stores (Redis) — simple key-to-value mappings, often used for caching'
        ]
      },
      {
        type: 'text',
        text: 'The backend acts as an intermediary between the client and the database — it validates requests, applies business logic, queries the database, and returns formatted responses.'
      },
      {
        type: 'heading',
        text: 'Why Do We Need a Backend?'
      },
      {
        type: 'list',
        items: [
          'Security — keep sensitive logic and database credentials hidden from users',
          'Data persistence — store data permanently, not just in browser memory',
          'Authentication — verify user identity before granting access',
          'Business logic — enforce rules that should never live on the client side',
          'Performance — offload heavy computation to servers, keeping frontend fast'
        ]
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
        text: 'Fastify is a high-performance web framework for Node.js, designed with a focus on speed, low overhead, and developer experience. It provides a powerful plugin architecture, schema-based validation, and excellent logging capabilities out of the box.'
      },
      {
        type: 'heading',
        text: 'Framework vs Runtime'
      },
      {
        type: 'text',
        text: 'Node.js is a JavaScript runtime — it lets you run JavaScript on a server. A framework like Fastify sits on top of Node.js and provides structure, utilities, and conventions to build web applications efficiently. Without a framework, you would need to manually:'
      },
      {
        type: 'list',
        items: [
          'Parse incoming HTTP requests byte by byte',
          'Route requests to the correct handler based on URL and method',
          'Serialize response data into proper HTTP responses',
          'Handle errors, validation, and logging yourself'
        ]
      },
      {
        type: 'text',
        text: 'Fastify handles all of this for you, letting you focus on your application logic.'
      },
      {
        type: 'heading',
        text: 'Key Characteristics'
      },
      {
        type: 'list',
        items: [
          'Extremely fast — can handle tens of thousands of requests per second',
          'Plugin-based architecture — everything is a plugin, making code modular and reusable',
          'Schema-based validation — define input/output shapes and Fastify validates automatically',
          'First-class TypeScript support — built with TypeScript, provides excellent type inference',
          'Rich ecosystem — official plugins for authentication, CORS, rate limiting, database integration',
          'Detailed logging — built-in Pino logger for structured, high-performance logging'
        ]
      },
      {
        type: 'heading',
        text: 'Use Cases'
      },
      {
        type: 'text',
        text: 'Fastify excels in scenarios requiring high throughput and low latency:'
      },
      {
        type: 'list',
        items: [
          'RESTful APIs and microservices',
          'Real-time applications (with WebSocket support)',
          'API gateways and proxies',
          'Serverless functions',
          'Backend for mobile applications',
          'Any application where performance matters'
        ]
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// A minimal Fastify server in just 10 lines
import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  await fastify.listen({ port: 3000 });
};

start();`
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
        text: 'Speed and Performance'
      },
      {
        type: 'text',
        text: 'Fastify is one of the fastest Node.js web frameworks available. In benchmarks, it consistently outperforms Express, Koa, and Hapi by significant margins. This is achieved through:'
      },
      {
        type: 'list',
        items: [
          'Efficient routing using a Radix tree (a compressed trie data structure)',
          'Minimal overhead — Fastify avoids unnecessary abstractions',
          'Schema-based serialization — JSON serialization is 2-3x faster than JSON.stringify()',
          'Async-first design — native support for async/await without wrapper libraries'
        ]
      },
      {
        type: 'diagram',
        alt: 'Performance comparison bar chart: Fastify ~65k req/sec, Express ~15k req/sec, Hapi ~12k req/sec',
        label: 'Requests/sec (higher is better): Fastify ████████████ 65k | Express ███ 15k | Hapi ██ 12k | Koa ████ 20k'
      },
      {
        type: 'heading',
        text: 'Minimal Overhead'
      },
      {
        type: 'text',
        text: 'Fastify follows a "pay for what you use" philosophy. The core framework is lightweight, and everything beyond basic routing (authentication, CORS, compression, etc.) is an opt-in plugin. This means your application only includes the code it actually needs.'
      },
      {
        type: 'heading',
        text: 'Plugin System'
      },
      {
        type: 'text',
        text: 'Fastify\'s plugin system is one of its most powerful features. Plugins are encapsulated, meaning each plugin has its own scope for routes, hooks, and decorators. This prevents conflicts and makes code highly modular. Plugins can be nested, creating a tree of encapsulated contexts.'
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
        text: 'Schema Validation'
      },
      {
        type: 'text',
        text: 'Fastify uses JSON Schema to validate request inputs and serialize response outputs. This provides:'
      },
      {
        type: 'list',
        items: [
          'Automatic type coercion and validation on every request',
          'Detailed error messages when validation fails',
          'Faster JSON serialization using pre-compiled schemas',
          'Automatic Swagger/OpenAPI documentation generation',
          'Protection against malformed or malicious input'
        ]
      },
      {
        type: 'heading',
        text: 'Comparison with Other Frameworks'
      },
      {
        type: 'text',
        text: 'Express — the most popular Node.js framework. It\'s simple and has a massive ecosystem, but lacks built-in validation, has slower performance, and uses callback-based middleware. Fastify provides better defaults, validation, and speed.'
      },
      {
        type: 'text',
        text: 'Hapi — a configuration-driven framework focused on enterprise applications. It offers rich built-in features but has more overhead and a steeper learning curve. Fastify is lighter and faster while still providing robust tooling.'
      },
      {
        type: 'text',
        text: 'Koa — a minimal framework by the Express team using async/await. It\'s lightweight but requires many third-party libraries. Fastify offers a more complete out-of-the-box experience with better performance.'
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
      }
    ]
  },

  {
    id: 'core-concepts',
    section: 'Core Concepts',
    difficulty: 'intermediate',
    title: 'Core Concepts',
    content: [
      {
        type: 'heading',
        text: 'Routes'
      },
      {
        type: 'text',
        text: 'Routes define the endpoints your server exposes. Each route specifies an HTTP method, a URL path, and a handler function that processes the request and returns a response.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Basic route definition
fastify.get('/hello', async (request, reply) => {
  return { message: 'Hello, World!' };
});

// Route with URL parameters
fastify.get('/users/:id', async (request, reply) => {
  const { id } = request.params;
  return { userId: id };
});

// Route with query string
fastify.get('/search', async (request, reply) => {
  const { q, page } = request.query;
  return { results: [], query: q, page };
});

// Route with body (POST)
fastify.post('/users', async (request, reply) => {
  const { name, email } = request.body;
  return { created: { name, email } };
});`
      },
      {
        type: 'diagram',
        alt: 'Request lifecycle diagram showing: Request → URL Parsing → Route Matching → Schema Validation → Pre-handler Hooks → Handler → Serialization → Response',
        label: 'Request Lifecycle:\n1. Request arrives at server\n2. URL parsed, method identified\n3. Radix tree matches route\n4. JSON Schema validates input\n5. Pre-handler hooks execute (auth, etc.)\n6. Route handler runs\n7. Response serialized (JSON Schema)\n8. Response sent to client'
      },
      {
        type: 'heading',
        text: 'Hooks (Middleware)'
      },
      {
        type: 'text',
        text: 'Hooks allow you to execute code at specific points in the request-response lifecycle. They are Fastify\'s equivalent of middleware, but more structured and predictable.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// onRequest — runs when a request is received (before parsing)
fastify.addHook('onRequest', async (request, reply) => {
  request.startTime = Date.now();
});

// preHandler — runs after validation, before the handler
fastify.addHook('preHandler', async (request, reply) => {
  if (!request.headers.authorization) {
    throw fastify.httpErrors.unauthorized();
  }
});

// onSend — runs before the response is sent
fastify.addHook('onSend', async (request, reply, payload) => {
  reply.header('X-Response-Time', Date.now() - request.startTime);
  return payload;
});`
      },
      {
        type: 'heading',
        text: 'Request & Reply Objects'
      },
      {
        type: 'text',
        text: 'Fastify provides two core objects in every route handler:'
      },
      {
        type: 'text',
        text: 'request — contains everything about the incoming HTTP request:'
      },
      {
        type: 'list',
        items: [
          'request.params — URL parameters (e.g., /user/:id)',
          'request.query — query string parameters (?page=1)',
          'request.body — parsed request body (requires Content-Type)',
          'request.headers — HTTP headers',
          'request.cookies — parsed cookies (with @fastify/cookie)'
        ]
      },
      {
        type: 'text',
        text: 'reply — controls the HTTP response sent back:'
      },
      {
        type: 'list',
        items: [
          'reply.send(data) — send a response manually',
          'reply.code(statusCode) — set the HTTP status code',
          'reply.header(key, value) — set response headers',
          'reply.redirect(url) — redirect the client',
          'Returning a value from the handler automatically sends it'
        ]
      },
      {
        type: 'heading',
        text: 'Error Handling'
      },
      {
        type: 'text',
        text: 'Fastify has a robust error handling system. You can throw errors anywhere in the request lifecycle and Fastify will catch them, format the response, and log the error.'
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Fastify provides built-in HTTP error classes
import createError from '@fastify/error';

fastify.get('/protected', async (request, reply) => {
  if (!request.headers.authorization) {
    throw fastify.httpErrors.unauthorized('Missing auth token');
  }
  return { secret: 'data' };
});

// Custom error handler
fastify.setErrorHandler(async (error, request, reply) => {
  request.log.error(error);
  reply.status(error.statusCode || 500).send({
    error: error.message,
    statusCode: error.statusCode || 500,
  });
});`
      },
      {
        type: 'heading',
        text: 'Validation'
      },
      {
        type: 'text',
        text: 'Fastify uses JSON Schema for validation. You define the expected shape of request inputs and response outputs in the route options.'
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
      properties: {
        name: { type: 'string', minLength: 2 },
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
  // Input is already validated — guaranteed to be correct
  reply.code(201);
  return { id: 'abc123', name, email };
});`
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
        text: 'Complete Application'
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
        type: 'heading',
        text: 'JWT Authentication'
      },
      {
        type: 'text',
        text: 'JSON Web Tokens (JWT) are the most common authentication mechanism for APIs. The @fastify/jwt plugin makes JWT handling straightforward.'
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
        text: 'In this capstone project, we\'ll build a complete Task Management API from scratch — applying everything learned: routes, plugins, validation, authentication, database integration, testing, and deployment.'
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
        type: 'text',
        text: 'From here, you can extend this with: file uploads for task attachments, email notifications, WebSocket real-time updates, pagination, audit logging, and more. You now have the foundation to build production-ready backend applications with Fastify.'
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
