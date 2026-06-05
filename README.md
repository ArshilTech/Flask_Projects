# Flask Projects

A collection of web applications built with [Flask](https://flask.palletsprojects.com/), organized as standalone projects under this repository. Each project lives in its own directory with its own dependencies and entry point.

## Projects

| Project | Description | Stack |
|---------|-------------|-------|
| [**Blog**](Blog/) | **Nexus Tech** — a responsive blog-style site with home, about, post, and contact pages | Flask 3.1, Bootstrap, Jinja2 |

## Getting Started

### Prerequisites

- Python 3.10 or later
- `pip` (Python package manager)

### Run a project

Each project is self-contained. To run the Blog app:

```bash
cd Blog
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python main.py
```

Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser. The development server runs with debug mode enabled by default.

## Repository Structure

```
Flask_Projects/
├── Blog/
│   ├── main.py              # Flask application and routes
│   ├── requirements.txt     # Python dependencies
│   ├── templates/           # Jinja2 HTML templates
│   └── static/              # CSS, JavaScript, and assets
└── README.md
```

## Blog — routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/about.html` | About |
| `/post.html` | Sample post |
| `/contact.html` | Contact |

## Tech stack

- **Backend:** [Flask](https://flask.palletsprojects.com/) 3.1
- **Templates:** Jinja2
- **Frontend:** Bootstrap, Font Awesome, custom CSS/JS

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-change`)
3. Commit your changes with a clear message
4. Push to your fork and open a pull request

## License

This repository is for personal and educational use. Individual projects may include third-party themes or assets; refer to each project’s files for attribution details.
