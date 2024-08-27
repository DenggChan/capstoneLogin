// sidebar.js
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.dashboard ul li a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.querySelector('.calendar');
    const monthYearElem = calendar.querySelector('.month-year');
    const prevMonthBtn = calendar.querySelector('.prev-month');
    const nextMonthBtn = calendar.querySelector('.next-month');
    const grid = calendar.querySelector('.calendar-grid');

    let currentDate = new Date();

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        // Set month and year display
        monthYearElem.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        // Clear previous days
        grid.innerHTML = '';

        // Get first and last day of the month
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDay = firstDay.getDay();
        const numDays = lastDay.getDate();

        // Add empty cells before the start of the month
        for (let i = 0; i < startDay; i++) {
            grid.innerHTML += '<div class="calendar-day"></div>';
        }

        // Add days of the month
        for (let i = 1; i <= numDays; i++) {
            const dayClass = i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? 'calendar-day today' : 'calendar-day';
            grid.innerHTML += `<div class="${dayClass}">${i}</div>`;
        }
    }

    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    // Initial render
    renderCalendar(currentDate);
});
