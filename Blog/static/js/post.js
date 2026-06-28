document.addEventListener("DOMContentLoaded", () => {

    const summaryBtn = document.getElementById("summaryBtn");

    if (!summaryBtn) return;

    summaryBtn.addEventListener("click", async () => {

        const summaryBox = document.getElementById("summaryBox");
        const postId = summaryBtn.dataset.postId;

        summaryBox.innerHTML = "<p>Generating summary...</p>";

        try {

            const response = await fetch(`/api/summary/${postId}`);

            if (!response.ok) {
                throw new Error("Failed to generate summary");
            }

            const data = await response.json();

            summaryBox.innerHTML = `
                <div class="card mt-4">
                    <div class="card-body">

                        <h4>📝 Summary</h4>
                        <p>${data.summary}</p>

                        <h5>Key Takeaways</h5>

                        <ul>
                            ${data.key_takeaways
                                .map(item => `<li>${item}</li>`)
                                .join("")}
                        </ul>

                    </div>
                </div>
            `;

        } catch (error) {

            summaryBox.innerHTML = `
                <div class="alert alert-danger">
                    ${error.message}
                </div>
            `;

        }

    });

});