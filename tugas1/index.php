<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Faizul H</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <section class="hero-full">
        <div class="container-custom">
            <h1 class="main-intro">
                I'm Faizul H, a <span>Data Analyst</span> and tech enthusiast passionate about bridging logic and <span>design</span> to create meaningful insights.
            </h1>
            
            <div class="hero-footer">
                <div class="read-more">Scroll to explore &darr;</div>
                <div class="contact-links">
                    <span class="label">Contact</span>
                    <a href="mailto:2311102310@ittelkom-pwt.ac.id">Email</a>
                    <a href="https://instagram.com/_mfaizulh">Instagram</a>
                    <a href="https://linkedin.com">LinkedIn</a>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio-section" id="portfolio">
        <div class="container-custom">
            <h2 class="section-title">Case Studies</h2>
            <div class="coming-soon-box">
                <div class="reveal-text">COMING SOON</div>
                <p>Currently crunching data and crafting new stories. Stay tuned.</p>
            </div>
        </div>
    </section>

    <section class="contact-section">
        <div class="container-custom">
            <form id="contactForm" class="minimal-form">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" placeholder="What's on your mind?" rows="3" required></textarea>
                <button type="submit" id="btnSubmit">Send Message</button>
            </form>
            <div id="response" class="mt-3"></div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>