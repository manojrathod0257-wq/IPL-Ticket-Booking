// Activity 5: Filter Matches by Team

document.addEventListener("DOMContentLoaded", function () {

    const teamFilter = document.getElementById("team");
    const matchRows = document.querySelectorAll("#matches tbody tr");

    if (teamFilter) {

        teamFilter.addEventListener("change", function () {

            const selectedTeam = teamFilter.value;

            matchRows.forEach(function (row) {

                const teams = row.cells[1].textContent;

                if (selectedTeam === "all" || teams.includes(selectedTeam)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }

            });

        });

    }

});

// Activity 5: Filter Matches by Team

document.addEventListener("DOMContentLoaded", function () {

    const teamFilter = document.getElementById("team");
    const matchRows = document.querySelectorAll("#matches tbody tr");

    if (teamFilter) {

        teamFilter.addEventListener("change", function () {

            const selectedTeam = teamFilter.value;

            matchRows.forEach(function (row) {

                const teams = row.cells[1].textContent;

                if (selectedTeam === "all" || teams.includes(selectedTeam)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }

            });

        });

    }

});

// Activity 5: Booking Form Submission

document.addEventListener("DOMContentLoaded", function () {

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();

            showToast("Your booking details have been submitted successfully!");

            bookingForm.reset();

        });

    }

});