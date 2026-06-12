# Flask Projects

A collection of web applications built with [Flask](https://flask.palletsprojects.com/), organized as standalone projects under this repository. Each project lives in its own directory with its own dependencies and entry point.

## Projects

| Project | Description | Stack |
|---------|-------------|-------|
| [**Blog**](Blog/) | **Nexus Tech** — a responsive blog with dynamic posts, pagination, contact form (MySQL + Gmail SMTP), and a session-protected admin dashboard for creating, editing, and deleting posts with image uploads | Flask 3.1, SQLAlchemy, Flask-Mail, Bootstrap, Jinja2 |

## Getting Started

### Prerequisites

- Python 3.10 or later
- `pip` (Python package manager)
- [MySQL](https://dev.mysql.com/downloads/) (for the Blog app)

### Run the Blog app

Each project is self-contained. To run the Blog app:

```bash
cd Blog
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
```

**1. Configure the database and site settings**

Create a MySQL database (default name: `nexus`) and update [`Blog/config.json`](Blog/config.json):

```json
{
    "params": {
        "local_server": true,
        "local_uri": "mysql+pymysql://root:@localhost/nexus",
        "prod_uri": null,
        "fb_url": "https://www.facebook.com/...",
        "github_url": "https://github.com/...",
        "no_of_posts": 3,
        "upload_location": "path/to/Blog/static/assets/img"
    }
}
```

- Set `local_server` to `true` for local development (`local_uri`) or `false` for production (`prod_uri`).
- `no_of_posts` controls how many posts appear per page on the home page.
- `upload_location` is the folder where post header images are saved (use an absolute path on Windows).

**2. Set environment variables**

Create a `.env` file in the `Blog/` directory (see [`.gitignore`](Blog/.gitignore)):

```env
GMAIL_USERNAME=your@gmail.com
GMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your-admin-password
SECRET_KEY=your-random-secret-key
```

- `GMAIL_USERNAME` / `GMAIL_PASSWORD` — Gmail SMTP credentials for contact-form notifications. Use a [Google App Password](https://support.google.com/accounts/answer/185833) if two-factor authentication is enabled.
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — credentials for the admin dashboard at `/dashboard`.
- `SECRET_KEY` — Flask session secret for admin authentication.

**3. Start the server**

```bash
python main.py
```

Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser. The development server runs with debug mode enabled by default. On first run, SQLAlchemy creates the `contacts` and `posts` tables automatically.

## Repository Structure

```
Flask_Projects/
├── Blog/
│   ├── main.py              # Flask app, routes, models, mail, admin auth
│   ├── config.json          # Database URIs, pagination, upload path, links
│   ├── requirements.txt     # Python dependencies
│   ├── .gitignore           # Ignores venv/ and .env
│   ├── templates/
│   │   ├── layout.html      # Shared layout (nav, footer)
│   │   ├── index.html       # Home (paginated post list)
│   │   ├── about.html       # About
│   │   ├── post.html        # Single post view
│   │   ├── contact.html     # Contact form
│   │   ├── login.html       # Admin login
│   │   ├── admin.html       # Admin dashboard
│   │   └── edit.html        # Create / edit post
│   └── static/
│       ├── css/styles.css
│       ├── js/scripts.js
│       └── assets/
│           ├── favicon.ico
│           └── img/         # Post header images
└── README.md
```

## Blog — routes

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Home — paginated list of posts (`?page=2`, etc.) |
| `/index.html` | GET | Home |
| `/about.html` | GET | About page |
| `/post/<slug>` | GET | Single post by slug |
| `/contact.html` | GET, POST | Contact form (POST saves to DB and sends email) |
| `/dashboard` | GET, POST | Admin login (POST) or dashboard (GET, authenticated) |
| `/edit/<id>` | GET, POST | Create post (`/edit/0`) or edit existing post |
| `/delete/<id>` | GET, POST | Delete a post (admin only) |
| `/logout` | GET | End admin session |

## Admin dashboard

1. Go to [http://127.0.0.1:5000/dashboard](http://127.0.0.1:5000/dashboard).
2. Sign in with `ADMIN_EMAIL` and `ADMIN_PASSWORD` from your `.env` file.
3. From the dashboard you can create, edit, and delete posts. New post images are uploaded to the path set in `upload_location`.

## Tech stack

- **Backend:** [Flask](https://flask.palletsprojects.com/) 3.1, [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/) 3.1, [Flask-Mail](https://pythonhosted.org/Flask-Mail/)
- **Database:** MySQL via [PyMySQL](https://pypi.org/project/PyMySQL/) — `Contacts` and `Posts` models
- **Auth:** Flask sessions with `SECRET_KEY`
- **Uploads:** Werkzeug `secure_filename` for post header images
- **Config:** [python-dotenv](https://pypi.org/project/python-dotenv/) for secrets, `config.json` for site settings
- **Templates:** Jinja2
- **Frontend:** Bootstrap, Font Awesome, custom CSS/JS

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-change`)
3. Commit your changes with a clear message
4. Push to your fork and open a pull request

## License

This repository is for personal and educational use. Individual projects may include third-party themes or assets; refer to each project’s files for attribution details.
